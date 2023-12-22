import {NextRequest, NextResponse} from "next/server";
import {db} from "@/app/api/graphql/db";
import {randomUUID} from "crypto";

type ResponseData = {
    message: string
};

// TODO: Add a secret password or something to prevent abuse
// TODO: Figure out why we have to @ts-ignore the 'for of' loops.
export async function GET(
    req: Request | NextRequest,
    res: NextResponse<ResponseData>
) {
    const prompts = await db.prompts.findMany();

    const tagSet: Set<string> = new Set();

    const promptTagMap = new Map<string, Set<string>>();

    prompts.forEach(p => {
        if (!p.tags) {
            return;
        }

        const tags = new Set(
            p.tags
            .split(',')
            .map(t => t.trim())
            .map(t => t.toLowerCase())
            .filter(t => t)
        );

        tags.forEach(t => tagSet.add(t));

        promptTagMap.set(p.id, tags);
    });

    const tagIdMap = new Map<string, string>();

    // @ts-ignore
    for (let tag of tagSet.keys()) {
        let tagId = randomUUID() as string;

        const existingTag = await db.tags.findFirst({
            where: {
                name: tag
            }
        });

        if (!existingTag) {
            await db.tags.create({
                data: {
                    id: tagId,
                    name: tag
                }
            });
        } else {
            tagId = existingTag.id;
        }

        // Store for later when creating JOIN table entries
        tagIdMap.set(tag, tagId);
    }

    // @ts-ignore
    for (let promptId of promptTagMap.keys()) {
        const promptTags = promptTagMap.get(promptId);

        // Should not ever happen
        if (!promptTags) {
            throw new Error('missing key from set');
        }

        // @ts-ignore
        for (let tag of promptTags) {
            const tagId = tagIdMap.get(tag);

            // Should not ever happen
            if (!tagId) {
                throw new Error('unable to find tag id');
            }

            const existingMap = await db.tagsPromptsMap.findFirst({
                where: {
                    tagId: tagId,
                    promptID: promptId
                }
            });

            if (!existingMap) {
                continue;
            }

            try {
                await db.tagsPromptsMap.create({
                    data: {
                        tagId: tagId,
                        promptID: promptId
                    }
                });
            } catch (e) {
                // ignore the conflict
            }
        }
    }

    return NextResponse.json({
        message: 'successfully created tags'
    });
}

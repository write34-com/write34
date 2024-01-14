import {db} from "@/app/api/graphql/db";
import {randomUUID} from "crypto";

type TagWithId = {name: string, id: string};

export async function createDbTags(tags: string[]): Promise<TagWithId[]> {
  const tagsFromId: TagWithId[] = [];

  for (const tag of tags) {
    const existingTag = await db.tags.findFirst({
      where: {
        name: tag.toLowerCase()
      }
    });

    if (existingTag) {
      tagsFromId.push({
        name: tag.toLowerCase(),
        id: existingTag.id
      });
    } else {
      const newTag = await db.tags.create({
        data: {
          name: tag.toLowerCase(),
          id: randomUUID()
        }
      });

      tagsFromId.push({
        name: tag.toLowerCase(),
        id: newTag.id
      });
    }
  }

  return tagsFromId;
}

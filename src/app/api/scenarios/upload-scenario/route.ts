import { NextRequest, NextResponse } from "next/server";
import { db } from "@/app/api/graphql/db";
import {decodeDocument, NovelAIDocument} from "@/lib/novelai-scenario-decoder/decode";
import {randomUUID} from "crypto";
import {auth} from "@/lib/auth";
import {NextApiResponse} from "next";
import {createDbTags} from "@/app/api/lib/prompt-utils";

type ResponseData = {
  message: string
};

function getPromptFromDocument(document: NovelAIDocument): string {
  const {order, sections} = document;

  // For each item in the order, get the section with that id and append to the prompt
  return order.map((id) =>  sections.get(id))
    .map((section) => section?.text)
    .filter((section) => section)
    .join('\n');
}

function convertDateToISOString(date: Date): string {
  return date.toISOString().replace('T', ' ').replace('Z', '');
}

async function importNovelAIScenarioVersion3(scenario: NovelAIScenarioVersion3, authorId: string | undefined): Promise<{id: string}> {

  const {context, tags, title, description, lorebook} = scenario;

  const memory = context[0];

  const authorsNote = context[1];

  const prompt = scenario.prompt;

  const worldBookEntries = lorebook.entries.map((entry) => {
    return {
      keys: entry.keys,
      text: entry.text,
      id: randomUUID()
    };
  });
  const correlationId = randomUUID();
  const promptId = randomUUID();

  const tagsFromId = await createDbTags(tags);

  // Start a new Prisma transaction
  await db.$transaction([
    // Create a new scenario
    db.prompts.create({
      data: {
        title,
        description,
        tags: tags.filter((tag) => tag).join(', '),
        dateCreated: convertDateToISOString(new Date()),
        dateEdited: convertDateToISOString(new Date()),
        publishDate: convertDateToISOString(new Date()),
        promptContent: prompt,
        id: promptId,
        deleted: false,
        memory: memory.text,
        authorsNote: authorsNote.text,
        nsfw: 1,
        correlationId: correlationId,
        authorId: authorId,
        novelAiScenario: JSON.stringify(scenario),
        // TODO: Figure out how to create TagsPromptsMap entries here instead of in another chunk of the transaction
        worldInfos: {
          create: worldBookEntries.map((entry) => {
            return {
              id: entry.id,
              entry: entry.text,
              keys: entry.keys.join(', '),
              correlationId: correlationId,
              dateCreated: convertDateToISOString(new Date()),
              dateEdited: convertDateToISOString(new Date()),
            };
          })
        }
      }
    }),
    ...tagsFromId.map((tag) => {
      return db.tagsPromptsMap.create({
        data: {
          tagId: tag.id,
          promptID: promptId
        }
      });
    }),
  ]);

  return {
    id: promptId
  };
}

async function importNovelAIContainerVersion1(scenario: NovelAIScenarioContainerVersion1, authorId: string | undefined): Promise<{id: string}> {

  const {title, description, tags, createdAt, lastUpdatedAt} = scenario.metadata;

  const {document, context, lorebook} = scenario.content;

  const memory = context[0];

  const authorsNote = context[1];

  const prompt= getPromptFromDocument(decodeDocument(document));

  const worldBookEntries = lorebook.entries.map((entry) => {
    return {
      keys: entry.keys,
      text: entry.text,
      id: randomUUID()
    };
  });
  const correlationId = randomUUID();
  const promptId = randomUUID();

  const tagsFromId = await createDbTags(tags);

  // Start a new Prisma transaction
  await db.$transaction([
    // Create a new scenario
    db.prompts.create({
      data: {
        title,
        description,
        tags: tags.filter((tag) => tag).join(', '),
        // TODO: Maybe keep the original dates, but for now I prefer to see new scenarios at the "top" of the search page
        dateCreated: convertDateToISOString(new Date()), // convertDateNumberToISOString(createdAt),
        dateEdited: convertDateToISOString(new Date()), // convertDateNumberToISOString(lastUpdatedAt),
        publishDate: convertDateToISOString(new Date()),
        promptContent: prompt,
        id: promptId,
        deleted: false,
        memory: memory.text,
        authorsNote: authorsNote.text,
        nsfw: 1,
        correlationId: correlationId,
        authorId: authorId,
        novelAiScenario: JSON.stringify(scenario),
        // TODO: Figure out how to create TagsPromptsMap entries here instead of in another chunk of the transaction
        worldInfos: {
          create: worldBookEntries.map((entry) => {
            return {
              id: entry.id,
              entry: entry.text,
              keys: entry.keys.join(', '),
              correlationId: correlationId,
              dateCreated: convertDateToISOString(new Date()),
              dateEdited: convertDateToISOString(new Date()),
            };
          })
        }
      }
    }),
    ...tagsFromId.map((tag) => {
      return db.tagsPromptsMap.create({
          data: {
            tagId: tag.id,
            promptID: promptId
          }
      });
    }),
  ]);

  return {
    id: promptId
  };
}

export async function POST(
  req: Request | NextRequest,
  res: NextResponse<ResponseData>
) {

  const session = await auth(
    // TODO: Figure out why these types are wrong (and very angry)
    // They'll likely shake itself out as NextAuth and Next.js 14 become more mainstream
    // @ts-ignore
    req,
    {
      ...res,
      getHeader: (name: string) => res.headers?.get(name),
      setHeader: (name: string, value: string) => res.headers?.set(name, value),
    } as unknown as NextApiResponse);

  // Re-enable this if we decide that we want to require login to upload scenarios
  // if (!session || !session.user || !session.user.email) {
  //   return NextResponse.json({ message: "Must be logged in to upload scenario"}, {
  //     status: 401,
  //   });
  // }

  const authorId = session?.user.id;

  // Re-enable this if we decide that we want to require login to upload scenarios
  // if (!authorId) {
  //   return NextResponse.json({ message: "Unknown user" }, {
  //     status: 500
  //   });
  // }

  if (!req.body) {
    return NextResponse.json({ message: "Missing body" }, {
      status: 400,
    });
  }

  try {
    // Read the JSON body of the request
    const body = (await req.json()) as (NovelAIScenarioVersion3 | NovelAIScenarioContainerVersion1);

    // TODO: Validate the JSON body of the request

    if (!body) {
      return NextResponse.json({ message: "Missing body" }, {
        status: 400,
      });
    }

    if ((body as any).scenarioVersion === 3) {
      const {id} = await importNovelAIScenarioVersion3(body as NovelAIScenarioVersion3, authorId);

      return NextResponse.json({
        promptId: id,
        message: 'Successfully created new document (NovelAI Scenario v3)'
      });
    } else if ((body as any).storyContainerVersion === 1) {
      const {id} = await importNovelAIContainerVersion1(body as NovelAIScenarioContainerVersion1, authorId);

      return NextResponse.json({
        promptId: id,
        message: 'Successfully created new document (NovelAI Container v1)'
      });
    } else {
      return NextResponse.json({ message: "Invalid scenario version" }, {
        status: 400,
      });
    }
  } catch (e) {
    console.error('NovelAI Scenario Upload error:', e);
    return NextResponse.json({ message: "Invalid JSON" }, {
      status: 400,
    });
  }
}

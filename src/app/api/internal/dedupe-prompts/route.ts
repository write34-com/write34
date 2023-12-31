import { NextRequest, NextResponse } from "next/server";
import { db } from "@/app/api/graphql/db";

type ResponseData = {
  message: string
};

export async function GET(
  req: Request | NextRequest,
  res: NextResponse<ResponseData>
) {
  // Fetch all prompts
  // const prompts = await db.prompts.findMany();
  //
  // // Mapping to store the earliest entry for each set of duplicates
  // const uniquePrompts = new Map();
  //
  // for (const prompt of prompts) {
  //   const key = `${prompt.title}-${prompt.description}-${prompt.promptContent}-${prompt.tags}-${prompt.memory}-${prompt.authorsNote}`;
  //   if (!uniquePrompts.has(key)) {
  //     uniquePrompts.set(key, prompt);
  //   } else {
  //     // Compare dates and keep the earliest
  //     if (new Date(prompt.dateCreated) < new Date(uniquePrompts.get(key).dateCreated)) {
  //       uniquePrompts.set(key, prompt);
  //     }
  //   }
  // }
  //
  // // Array of ids to keep
  // const idsToKeep = Array.from(uniquePrompts.values()).map(prompt => prompt.id);
  //
  // for (const prompt of prompts) {
  //   if (!idsToKeep.includes(prompt.id)) {
  //     console.log(`Deleting prompt ${prompt.id}`);
  //     // await db.prompts.delete({
  //     //   where: {
  //     //     id: prompt.id
  //     //   }
  //     // });
  //     await db.$queryRaw`DELETE FROM "Prompts" WHERE "id" = ${prompt.id}`;
  //   }
  // }

  // Delete all duplicates
  // await db.prompts.deleteMany({
  //   where: {
  //     NOT: {
  //       id: {
  //         in: idsToKeep
  //       }
  //     }
  //   }
  // });

  return NextResponse.json({
    message: 'Successfully removed duplicate prompts'
  });
}

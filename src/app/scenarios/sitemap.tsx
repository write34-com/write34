import {db} from "@/app/api/graphql/db";
import {MetadataRoute} from "next";

const BASE_URL = 'https://write34.com'

export async function generateSitemaps() {

  return [{
    id: 0,
  }];
}

export default async function sitemap(params: {
  id: string,
}): Promise<MetadataRoute.Sitemap> {

  const dbScenarios = await db.prompts.findMany({
    take: 100000,
    select: {
      id: true,
      // dateCreated: true,
      // dateEdited: true,
      // publishDate: true,
    }
  });

  return dbScenarios.map((c) => ({
    url: `${BASE_URL}/scenarios/${c.id}`,
    // Apparently these are ignored by Google anyway to #yolo
    // lastModified: c.dateEdited || c.publishDate || c.dateCreated,
  }));
}
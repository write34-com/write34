import {db} from "@/app/api/graphql/db";
import {MetadataRoute} from "next";

const BASE_URL = 'https://write34.com';

export async function generateSitemaps() {

  return [{
    id: 0,
  }];
}

export default async function sitemap(params: {
  id: string,
}): Promise<MetadataRoute.Sitemap> {

  const dbScenarios = await db.tags.findMany({
    take: 10000,
    select: {
      name: true,
    }
  });

  return dbScenarios
    .filter((c) => c.name)
    .map((c) => ({
    url: `${BASE_URL}/search?tags=${encodeURIComponent(c.name)}`,
  }));
}

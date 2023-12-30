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

  return [{
    url: `${BASE_URL}/`,
    changeFrequency: 'daily',
  }, {
    url: `${BASE_URL}/tags`,
    changeFrequency: 'weekly',
  }, {
    url: `${BASE_URL}/search`,
    changeFrequency: 'weekly',
  }];
}
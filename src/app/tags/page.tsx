import loadSerializableQuery from "@/relay/loadSerializableQuery";
import TagsViewComponentGetAllTagsQueryGraphql, {
  TagsViewComponentGetAllTagsQuery
} from "@/__generated__/TagsViewComponentGetAllTagsQuery.graphql";
import TagsViewClientComponent from "@/app/tags/TagsViewClientComponent";
import {Metadata, ResolvingMetadata} from "next";

export async function generateMetadata(
  props: {},
  parent: ResolvingMetadata
): Promise<Metadata> {
  return {
    title: 'Tags for NovelAI Scenarios & Prompts - write34',
  };
}

export default async function TagsViewPage({params}: {
  params: { scenario: string };
})
{
  const preloadedQuery = await loadSerializableQuery<
    typeof TagsViewComponentGetAllTagsQueryGraphql,
    TagsViewComponentGetAllTagsQuery
  >(TagsViewComponentGetAllTagsQueryGraphql.params, {});

  return <TagsViewClientComponent preloadedQuery={preloadedQuery}/>;
}

// export const runtime = 'edge';


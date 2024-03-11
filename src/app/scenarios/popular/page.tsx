import loadSerializableQuery from "@/relay/loadSerializableQuery";
import TagsViewComponentGetAllTagsQueryGraphql, {
  TagsViewComponentGetAllTagsQuery
} from "@/__generated__/TagsViewComponentGetAllTagsQuery.graphql";
import TagsViewClientComponent from "@/app/tags/TagsViewClientComponent";
import {Metadata, ResolvingMetadata} from "next";
import PopularScenariosClientComponent from "@/app/scenarios/popular/PopularScenariosClientComponent";
import PopularScenariosComponentGetPopularScenariosQueryGraphql, {
  PopularScenariosComponentGetPopularScenariosQuery
} from "@/__generated__/PopularScenariosComponentGetPopularScenariosQuery.graphql";

export async function generateMetadata(
  props: {},
  parent: ResolvingMetadata
): Promise<Metadata> {
  return {
    title: 'Most Popular Scenarios for NovelAI Scenarios & Prompts - write34',
    description: 'Explore the most popular scenarios and prompts to import into tools like NovelAI. With write34, you can create new worlds and characters for your AI writing tools faster.',
  };
}

export default async function PopularScenariosPage({params}: {
  params: { scenario: string };
})
{
  const preloadedQuery = await loadSerializableQuery<
    typeof PopularScenariosComponentGetPopularScenariosQueryGraphql,
    PopularScenariosComponentGetPopularScenariosQuery
  >(PopularScenariosComponentGetPopularScenariosQueryGraphql.params, {
    cursor: null,
    count: 24
  });

  return <PopularScenariosClientComponent preloadedQuery={preloadedQuery}/>;
}

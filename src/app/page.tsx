import loadSerializableQuery from "../relay/loadSerializableQuery";
import ViewAllScenariosQueryNode, {
  ViewAllScenariosQuery,
} from "../__generated__/ViewAllScenariosQuery.graphql";
import ViewAllScenariosClientComponent from "./ViewAllScenariosClientComponent";
import {Metadata, ResolvingMetadata} from "next";

export async function generateMetadata(
  props: {},
  parent: ResolvingMetadata
): Promise<Metadata> {
  return {
    title: 'NovelAI Scenarios & Prompts - write34',
    description: 'Discover 1000s of scenarios and prompts to import into tools like NovelAI. Write34 is a community of writers sharing and creating scenarios for AI writing tools.',
  };
}

export default async function Home() {

  const preloadedQuery = await loadSerializableQuery<
    typeof ViewAllScenariosQueryNode,
    ViewAllScenariosQuery
  >(ViewAllScenariosQueryNode.params, {
      cursor: null,
      count: 15
  });

  return <ViewAllScenariosClientComponent preloadedQuery={preloadedQuery} />;
}

export const revalidate = 0;

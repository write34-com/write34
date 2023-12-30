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

  return (
    <ViewAllScenariosClientComponent preloadedQuery={preloadedQuery} />
  );
}

export const revalidate = 0;

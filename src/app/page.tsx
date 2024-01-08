import loadSerializableQuery from "../relay/loadSerializableQuery";
import ViewAllScenariosQueryNode, {
  ViewAllScenariosQuery,
} from "../__generated__/ViewAllScenariosQuery.graphql";
import ViewAllScenariosClientComponent from "./ViewAllScenariosClientComponent";
import {getServerSession} from "next-auth";
import {auth} from "@/lib/auth";
import {Metadata, ResolvingMetadata} from "next";
import {decodeDocument} from "@/lib/novelai-scenario-decoder/decode";

export async function generateMetadata(
  props: {},
  parent: ResolvingMetadata
): Promise<Metadata> {
  return {
    title: 'NovelAI Scenarios & Prompts - write34',
  };
}

export default async function Home() {
  // TODO: Figure out why these types are jank
  const session = await getServerSession(auth as any);

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

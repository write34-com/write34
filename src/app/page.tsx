import Image from 'next/image';
import loadSerializableQuery from "../relay/loadSerializableQuery";
import ViewAllScenariosQueryNode, {
  ViewAllScenariosQuery,
} from "../__generated__/ViewAllScenariosQuery.graphql";
import ViewAllScenariosClientComponent from "./ViewAllScenariosClientComponent";
import {getServerSession} from "next-auth";
import {auth} from "@/lib/auth";

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
      <div>
          <div className="text-2xl m-4 dark:text-white">
            {JSON.stringify(session, null, 2)}
          </div>
        <ViewAllScenariosClientComponent preloadedQuery={preloadedQuery} />
      </div>
  );
}

export const revalidate = 0;

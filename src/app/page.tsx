import Image from 'next/image';
import loadSerializableQuery from "../relay/loadSerializableQuery";
import ViewAllScenariosQueryNode, {
  ViewAllScenariosQuery,
} from "../__generated__/ViewAllScenariosQuery.graphql";
import ViewAllScenariosClientComponent from "./ViewAllScenariosClientComponent";

export default async function Home() {

  const preloadedQuery = await loadSerializableQuery<
    typeof ViewAllScenariosQueryNode,
    ViewAllScenariosQuery
  >(ViewAllScenariosQueryNode.params, {
    // owner: "firstcontributions",
    // name: "first-contributions",
  });

  return (
      <div>
        <ViewAllScenariosClientComponent preloadedQuery={preloadedQuery} />
      </div>
  );
}

export const revalidate = 0;

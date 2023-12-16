import Image from 'next/image';
import loadSerializableQuery from "../relay/loadSerializableQuery";
import MainViewQueryNode, {
  MainViewQuery,
} from "../__generated__/MainViewQuery.graphql";
import MainViewClientComponent from "./MainViewClientComponent";

export default async function Home() {

  const preloadedQuery = await loadSerializableQuery<
    typeof MainViewQueryNode,
    MainViewQuery
  >(MainViewQueryNode.params, {
    // owner: "firstcontributions",
    // name: "first-contributions",
  });

  return (
      <div>
        <MainViewClientComponent preloadedQuery={preloadedQuery} />
      </div>
  );
}

export const revalidate = 0;

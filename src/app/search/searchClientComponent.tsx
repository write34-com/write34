"use client";

import {RelayEnvironmentProvider} from "react-relay";
import {getCurrentEnvironment} from "@/relay/clientEnvironment";
import {SearchComponent} from "@/app/search/searchComponent";
import {SerializablePreloadedQuery} from "@/relay/loadSerializableQuery";
import searchComponentViewQueryGraphql, {
  searchComponentViewQuery
} from "@/__generated__/searchComponentViewQuery.graphql";
import useSerializablePreloadedQuery from "@/relay/useSerializablePreloadedQuery";

const SearchClientComponent = (props: {
  queryRef: SerializablePreloadedQuery<
    typeof searchComponentViewQueryGraphql,
    searchComponentViewQuery>;
}) => {

  const environment = getCurrentEnvironment();

  const queryRef = useSerializablePreloadedQuery(
    environment,
    props.queryRef
  );

  return (
      <RelayEnvironmentProvider environment={environment}>
          <SearchComponent queryRef={queryRef}/>
      </RelayEnvironmentProvider>
  );
};

export default SearchClientComponent;
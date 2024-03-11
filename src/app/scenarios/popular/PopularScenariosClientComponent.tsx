'use client';

import {RelayEnvironmentProvider} from 'react-relay';
import {SerializablePreloadedQuery} from '@/relay/loadSerializableQuery';
import useSerializablePreloadedQuery from '@/relay/useSerializablePreloadedQuery';
import {getCurrentEnvironment} from '@/relay/clientEnvironment';
import PopularScenariosComponentGetPopularScenariosQueryGraphql, {
  PopularScenariosComponentGetPopularScenariosQuery
} from "@/__generated__/PopularScenariosComponentGetPopularScenariosQuery.graphql";
import PopularScenariosComponent from "@/app/scenarios/popular/PopularScenariosComponent";

const PopularScenariosClientComponent = (props: {
  preloadedQuery: SerializablePreloadedQuery<
    typeof PopularScenariosComponentGetPopularScenariosQueryGraphql,
    PopularScenariosComponentGetPopularScenariosQuery>;
}) => {
  const environment = getCurrentEnvironment(props.preloadedQuery);
  const queryRef = useSerializablePreloadedQuery(
    environment,
    props.preloadedQuery
  );

  return (
    <RelayEnvironmentProvider environment={environment}>
      <PopularScenariosComponent queryRef={queryRef}/>
    </RelayEnvironmentProvider>
  );
};

export default PopularScenariosClientComponent;
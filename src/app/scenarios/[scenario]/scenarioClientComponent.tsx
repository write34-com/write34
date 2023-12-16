"use client";

import {RelayEnvironmentProvider, useRelayEnvironment } from "react-relay";
import { SerializablePreloadedQuery } from "@/relay/loadSerializableQuery";
import useSerializablePreloadedQuery from "@/relay/useSerializablePreloadedQuery";
import ScenarioComponent from "@/app/scenarios/[scenario]/scenarioComponent";
import scenarioComponentViewQueryGraphql, {
    scenarioComponentViewQuery
} from "@/__generated__/scenarioComponentViewQuery.graphql";
import {getCurrentEnvironment} from "@/relay/clientEnvironment";

const ScenarioClientComponent = (props: {
    preloadedQuery: SerializablePreloadedQuery<typeof scenarioComponentViewQueryGraphql, scenarioComponentViewQuery>;
}) => {
    const environment = getCurrentEnvironment();
    const queryRef = useSerializablePreloadedQuery(
        environment,
        props.preloadedQuery
    );

    return (
        <RelayEnvironmentProvider environment={environment}>
            <ScenarioComponent queryRef={queryRef} />
        </RelayEnvironmentProvider>
    );
};

export default ScenarioClientComponent;
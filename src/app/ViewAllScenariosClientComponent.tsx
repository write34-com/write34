'use client';
import {Suspense} from 'react';
import {RelayEnvironmentProvider} from 'react-relay/hooks';
import {SerializablePreloadedQuery} from '@/relay/loadSerializableQuery';
import ViewAllScenariosQueryNode, {
    ViewAllScenariosQuery,
} from '@/__generated__/ViewAllScenariosQuery.graphql';
import {getCurrentEnvironment} from '@/relay/clientEnvironment';
import useSerializablePreloadedQuery from '@/relay/useSerializablePreloadedQuery';
import ViewAllScenarios from '@/app/ViewAllScenarios';


const ViewAllScenariosClientComponent = (props: {
    preloadedQuery: SerializablePreloadedQuery<typeof ViewAllScenariosQueryNode, ViewAllScenariosQuery>;
}) => {
    const environment = getCurrentEnvironment();
    const queryRef = useSerializablePreloadedQuery(environment, props.preloadedQuery);

    return (
        <RelayEnvironmentProvider environment={environment}>
            <Suspense fallback="Loading...">
                <ViewAllScenarios queryRef={queryRef} />
            </Suspense>
        </RelayEnvironmentProvider>
    );
};

export default ViewAllScenariosClientComponent;

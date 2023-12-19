'use client';
import {Suspense} from 'react';
import {RelayEnvironmentProvider} from 'react-relay/hooks';
import {SerializablePreloadedQuery} from '@/relay/loadSerializableQuery';
import MainViewQueryNode, {
    MainViewQuery,
} from '@/__generated__/MainViewQuery.graphql';
import {getCurrentEnvironment} from '@/relay/clientEnvironment';
import useSerializablePreloadedQuery from '@/relay/useSerializablePreloadedQuery';
import MainView from '@/app/MainView';


const MainViewClientComponent = (props: {
    preloadedQuery: SerializablePreloadedQuery<typeof MainViewQueryNode, MainViewQuery>;
}) => {
    const environment = getCurrentEnvironment();
    const queryRef = useSerializablePreloadedQuery(environment, props.preloadedQuery);

    return (
        <RelayEnvironmentProvider environment={environment}>
            <Suspense fallback="Loading...">
                <MainView queryRef={queryRef}/>
            </Suspense>
        </RelayEnvironmentProvider>
    );
};

export default MainViewClientComponent;

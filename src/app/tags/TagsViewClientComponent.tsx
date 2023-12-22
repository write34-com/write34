'use client';

import {RelayEnvironmentProvider } from 'react-relay';
import { SerializablePreloadedQuery } from '@/relay/loadSerializableQuery';
import useSerializablePreloadedQuery from '@/relay/useSerializablePreloadedQuery';
import {getCurrentEnvironment} from '@/relay/clientEnvironment';
import TagsViewComponentGetAllTagsQueryGraphql, {
    TagsViewComponentGetAllTagsQuery
} from "@/__generated__/TagsViewComponentGetAllTagsQuery.graphql";
import TagsViewComponent from "@/app/tags/TagsViewComponent";

const TagsViewClientComponent = (props: {
    preloadedQuery: SerializablePreloadedQuery<typeof TagsViewComponentGetAllTagsQueryGraphql, TagsViewComponentGetAllTagsQuery>;
}) => {
    const environment = getCurrentEnvironment();
    const queryRef = useSerializablePreloadedQuery(
        environment,
        props.preloadedQuery
    );

    return (
        <RelayEnvironmentProvider environment={environment}>
            <TagsViewComponent queryRef={queryRef} />
        </RelayEnvironmentProvider>
    );
};

export default TagsViewClientComponent;
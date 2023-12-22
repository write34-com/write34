
import loadSerializableQuery from "@/relay/loadSerializableQuery";
import ScenarioClientComponent from "@/app/scenarios/[scenario]/scenarioClientComponent";
import scenarioComponentViewQueryGraphql, {
    scenarioComponentViewQuery
} from "@/__generated__/scenarioComponentViewQuery.graphql";
import TagsViewComponentGetAllTagsQueryGraphql, {
    TagsViewComponentGetAllTagsQuery
} from "@/__generated__/TagsViewComponentGetAllTagsQuery.graphql";
import TagsViewClientComponent from "@/app/tags/TagsViewClientComponent";

export default async function TagsViewPage({ params }: {
    params: { scenario: string };
}) {
    const preloadedQuery = await loadSerializableQuery<
        typeof TagsViewComponentGetAllTagsQueryGraphql,
        TagsViewComponentGetAllTagsQuery
    >(TagsViewComponentGetAllTagsQueryGraphql.params, {});

    return <TagsViewClientComponent preloadedQuery={preloadedQuery} />;
}

// export const runtime = 'edge';


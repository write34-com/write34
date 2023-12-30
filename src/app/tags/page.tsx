
import loadSerializableQuery from "@/relay/loadSerializableQuery";
import ScenarioClientComponent from "@/app/scenarios/[scenario]/scenarioClientComponent";
import scenarioComponentViewQueryGraphql, {
    scenarioComponentViewQuery
} from "@/__generated__/scenarioComponentViewQuery.graphql";
import TagsViewComponentGetAllTagsQueryGraphql, {
    TagsViewComponentGetAllTagsQuery
} from "@/__generated__/TagsViewComponentGetAllTagsQuery.graphql";
import TagsViewClientComponent from "@/app/tags/TagsViewClientComponent";
import Head from "next/head";
import {Metadata, ResolvingMetadata} from "next";

export async function generateMetadata(
  props: {},
  parent: ResolvingMetadata
): Promise<Metadata> {
    return {
        title: 'Tags for NovelAI Scenarios & Prompts - write34',
    };
}

export default async function TagsViewPage({ params }: {
    params: { scenario: string };
}) {
    const preloadedQuery = await loadSerializableQuery<
        typeof TagsViewComponentGetAllTagsQueryGraphql,
        TagsViewComponentGetAllTagsQuery
    >(TagsViewComponentGetAllTagsQueryGraphql.params, {});

    return <>
        <Head>
            <title>Tags - write34</title>
        </Head>
        <TagsViewClientComponent preloadedQuery={preloadedQuery} />
    </>;
}

// export const runtime = 'edge';


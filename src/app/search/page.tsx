import SearchClientComponent from "@/app/search/searchClientComponent";
import {Metadata, ResolvingMetadata} from "next";
import loadSerializableQuery from "@/relay/loadSerializableQuery";
import TagsViewComponentGetAllTagsQueryGraphql, {
    TagsViewComponentGetAllTagsQuery
} from "@/__generated__/TagsViewComponentGetAllTagsQuery.graphql";
import searchComponentViewQueryGraphql, {
    searchComponentViewQuery
} from "@/__generated__/searchComponentViewQuery.graphql";
import {useSearchParams} from "next/navigation";
import {db} from "@/app/api/graphql/db";

export async function generateMetadata(
  props: {},
  parent: ResolvingMetadata
): Promise<Metadata> {
    return {
        title: 'Find NovelAI Scenarios & Prompts - Search - write34',
    };
}

export default async function SearchPage(props: {
    searchParams: { [key: string]: string | string[] | undefined }
}) {
    const searchParams = props.searchParams;

    const urlSearchQuery = searchParams.search;
    const urlTags = searchParams.tags;
    const urlNsfw = searchParams.nsfw;

    const preloadedQuery = await loadSerializableQuery<
      typeof searchComponentViewQueryGraphql,
      searchComponentViewQuery
    >(searchComponentViewQueryGraphql.params, {
        query: typeof urlSearchQuery === 'string' ? urlSearchQuery : undefined,
        tags: (typeof urlTags === 'string' ? urlTags : '')
          .split(',')
          .map(tag => tag.trim())
          .filter(tag => tag),
        nsfw: urlNsfw === 'true' ? true : urlNsfw === 'false' ? false : undefined,
        count: 15,
        cursor: null, // Adjust as needed for pagination
    });

    return (
        <div>
            {<SearchClientComponent queryRef={preloadedQuery} />}
        </div>
    );
}

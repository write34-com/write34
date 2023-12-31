import {
  graphql, PreloadedQuery, useLazyLoadQuery, usePreloadedQuery
} from "react-relay";
import { useDebounce } from 'use-debounce';
import {searchComponentViewQuery} from "@/__generated__/searchComponentViewQuery.graphql";
import SearchResults from "@/app/search/SearchResults";
import {Suspense, useEffect, useState} from "react";
import {redirect, useRouter, useSearchParams} from "next/navigation";
import LoadingSearch from "@/app/search/loading";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";

const SearchPageQuery = graphql`
  query searchComponentViewQuery($query: String, $count: Int!, $cursor: String, $tags: [String!], $nsfw: Boolean) {
    ...SearchResultsComponent_search
  }
`;

function redirectWithState(router: AppRouterInstance, searchQuery: string | undefined, tags: string | undefined, nsfw: boolean | undefined) {
  const url = new URL(window.location.href);
  if (searchQuery !== undefined && searchQuery.length > 0) {
    url.searchParams.set('search', searchQuery);
  } else {
    url.searchParams.delete('search');
  }
  if (tags !== undefined && tags.length > 0) {
    url.searchParams.set('tags', tags);
  } else {
    url.searchParams.delete('tags');
  }
  if (nsfw !== undefined) {
    url.searchParams.set('nsfw', nsfw.toString());
  } else {
    url.searchParams.delete('nsfw');
  }
  console.log('redirecting to', url.toString());
  router.replace(url.toString(), {
     scroll: false,
  });
}

export function SearchComponent(props: {
  queryRef: PreloadedQuery<searchComponentViewQuery>
}) {
  const query = usePreloadedQuery(
    SearchPageQuery,
    props.queryRef
  );

  const router = useRouter();

  const urlSearchQuery = props.queryRef.variables.query || '';
  const urlTags = props.queryRef.variables.tags || [];
  const urlNsfw = props.queryRef.variables.nsfw;

  const [searchQuery, setSearchQuery] = useState(urlSearchQuery);
  const [tags, setTags] = useState<string>(
    urlTags ? urlTags.join(', ') : ''
  );
  const [nsfw, setNsfw] = useState<boolean | undefined>(
    urlNsfw === null ? undefined : urlNsfw
  );
  const [debouncedSearchQuery] = useDebounce(searchQuery, 500);
  const [debouncedTagsQuery] = useDebounce(tags, 500);

  useEffect(() => {
    if (debouncedSearchQuery !== urlSearchQuery || debouncedTagsQuery !== urlTags.join(', ') || nsfw !== urlNsfw) {
      redirectWithState(router, debouncedSearchQuery, debouncedTagsQuery, nsfw);
    }
  }, [debouncedSearchQuery, debouncedTagsQuery, nsfw, urlNsfw, urlSearchQuery, urlTags]);


  const handleNsfwChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setNsfw(value === 'undefined' ? undefined : value === 'true');
  };

  const searchInput = (
      <div className="gap-4 mb-4 flex-col flex md:flex-row">
          <input
              type="text"
              placeholder="Search Scenarios by Content"
              className="w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              autoFocus={true}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
          />
          <input
              type="text"
              placeholder="Tags (comma separated)"
              className="w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
          />
          <select
              className="w-60 px-4 py-2 text-base text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              value={nsfw === undefined ? 'undefined' : nsfw.toString()}
              onChange={handleNsfwChange}>
              <option value="undefined">NSFW & SFW</option>
              <option value="true">NSFW Only</option>
              <option value="false">SFW Only</option>
          </select>
      </div>
  );

  // Style components with Tailwind CSS
  return (
      <div className="container mx-auto py-16 sm:py-20 px-8">
          <div className="text-3xl mt-4 mb-8 font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-50">
              Search Scenarios
          </div>
          {searchInput}
          <div className="mt-8 mb-4">
            <Suspense fallback={<LoadingSearch />}>
              {<SearchResults queryRef={query} />}
            </Suspense>
          </div>
      </div>
  );
}

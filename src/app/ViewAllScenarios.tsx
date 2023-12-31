import {
  graphql,
  PreloadedQuery,
  usePaginationFragment,
  usePreloadedQuery,
  useQueryLoader
} from "react-relay";
import {ViewAllScenariosQuery} from "@/__generated__/ViewAllScenariosQuery.graphql";
import Link from "next/link";
import {ViewAllScenarios_search$key} from "@/__generated__/ViewAllScenarios_search.graphql";
import React from "react";

const HomePageQuery = graphql`
    query ViewAllScenariosQuery($count: Int!, $cursor: String) {
        ...ViewAllScenarios_search
    }
`;

export function Results(queryRef: ViewAllScenarios_search$key) {

    const {
      data, loadNext, hasNext, isLoadingNext,
    } = usePaginationFragment<ViewAllScenariosQuery, ViewAllScenarios_search$key>(graphql`
        fragment ViewAllScenarios_search on Query
        @refetchable(queryName: "homeViewQueryPaginationQuery") {
            search {
                prompts(first: $count, after: $cursor, query: "", nsfw: false)
                @connection(key: "homeViewQuery_search__prompts") {
                    edges {
                        node {
                            id
                            title
                            description
                            tags
                            nsfw
                            dateCreated
                        }
                    }
                }
            }
        }
    `, queryRef);

  return (
    <>
      <div
        className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-x-4 gap-y-16 border-t border-gray-200 pt-10 sm:mt-8 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 bg-gray-200 dark:bg-gray-900">
        {data.search?.prompts?.edges?.map((edge) => {
          const link = '/scenarios/' + atob(edge?.node?.id || '').replace('PromptsSearch:', '');

          return (
              <Link key={edge?.node?.id}
                  href={link}>
            <article
                     className="flex max-w-xl flex-col items-start justify-between p-3 pb-0 rounded-xl border-gray-200 border-b bg-gray-200 dark:bg-gray-800">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={edge?.node?.dateCreated || undefined} className="text-gray-400">
                  {edge?.node?.dateCreated}
                </time>
                <div
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100 dark:bg-gray-700 dark:text-gray-50"
                >
                  {edge?.node?.nsfw ? 'NSFW' : 'SFW'}
                </div>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 dark:text-gray-100">
                  <span className="absolute inset-0"/>
                  {edge?.node?.title}
                </h3>
                <p
                  className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-400">{edge?.node?.description}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                {/*<img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />*/}
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900 dark:bg-gray-900 dark:text-gray-100">
                    <span className="absolute inset-0"/>
                    {/*{edge?.node?.id}*/}
                  </p>
                </div>
              </div>
            </article>
              </Link>
          );
        })}
      </div>
      {hasNext && (
        <div className="flex justify-center mt-12">
          <button
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
            onClick={() => loadNext(15)}
            disabled={!hasNext || isLoadingNext}
          >
            {isLoadingNext ? 'Loading...' : 'Load More'}
          </button>
        </div>
      )}
    </>
  );
}

export default function ViewAllScenarios(props: {
  initialQueryRef: PreloadedQuery<ViewAllScenariosQuery>;
})
{

  const query = usePreloadedQuery(HomePageQuery, props.initialQueryRef);

  const results = Results(query);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-gray-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-50">Scenarios</h2>
          <p className="mt-2 text-lg leading-8 text-gray-500">
            View prompts submitted by the community.
          </p>
        </div>
        {results}
      </div>
    </div>
  );
}

import {
  graphql, PreloadedQuery, usePaginationFragment,
  usePreloadedQuery,
} from "react-relay";
import Link from "next/link";
import {
  PopularScenariosComponentGetPopularScenariosQuery
} from "@/__generated__/PopularScenariosComponentGetPopularScenariosQuery.graphql";
import React from "react";
import {PopularScenariosComponent_search$key} from "@/__generated__/PopularScenariosComponent_search.graphql";

const GetPopularScenariosQuery = graphql`
    query PopularScenariosComponentGetPopularScenariosQuery($count: Int!, $cursor: String) {
        ...PopularScenariosComponent_search
    }
`;

export default function PopularScenariosComponent(props: {
  queryRef: PreloadedQuery<PopularScenariosComponentGetPopularScenariosQuery>
}) {

  const query = usePreloadedQuery(GetPopularScenariosQuery, props.queryRef);

  const {
      data, loadNext, hasNext, isLoadingNext,
    } = usePaginationFragment<PopularScenariosComponentGetPopularScenariosQuery, PopularScenariosComponent_search$key>(graphql`
        fragment PopularScenariosComponent_search on Query
        @refetchable(queryName: "popularViewQueryPaginationQuery") {
            search {
                prompts(first: $count, after: $cursor, query: "", orderField: "downloadCount", order: "desc")
                @connection(key: "popularViewQuery_search__prompts") {
                    edges {
                        node {
                            id
                            title
                            description
                            downloadCount
                        }
                    }
                }
            }
        }
    `, query);
  const {search} = data;

  if (!search) {
    return (
      <div>
        <div className="px-4 sm:px-0">
          <h3 className="text-base font-semibold leading-7 text-gray-900">No data in response</h3>
        </div>
      </div>
    );
  }

  return (
    <div className="py-4 px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-2xl lg:mx-0 pt-16 sm:pt-24 pb-4 sm:pb-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-50">
          Popular Scenarios
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-500 dark:text-gray-400">
          View the most popular prompts submitted by the community.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-6 border-t border-gray-200 dark:border-gray-400">
        {search.prompts.edges.map((prompt, index) => (
          <Link key={index} className="card shadow-xl bg-base-100 dark:bg-gray-800"
                href={`/scenarios/${prompt?.node.id}`}>
            <div className="card-body">
              <h2 className="card-title text-gray-900 dark:text-gray-50">
                {prompt?.node.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300">{prompt?.node.description}</p>
              <div className="card-actions justify-end gap-6">
                <div className="badge badge-outline badge-lg py-4 px-4 badge-info">
                  {prompt?.node.downloadCount} downloads
                </div>
              </div>
            </div>
          </Link>
        ))}
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
    </div>
  );
}

export const revalidate = 0;
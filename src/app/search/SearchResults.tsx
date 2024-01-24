import React, {Suspense, useCallback, useEffect} from 'react';
import {graphql, usePaginationFragment} from 'react-relay';
import {
  SearchResultsComponent_search$key
} from "@/__generated__/SearchResultsComponent_search.graphql";
import Link from "next/link";
import {searchComponentViewQuery} from "@/__generated__/searchComponentViewQuery.graphql";
import LoadingSearch from "@/app/search/loading";
import UpvoteDownvote from '@/components/UpvoteDownvote';

interface SearchResultsProps {
  queryRef: SearchResultsComponent_search$key
}

function SearchResults({queryRef}: SearchResultsProps) {
    const {
      data, loadNext, hasNext, isLoadingNext,
    } = usePaginationFragment<searchComponentViewQuery, SearchResultsComponent_search$key>(graphql`
        fragment SearchResultsComponent_search on Query
        @refetchable(queryName: "searchComponentViewQueryPaginationQuery") {
            search {
                prompts(first: $count, after: $cursor, query: $query, tags: $tags, nsfw: $nsfw)
                @connection(key: "searchComponentViewQuery_search__prompts") {
                    edges {
                        node {
                            id
                            title
                            description
                            tags
                            nsfw
                            upvotes
                            downvotes
                            isVotedByUser
                        }
                    }
                }
            }
        }
    `, queryRef);


    // Function to check if the user has scrolled to the bottom
  const handleScroll = useCallback(() => {
    // Window scroll position
    const scrollTop = window.scrollY;
    // Total height of the document
    const documentHeight = document.body.offsetHeight;
    // Height of the window's content area
    const windowHeight = window.innerHeight;

    // Buffer value (e.g., 100px before reaching the bottom)
    const buffer = 100;

    // Check if the user is near the bottom of the page
    if (windowHeight + scrollTop + buffer >= documentHeight && hasNext && !isLoadingNext) {
      loadNext(15);
    }
  }, [hasNext, isLoadingNext, loadNext]);

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  if (!data.search.prompts.edges.length) {
    return (
      <Suspense fallback={<LoadingSearch/>}>
        <div>
          <h2>No results found.</h2>
        </div>
      </Suspense>
    );
  }

  return (
    <Suspense fallback={<LoadingSearch/>}>
      <ul className="grid md:grid-cols-3 gap-4 items-baseline sm:grid-cols-1">
        {data.search.prompts.edges.map((edge) => {
          const prompt = edge?.node;
          if (!prompt) {
            return null;
          }

          const promptId = atob(prompt.id).replace('PromptsSearch:', '');

          const tags = prompt.tags?.split(',').filter(t => t) || [];

          return (
            <li key={prompt.id}>
              <div
                className="p-2 text-base text-gray-700 bg-white border border-gray-500 rounded-md shadow-sm dark:bg-gray-800 dark:text-gray-50">

                <Link key={prompt.id}
                      href={'/scenarios/' + promptId}>
                  <div className="inline-flex flex-col w-full">
                    <div
                      className="text-xl font-bold line-clamp-3 tracking-tight text-gray-900 dark:text-gray-50">
                      {prompt.title}
                    </div>
                    <div className="flex flex-grow w-full">
                      <p className="w-full mt-3 line-clamp-5 text-xs leading-5 text-gray-600 dark:text-gray-300">
                        {prompt.description}
                      </p>
                    </div>
                    <ul className="flex flex-wrap w-full pt-2 mt-4 border-gray-500 border-t">
                      <li className={`inline-flex items-center px-2.5 py-0.5 mr-1 mb-1 rounded-full text-xs font-medium text-white
                                                    ${prompt.nsfw ? 'bg-red-500' : 'bg-blue-500'}`}>
                        <span>{prompt.nsfw ? 'NSFW' : 'SFW'}</span>
                      </li>

                      {tags.map((tag) => {
                        return (
                          <li key={tag}
                              className="inline-flex items-center px-2.5 py-0.5 mr-1 mb-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-500 dark:text-gray-100">
                                                        <span>
                                                            {tag}
                                                        </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </Link>
                <div className="pt-2 mt-1 border-gray-500 border-t">
                  <UpvoteDownvote
                    initialUpvotes={prompt.upvotes}
                    initialDownvotes={prompt.downvotes}
                    promptId={promptId}
                    isUpvoted={prompt.isVotedByUser === 'up'}
                    isDownvoted={prompt.isVotedByUser === 'down'}
                  />
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      {hasNext && (
        <div className="flex justify-center mt-4">
          <button
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
            onClick={() => loadNext(12)}
            disabled={!hasNext || isLoadingNext}
          >
            {isLoadingNext ? 'Loading...' : 'Load More'}
          </button>
        </div>
      )}
    </Suspense>
  );
}

export default SearchResults;

import {
    graphql, useLazyLoadQuery
} from "react-relay";
import { useDebounce } from 'use-debounce';
import {searchComponentViewQuery} from "@/__generated__/searchComponentViewQuery.graphql";
import {useStore} from "@/store";
import SearchResults from "@/app/search/SearchResults";

const SearchPageQuery = graphql`
    query searchComponentViewQuery($query: String!, $count: Int!, $cursor: String) {
        ...SearchResultsComponent_search
    }
`;

export function SearchComponent() {
    const searchQuery = useStore((state) => state.searchQuery);
    const setSearchQuery = useStore((state) => state.setSearchQuery);
    const [debouncedSearchQuery] = useDebounce(searchQuery, 500);

    const query = useLazyLoadQuery<searchComponentViewQuery>(SearchPageQuery, {
        query: debouncedSearchQuery, // Replace with dynamic search term as needed
        count: 15,
        cursor: null, // Adjust as needed for pagination
    });

    const searchInput = (
        <div className="flex items-center justify-between w-full text-base text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm dark:bg-gray-800 dark:text-gray-50">
            <input
                type="text"
                placeholder="Search Scenarios by Content"
                className="w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                autoFocus={true}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
        </div>
    );

    // Style components with Tailwind CSS
    return (
        <div className="container mx-auto py-16 sm:py-20">
            <div className="text-3xl mt-4 mb-8 font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-50">
                Search Scenarios
            </div>
            {searchInput}
            <div className="mt-8 mb-4">
                {searchQuery && <SearchResults queryRef={query} />}
            </div>
        </div>
    );
}

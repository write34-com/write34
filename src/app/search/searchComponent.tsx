import {
    graphql, useLazyLoadQuery
} from "react-relay";
import { useDebounce } from 'use-debounce';
import {searchComponentViewQuery} from "@/__generated__/searchComponentViewQuery.graphql";
import {useStore} from "@/store";
import SearchResults from "@/app/search/SearchResults";
import {useState} from "react";

const SearchPageQuery = graphql`
    query searchComponentViewQuery($query: String, $count: Int!, $cursor: String, $tags: [String!], $nsfw: Boolean) {
        ...SearchResultsComponent_search
    }
`;

export function SearchComponent() {
    const searchQuery = useStore((state) => state.searchQuery);
    const setSearchQuery = useStore((state) => state.setSearchQuery);
    const [tags, setTags] = useState('');
    const [nsfw, setNsfw] = useState<boolean | undefined>(undefined);
    const [debouncedSearchQuery] = useDebounce(searchQuery, 500);
    const [debouncedTagsQuery] = useDebounce(tags, 500);

    const query = useLazyLoadQuery<searchComponentViewQuery>(SearchPageQuery, {
        query: debouncedSearchQuery,
        tags: debouncedTagsQuery.split(',').map(tag => tag.trim()).filter(tag => tag),
        nsfw: nsfw,
        count: 15,
        cursor: null, // Adjust as needed for pagination
    });

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
                {<SearchResults queryRef={query} />}
            </div>
        </div>
    );
}

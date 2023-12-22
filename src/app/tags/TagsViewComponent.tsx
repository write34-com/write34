import {
    graphql, PreloadedQuery,
    usePreloadedQuery,
} from "react-relay";
import {Suspense} from "react";
import {TagsViewComponentGetAllTagsQuery} from "@/__generated__/TagsViewComponentGetAllTagsQuery.graphql";

const GetAllTagsQuery = graphql`
    query TagsViewComponentGetAllTagsQuery {
        viewer {
            tagCounts {
                count
                name
                description
            }
        }
    }
`;

export default function TagsViewComponent(props: { queryRef: PreloadedQuery<TagsViewComponentGetAllTagsQuery> }) {
    const data = usePreloadedQuery(
        GetAllTagsQuery,
        props.queryRef
    );
    const {viewer} = data;

    if (!viewer) {
        return (
            <Suspense fallback="Loading prompt...">
                <div>
                    <div className="px-4 sm:px-0">
                        <h3 className="text-base font-semibold leading-7 text-gray-900">No data in response</h3>
                    </div>
                </div>
            </Suspense>
        );
    }

    return (
        <div className="p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {viewer.tagCounts.map((tag, index) => (
                    <div key={index} className="card shadow-xl bg-base-100 dark:bg-gray-800">
                        <div className="card-body">
                            <h2 className="card-title text-gray-900 dark:text-gray-50">
                                {tag.name}
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300">{tag.description}</p>
                            <div className="card-actions justify-end gap-6">
                                <div className="badge badge-outline badge-lg py-4 px-4 badge-info">
                                    {tag.count} uses
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export const revalidate = 0;
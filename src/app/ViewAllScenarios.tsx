import {graphql, PreloadedQuery, usePreloadedQuery} from "react-relay";
import {ViewAllScenariosQuery} from "@/__generated__/ViewAllScenariosQuery.graphql";
import Link from "next/link";

export default function ViewAllScenarios(props: {
    queryRef: PreloadedQuery<ViewAllScenariosQuery>;
}) {
    // Read the preloaded query data from the props
    const data = usePreloadedQuery(graphql`
        query ViewAllScenariosQuery {
            prompts(first: 15) {
                edges {
                    node {
                        id
                        title
                        description
                        dateCreated
                        dateEdited
                        publishDate
                        nsfw
                    }
                }
            }
        }
    `, props.queryRef);

    return (
        <div className="bg-white dark:bg-gray-900 dark:text-gray-100 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-50">Scenarios</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-500">
                        View prompts submitted by the community.
                    </p>
                </div>
                <div
                    className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {data.prompts?.edges?.map((edge) => {
                        const link = '/scenarios/' + atob(edge?.node?.id || '').replace('Prompts:', '');

                        return (<article key={edge?.node?.id}
                                         className="flex max-w-xl flex-col items-start justify-between border-gray-200 border-b">
                                <div className="flex items-center gap-x-4 text-xs">
                                    <time dateTime={edge?.node?.publishDate || undefined} className="text-gray-400">
                                        {edge?.node?.publishDate}
                                    </time>
                                    <Link
                                        href={link}
                                        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100 dark:bg-gray-700 dark:text-gray-50"
                                    >
                                        {edge?.node?.nsfw ? 'NSFW' : 'SFW'}
                                    </Link>
                                </div>
                                <div className="group relative">
                                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 dark:text-gray-100">
                                        <Link href={link}>
                                            <span className="absolute inset-0"/>
                                            {edge?.node?.title}
                                        </Link>
                                    </h3>
                                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-400">{edge?.node?.description}</p>
                                </div>
                                <div className="relative mt-8 flex items-center gap-x-4">
                                    {/*<img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />*/}
                                    <div className="text-sm leading-6">
                                        <p className="font-semibold text-gray-900 dark:bg-gray-900 dark:text-gray-100">
                                            <Link href={link}>
                                                <span className="absolute inset-0"/>
                                                {/*{edge?.node?.id}*/}
                                            </Link>
                                        </p>
                                        {/*<p className="text-gray-600">{post.author.role}</p>*/}
                                    </div>
                                </div>
                            </article>);
                    })}
                </div>
            </div>
        </div>
    );
}

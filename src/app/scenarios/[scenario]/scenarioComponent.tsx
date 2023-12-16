import {
    graphql, PreloadedQuery,
    usePreloadedQuery,
} from "react-relay";
import {Suspense} from "react";
import { PaperClipIcon } from '@heroicons/react/20/solid';
import { scenarioComponentViewQuery } from "@/__generated__/scenarioComponentViewQuery.graphql";

const ScenarioQuery = graphql`
    query scenarioComponentViewQuery($scenario: ID!) {
        prompt(id: $scenario) {
            id
            title
            description
            dateCreated
            dateEdited
            publishDate
            nsfw
            tags
            authorsNote
            memory
            worldInfos {
                id
                entry
                keys
            }
        }
    }
`;


export default function ScenarioComponent(props: { queryRef: PreloadedQuery<scenarioComponentViewQuery> }) {
    const data = usePreloadedQuery(
    ScenarioQuery,
    props.queryRef
);
    console.log('data', data);

    const {prompt} = data;

    if (!prompt) {
        return (
            <Suspense fallback="Loading (client side)...">
                <div>
                    <div className="px-4 sm:px-0">
                        <h3 className="text-base font-semibold leading-7 text-gray-900">Not Found</h3>
                        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Please try another scenario.</p>
                    </div>
                </div>
            </Suspense>
        );
    }

    return (
        <Suspense fallback="Loading (client side)...">
            <div className="bg-white dark:bg-gray-900 dark:text-gray-100 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="px-4 sm:px-0">
                    <h3 className="text-base font-semibold leading-7 text-gray-900 dark:text-gray-50">
                        {prompt.title}
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500 dark:text-gray-400">
                        Created: {prompt.dateCreated}
                    </p>
                </div>
                <div className="mt-6 border-t border-gray-100 dark:border-gray-700 pt-10">
                    <dl className="divide-y divide-gray-100 dark:divide-gray-700">
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 border-b border-gray-100 dark:border-gray-700">
                            <dt className="text-sm font-medium leading-6 text-gray-900 dark:text-gray-50">
                                Description
                            </dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-400">
                                {prompt.description}
                            </dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 border-b border-gray-100 dark:border-gray-700">
                            <dt className="text-sm font-medium leading-6 text-gray-900 dark:text-gray-50">
                                Tags
                            </dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-400">
                                {prompt.tags}
                            </dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 border-b border-gray-100 dark:border-gray-700">
                            <dt className="text-sm font-medium leading-6 text-gray-900 dark:text-gray-50">
                                Author Notes
                            </dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-400">
                                {prompt.authorsNote}
                            </dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 border-b border-gray-100 dark:border-gray-700">
                            <dt className="text-sm font-medium leading-6 text-gray-900 dark:text-gray-50">
                                Memory
                            </dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-400">
                                {prompt.memory}
                            </dd>
                        </div>
                        {/*<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">*/}
                        {/*    <dt className="text-sm font-medium leading-6 text-gray-900">About</dt>*/}
                        {/*    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">*/}
                        {/*        Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur*/}
                        {/*        qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud*/}
                        {/*        pariatur mollit ad adipisicing reprehenderit deserunt qui eu.*/}
                        {/*    </dd>*/}
                        {/*</div>*/}
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 border-b border-gray-100 dark:border-gray-700">
                            <dt className="text-sm font-medium leading-6 text-gray-900 dark:text-gray-50">
                                World Info
                            </dt>
                            <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0 dark:text-gray-400">
                                <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200 dark:border-gray-700">
                                    {prompt.worldInfos?.map((worldInfo) => (
                                        <li key={worldInfo.id} className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6 border-b border-gray-100 dark:border-gray-700">
                                            <div className="flex w-0 flex-1 items-center gap-2">
                                                <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400 dark:text-gray-50" aria-hidden="true" />
                                                <div className="ml-4 flex min-w-0 flex-1 gap-2 dark:text-gray-50">
                                                    <span className="truncate font-medium dark:text-gray-50">
                                                        {worldInfo.keys}
                                                    </span>
                                                    {/*<span className="flex-shrink-0 text-gray-400">2.4mb</span>*/}
                                                </div>
                                            </div>
                                            <div className="ml-4 flex-shrink-0 dark:text-gray-50">
                                                {worldInfo.entry}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </dd>
                        </div>
                    </dl>
                </div>
                </div>
            </div>
        </Suspense>
    );
}

export const revalidate = 0;
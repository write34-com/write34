import {
  graphql, PreloadedQuery,
  usePreloadedQuery,
} from "react-relay";
import {Fragment, Suspense} from "react";
import {PaperClipIcon} from '@heroicons/react/20/solid';
import {scenarioComponentViewQuery} from "@/__generated__/scenarioComponentViewQuery.graphql";

const ScenarioQuery = graphql`
    query scenarioComponentViewQuery($scenario: ID!) {
        prompt(id: $scenario) {
            id
            aetherId
            title
            description
            dateCreated
            dateEdited
            publishDate
            promptContent
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

function downloadScenario(id: string) {
  // TODO: Actually use query params because this is probably some janky security issue
  window.open(`/api/scenarios/download-legacy?scenario=${id}`, '_blank');

}

function formatContent(content: string) {
  const lines = content.split('\n');

  return lines.map((line, index) => (
    <div className={`mb-3`} key={`line-${index}`}>
      {line}
    </div>
  ));
}

async function copyScenarioToClipboard(id: string) {
  // Fetch the scenario
  const response = await fetch(`/api/scenarios/download-legacy?scenario=${id}`);
  const data = await response.json();

  // Copy the scenario to the clipboard
  navigator.clipboard.writeText(JSON.stringify(data));

  // TODO: Show a toast or something
}

export default function ScenarioComponent(props: { queryRef: PreloadedQuery<scenarioComponentViewQuery> }) {
  const data = usePreloadedQuery(
    ScenarioQuery,
    props.queryRef
  );
  const {prompt} = data;

  if (!prompt) {
    return (
      <Suspense fallback="Loading prompt...">
        <div>
          <div className="px-4 sm:px-0">
            <h3 className="text-base font-semibold leading-7 text-gray-900">Not Found</h3>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Please try another scenario.</p>
          </div>
        </div>
      </Suspense>
    );
  }

  // TODO: Stop using this jank way of getting the prompt id out from Relay
  const promptId = atob(prompt.id).replace("Prompts:", "");

  if (!prompt) {
    return (
      <Suspense fallback="Loading prompt...">
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
    <Suspense fallback="Loading prompt...">
      <div className="bg-white dark:bg-gray-900 dark:text-gray-100 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="px-4 sm:px-0">
            <div className="text-xl text-base font-semibold leading-7 text-gray-900 dark:text-gray-50">
              {prompt.title}
            </div>
            <span className="mt-8 mb-1 italic max-w-2xl text-xs leading-6 text-gray-500 dark:text-gray-300">
                {prompt.aetherId && (
                  <Fragment>
                    <br/>
                    <span className="text-xs">
                        Prompt originally from <a href="https://aetherroom.club"
                                                  target="_blank"
                                                  className="underline">AetherRoom.club</a>
                    </span>
                    <br/>
                  </Fragment>
                )}
              Created: {prompt.dateCreated}
            </span>
          </div>
          <div className="border-t border-gray-100 dark:border-gray-700 pt-10">
            <dl className="divide-y divide-gray-100 dark:divide-gray-700">
              <div
                className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 border-b border-gray-100 dark:border-gray-700">
                <dt className="text-sm font-medium leading-6 text-gray-900 dark:text-gray-50">
                  Description
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-300">
                  {prompt.description ? formatContent(prompt.description) : '<No Description>'}
                </dd>
              </div>
              <div
                className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 border-b border-gray-100 dark:border-gray-700">
                <dt className="text-sm font-medium leading-6 text-gray-900 dark:text-gray-50">
                  Tags
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-300">
                  {prompt.tags ? prompt.tags : '<No Tags>'}
                </dd>
              </div>
              <div
                className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 border-b border-gray-100 dark:border-gray-700">
                <dt className="text-sm font-medium leading-6 text-gray-900 dark:text-gray-50">
                  Prompt
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-400">
                  {prompt.promptContent.length < 300 && prompt.promptContent}
                  {prompt.promptContent.length >= 300 && (
                    <div className="collapse bg-base-200 dark:bg-base-800 rounded-box">
                      <input type="checkbox"/>
                      <div className="collapse-title text-sm text-gray-500 dark:text-gray-400 dark:bg-gray-800">
                        <span className="line-clamp-3">{prompt.promptContent}</span>... [Click to expand]
                      </div>
                      <div className="collapse-content collapse-arrow dark:text-gray-50 dark:bg-gray-800">
                        <div className="mt-1 mr-4 text-sm text-gray-500 dark:text-gray-300">
                          {formatContent(prompt.promptContent)}
                        </div>
                      </div>
                    </div>
                  )}
                </dd>
              </div>
              {prompt.authorsNote && (
                <div
                  className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 border-b border-gray-100 dark:border-gray-700">
                  <dt className="text-sm font-medium leading-6 text-gray-900 dark:text-gray-50">
                    Author Notes
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-300">
                    {formatContent(prompt.authorsNote)}
                  </dd>
                </div>
              )}
              {prompt.memory && (
                <div
                  className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 border-b border-gray-100 dark:border-gray-700">
                  <dt className="text-sm font-medium leading-6 text-gray-900 dark:text-gray-50">
                    Memory
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-300">
                    {formatContent(prompt.memory)}
                  </dd>
                </div>
              )}
              {/*<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">*/}
              {/*    <dt className="text-sm font-medium leading-6 text-gray-900">About</dt>*/}
              {/*    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">*/}
              {/*        Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur*/}
              {/*        qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud*/}
              {/*        pariatur mollit ad adipisicing reprehenderit deserunt qui eu.*/}
              {/*    </dd>*/}
              {/*</div>*/}
              {prompt.worldInfos?.length > 0 && (
                <div
                  className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 border-b border-gray-100 dark:border-gray-700">
                  <dt className="text-sm font-medium leading-6 text-gray-900 dark:text-gray-50">
                    World Info
                  </dt>
                  <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0 dark:text-gray-400">
                    <div className="collapse bg-base-200 dark:bg-base-800 rounded-box">
                      <input type="checkbox"/>
                      <div className="collapse-title text-lg font-medium dark:text-gray-50 dark:bg-gray-800">
                        View World Info
                      </div>
                      <div className="collapse-content collapse-arrow dark:text-gray-50 dark:bg-gray-800">
                        <ul role="list"
                            className="divide-y divide-gray-100 rounded-md border border-gray-200 dark:border-gray-700">
                          {prompt.worldInfos?.map((worldInfo) => (
                            <li key={worldInfo.id}
                                className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6 border-b border-gray-100 dark:border-gray-700">
                              <div className="flex w-0 flex-1 items-center gap-2">
                                <PaperClipIcon
                                  className="h-5 w-5 flex-shrink-0 text-gray-400 dark:text-gray-50"
                                  aria-hidden="true"/>
                                <div className="ml-4 flex min-w-0 flex-1 gap-2 dark:text-gray-50">

                                  {/*<span className="flex-shrink-0 text-gray-400">2.4mb</span>*/}
                                </div>
                              </div>
                              <div
                                className="ml-6 break-words max-w-full flex-shrink-0 dark:text-gray-50">
                                <h3 className="truncate font-medium dark:text-gray-50 font-semibold">
                                  {worldInfo.keys}
                                </h3>
                                <div className="mt-1 mr-4 text-sm text-gray-500 dark:text-gray-400">
                                  {formatContent(worldInfo.entry)}
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </dd>
                </div>
              )}
            </dl>
            <div className="mt-10 pt-6 flex justify-right border-t border-gray-100 dark:border-gray-700">
              {/* Download Button */}
              <button
                type="button"
                onClick={() => downloadScenario(promptId)}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-800 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 dark:bg-blue-600 dark:hover:bg-blue-800 dark:focus:ring-gray-800"
              >
                Download (NovelAI)
              </button>
              {/* Copy to Clipboard Button */}
              <button
                type="button"
                onClick={() => copyScenarioToClipboard(promptId)}
                className="inline-flex items-center ml-6 px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                Copy to Clipboard
              </button>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
}

// export const revalidate = 0;
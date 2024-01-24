/**
 * @generated SignedSource<<c8868b536b8a9d0021f1ba00c44260f1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import type { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import type { FragmentRefs } from "relay-runtime";
export type SearchResultsComponent_search$data = {
  readonly search: {
    readonly prompts: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly description: string | null | undefined;
          readonly downvotes: number;
          readonly id: string;
          readonly isVotedByUser: string;
          readonly nsfw: boolean;
          readonly tags: string;
          readonly title: string;
          readonly upvotes: number;
        };
      } | null | undefined>;
    };
  };
  readonly " $fragmentType": "SearchResultsComponent_search";
};
export type SearchResultsComponent_search$key = {
  readonly " $data"?: SearchResultsComponent_search$data;
  readonly " $fragmentSpreads": FragmentRefs<"SearchResultsComponent_search">;
};

import searchComponentViewQueryPaginationQuery_graphql from './searchComponentViewQueryPaginationQuery.graphql';

const node: ReaderFragment = (function(){
var v0 = [
  "search",
  "prompts"
];
return {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "count"
    },
    {
      "kind": "RootArgument",
      "name": "cursor"
    },
    {
      "kind": "RootArgument",
      "name": "nsfw"
    },
    {
      "kind": "RootArgument",
      "name": "query"
    },
    {
      "kind": "RootArgument",
      "name": "tags"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "count",
          "cursor": "cursor"
        },
        "backward": null,
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [],
      "operation": searchComponentViewQueryPaginationQuery_graphql
    }
  },
  "name": "SearchResultsComponent_search",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Search",
      "kind": "LinkedField",
      "name": "search",
      "plural": false,
      "selections": [
        {
          "alias": "prompts",
          "args": [
            {
              "kind": "Variable",
              "name": "nsfw",
              "variableName": "nsfw"
            },
            {
              "kind": "Variable",
              "name": "query",
              "variableName": "query"
            },
            {
              "kind": "Variable",
              "name": "tags",
              "variableName": "tags"
            }
          ],
          "concreteType": "SearchPromptsConnection",
          "kind": "LinkedField",
          "name": "__searchComponentViewQuery_search__prompts_connection",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "SearchPromptsConnectionEdge",
              "kind": "LinkedField",
              "name": "edges",
              "plural": true,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "PromptsSearch",
                  "kind": "LinkedField",
                  "name": "node",
                  "plural": false,
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "id",
                      "storageKey": null
                    },
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "title",
                      "storageKey": null
                    },
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "description",
                      "storageKey": null
                    },
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "tags",
                      "storageKey": null
                    },
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "nsfw",
                      "storageKey": null
                    },
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "upvotes",
                      "storageKey": null
                    },
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "downvotes",
                      "storageKey": null
                    },
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "isVotedByUser",
                      "storageKey": null
                    },
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "__typename",
                      "storageKey": null
                    }
                  ],
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "cursor",
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "PageInfo",
              "kind": "LinkedField",
              "name": "pageInfo",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "endCursor",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "hasNextPage",
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
})();

(node as any).hash = "c625b2b1c106f371c498a936afabcfe0";

export default node;

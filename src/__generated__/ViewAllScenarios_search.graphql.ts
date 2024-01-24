/**
 * @generated SignedSource<<ba8816a20c2f9a048333f4cc24f17824>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import type { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import type { FragmentRefs } from "relay-runtime";
export type ViewAllScenarios_search$data = {
  readonly search: {
    readonly prompts: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly dateCreated: string;
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
  readonly " $fragmentType": "ViewAllScenarios_search";
};
export type ViewAllScenarios_search$key = {
  readonly " $data"?: ViewAllScenarios_search$data;
  readonly " $fragmentSpreads": FragmentRefs<"ViewAllScenarios_search">;
};

import homeViewQueryPaginationQuery_graphql from './homeViewQueryPaginationQuery.graphql';

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
      "operation": homeViewQueryPaginationQuery_graphql
    }
  },
  "name": "ViewAllScenarios_search",
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
              "kind": "Literal",
              "name": "nsfw",
              "value": false
            },
            {
              "kind": "Literal",
              "name": "query",
              "value": ""
            }
          ],
          "concreteType": "SearchPromptsConnection",
          "kind": "LinkedField",
          "name": "__homeViewQuery_search__prompts_connection",
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
                      "name": "dateCreated",
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
          "storageKey": "__homeViewQuery_search__prompts_connection(nsfw:false,query:\"\")"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
})();

(node as any).hash = "56070f279042409fc7ed93525c745b23";

export default node;

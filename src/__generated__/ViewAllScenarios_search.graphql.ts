/**
 * @generated SignedSource<<4d1724485ea7d1466c2ee9147b03eac9>>
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
          readonly id: string;
          readonly nsfw: boolean;
          readonly rating: number;
          readonly tags: string;
          readonly title: string;
          readonly totalRatings: number;
          readonly userRating: number | null | undefined;
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
                      "name": "rating",
                      "storageKey": null
                    },
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "totalRatings",
                      "storageKey": null
                    },
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "userRating",
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

(node as any).hash = "144f01d95367e4f8d307bd7569725f1f";

export default node;

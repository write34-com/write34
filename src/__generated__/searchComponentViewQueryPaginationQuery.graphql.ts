/**
 * @generated SignedSource<<4732fcf129997fde05bb80c272b0cd86>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import type { ConcreteRequest, Query } from 'relay-runtime';
import type { FragmentRefs } from "relay-runtime";
export type searchComponentViewQueryPaginationQuery$variables = {
  count?: number | null | undefined;
  cursor?: string | null | undefined;
  nsfw?: boolean | null | undefined;
  query?: string | null | undefined;
  tags?: ReadonlyArray<string> | null | undefined;
};
export type searchComponentViewQueryPaginationQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"SearchResultsComponent_search">;
};
export type searchComponentViewQueryPaginationQuery = {
  response: searchComponentViewQueryPaginationQuery$data;
  variables: searchComponentViewQueryPaginationQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "count"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "cursor"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "nsfw"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "query"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "tags"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
  },
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "searchComponentViewQueryPaginationQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "SearchResultsComponent_search"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "searchComponentViewQueryPaginationQuery",
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
            "alias": null,
            "args": (v1/*: any*/),
            "concreteType": "SearchPromptsConnection",
            "kind": "LinkedField",
            "name": "prompts",
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
          },
          {
            "alias": null,
            "args": (v1/*: any*/),
            "filters": [
              "query",
              "tags",
              "nsfw"
            ],
            "handle": "connection",
            "key": "searchComponentViewQuery_search__prompts",
            "kind": "LinkedHandle",
            "name": "prompts"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "2e3acfabe7ac09601869f1859cb7cc74",
    "id": null,
    "metadata": {},
    "name": "searchComponentViewQueryPaginationQuery",
    "operationKind": "query",
    "text": "query searchComponentViewQueryPaginationQuery(\n  $count: Int\n  $cursor: String\n  $nsfw: Boolean\n  $query: String\n  $tags: [String!]\n) {\n  ...SearchResultsComponent_search\n}\n\nfragment SearchResultsComponent_search on Query {\n  search {\n    prompts(first: $count, after: $cursor, query: $query, tags: $tags, nsfw: $nsfw) {\n      edges {\n        node {\n          id\n          title\n          description\n          tags\n          nsfw\n          __typename\n        }\n        cursor\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "123236a88087cc0e11d2f06616d1c522";

export default node;

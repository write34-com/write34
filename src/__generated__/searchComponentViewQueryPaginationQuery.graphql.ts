/**
 * @generated SignedSource<<ae822de87a81a49e52de6ecd80310191>>
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
  query: string;
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
    "name": "query"
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
    "name": "query",
    "variableName": "query"
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
              "query"
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
    "cacheID": "154d87a66133497c08b8ce3c80f741ef",
    "id": null,
    "metadata": {},
    "name": "searchComponentViewQueryPaginationQuery",
    "operationKind": "query",
    "text": "query searchComponentViewQueryPaginationQuery(\n  $count: Int\n  $cursor: String\n  $query: String!\n) {\n  ...SearchResultsComponent_search\n}\n\nfragment SearchResultsComponent_search on Query {\n  search {\n    prompts(first: $count, after: $cursor, query: $query) {\n      edges {\n        node {\n          id\n          title\n          description\n          tags\n          __typename\n        }\n        cursor\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "686df0ea31d67b890dcb4b5efc5d771f";

export default node;

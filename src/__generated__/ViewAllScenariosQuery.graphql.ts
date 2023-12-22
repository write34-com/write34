/**
 * @generated SignedSource<<d265c775a5ea0f54c1d26bb9a561f3e0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import type { ConcreteRequest, Query } from 'relay-runtime';
export type ViewAllScenariosQuery$variables = Record<PropertyKey, never>;
export type ViewAllScenariosQuery$data = {
  readonly prompts: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly dateCreated: string;
        readonly dateEdited: string | null | undefined;
        readonly description: string | null | undefined;
        readonly id: string;
        readonly nsfw: boolean;
        readonly publishDate: string | null | undefined;
        readonly title: string;
      };
    } | null | undefined>;
  };
};
export type ViewAllScenariosQuery = {
  response: ViewAllScenariosQuery$data;
  variables: ViewAllScenariosQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "first",
        "value": 15
      }
    ],
    "concreteType": "QueryPromptsConnection",
    "kind": "LinkedField",
    "name": "prompts",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "QueryPromptsConnectionEdge",
        "kind": "LinkedField",
        "name": "edges",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Prompts",
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
                "name": "dateCreated",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "dateEdited",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "publishDate",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "nsfw",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": "prompts(first:15)"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ViewAllScenariosQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ViewAllScenariosQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "c1eb9122d65de62effc5a1315cbfaca8",
    "id": null,
    "metadata": {},
    "name": "ViewAllScenariosQuery",
    "operationKind": "query",
    "text": "query ViewAllScenariosQuery {\n  prompts(first: 15) {\n    edges {\n      node {\n        id\n        title\n        description\n        dateCreated\n        dateEdited\n        publishDate\n        nsfw\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "bf0b2e05341b570d5104f0b5c718244f";

export default node;

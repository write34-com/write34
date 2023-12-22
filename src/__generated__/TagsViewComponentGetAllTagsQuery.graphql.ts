/**
 * @generated SignedSource<<f5dbdfac4e95424c53940d7ced15f1e6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import type { ConcreteRequest, Query } from 'relay-runtime';
export type TagsViewComponentGetAllTagsQuery$variables = Record<PropertyKey, never>;
export type TagsViewComponentGetAllTagsQuery$data = {
  readonly viewer: {
    readonly tagCounts: ReadonlyArray<{
      readonly count: number;
      readonly description: string | null | undefined;
      readonly name: string;
    }>;
  };
};
export type TagsViewComponentGetAllTagsQuery = {
  response: TagsViewComponentGetAllTagsQuery$data;
  variables: TagsViewComponentGetAllTagsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Viewer",
    "kind": "LinkedField",
    "name": "viewer",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "TopTags",
        "kind": "LinkedField",
        "name": "tagCounts",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "count",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "description",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "TagsViewComponentGetAllTagsQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "TagsViewComponentGetAllTagsQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "e381cffc05b5481d54c6779d0271709d",
    "id": null,
    "metadata": {},
    "name": "TagsViewComponentGetAllTagsQuery",
    "operationKind": "query",
    "text": "query TagsViewComponentGetAllTagsQuery {\n  viewer {\n    tagCounts {\n      count\n      name\n      description\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "e68fb0f2ff8d4cd374c2be5c50ec2671";

export default node;

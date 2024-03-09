/**
 * @generated SignedSource<<af68f6e412e625ffab5e4e3872dd78ca>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import type { ConcreteRequest, Mutation } from 'relay-runtime';
export type EditScenarioFieldComponentMutation$variables = {
  id: string;
  newAuthorsNote?: string | null | undefined;
  newDescription?: string | null | undefined;
  newMemory?: string | null | undefined;
  newNsfw?: boolean | null | undefined;
  newPromptContent?: string | null | undefined;
  newTitle?: string | null | undefined;
};
export type EditScenarioFieldComponentMutation$data = {
  readonly updatePrompt: {
    readonly id: string;
  };
};
export type EditScenarioFieldComponentMutation = {
  response: EditScenarioFieldComponentMutation$data;
  variables: EditScenarioFieldComponentMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "id"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "newAuthorsNote"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "newDescription"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "newMemory"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "newNsfw"
},
v5 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "newPromptContent"
},
v6 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "newTitle"
},
v7 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "authorsNote",
        "variableName": "newAuthorsNote"
      },
      {
        "kind": "Variable",
        "name": "description",
        "variableName": "newDescription"
      },
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      },
      {
        "kind": "Variable",
        "name": "memory",
        "variableName": "newMemory"
      },
      {
        "kind": "Variable",
        "name": "nsfw",
        "variableName": "newNsfw"
      },
      {
        "kind": "Variable",
        "name": "promptContent",
        "variableName": "newPromptContent"
      },
      {
        "kind": "Variable",
        "name": "title",
        "variableName": "newTitle"
      }
    ],
    "concreteType": "Prompts",
    "kind": "LinkedField",
    "name": "updatePrompt",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/),
      (v5/*: any*/),
      (v6/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "EditScenarioFieldComponentMutation",
    "selections": (v7/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v6/*: any*/),
      (v2/*: any*/),
      (v5/*: any*/),
      (v3/*: any*/),
      (v1/*: any*/),
      (v4/*: any*/)
    ],
    "kind": "Operation",
    "name": "EditScenarioFieldComponentMutation",
    "selections": (v7/*: any*/)
  },
  "params": {
    "cacheID": "3d2c3e9f5cfe68ff8b90216429dd48d1",
    "id": null,
    "metadata": {},
    "name": "EditScenarioFieldComponentMutation",
    "operationKind": "mutation",
    "text": "mutation EditScenarioFieldComponentMutation(\n  $id: ID!\n  $newTitle: String\n  $newDescription: String\n  $newPromptContent: String\n  $newMemory: String\n  $newAuthorsNote: String\n  $newNsfw: Boolean\n) {\n  updatePrompt(id: $id, title: $newTitle, description: $newDescription, promptContent: $newPromptContent, memory: $newMemory, authorsNote: $newAuthorsNote, nsfw: $newNsfw) {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "1ef10149594c196cd81a86aa3cf254c0";

export default node;

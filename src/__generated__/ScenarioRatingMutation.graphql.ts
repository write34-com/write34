/**
 * @generated SignedSource<<abd41538e60f4e4c004d17fc83b3f4a9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import type { ConcreteRequest, Mutation } from 'relay-runtime';
export type ScenarioRatingMutation$variables = {
  promptId: string;
  setRating?: number | null | undefined;
};
export type ScenarioRatingMutation$data = {
  readonly votePrompt: boolean;
};
export type ScenarioRatingMutation = {
  response: ScenarioRatingMutation$data;
  variables: ScenarioRatingMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "promptId"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "setRating"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "promptId",
        "variableName": "promptId"
      },
      {
        "kind": "Variable",
        "name": "setRating",
        "variableName": "setRating"
      }
    ],
    "kind": "ScalarField",
    "name": "votePrompt",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ScenarioRatingMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ScenarioRatingMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "d04cb65dea11bad7b028656e87ebe9cc",
    "id": null,
    "metadata": {},
    "name": "ScenarioRatingMutation",
    "operationKind": "mutation",
    "text": "mutation ScenarioRatingMutation(\n  $promptId: String!\n  $setRating: Float\n) {\n  votePrompt(promptId: $promptId, setRating: $setRating)\n}\n"
  }
};
})();

(node as any).hash = "958e9aa458456d3032360fb67a5209fe";

export default node;

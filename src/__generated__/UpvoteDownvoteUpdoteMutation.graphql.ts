/**
 * @generated SignedSource<<4d5351981fd09bc513ee3cf9c64391ac>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import type { ConcreteRequest, Mutation } from 'relay-runtime';
export type UpvoteDownvoteUpdoteMutation$variables = {
  promptId: string;
  setVoteState?: boolean | null | undefined;
};
export type UpvoteDownvoteUpdoteMutation$data = {
  readonly votePrompt: boolean;
};
export type UpvoteDownvoteUpdoteMutation = {
  response: UpvoteDownvoteUpdoteMutation$data;
  variables: UpvoteDownvoteUpdoteMutation$variables;
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
    "name": "setVoteState"
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
        "name": "setVoteState",
        "variableName": "setVoteState"
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
    "name": "UpvoteDownvoteUpdoteMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpvoteDownvoteUpdoteMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "a8fdb058e12243d880fee0d23f9e76bf",
    "id": null,
    "metadata": {},
    "name": "UpvoteDownvoteUpdoteMutation",
    "operationKind": "mutation",
    "text": "mutation UpvoteDownvoteUpdoteMutation(\n  $promptId: String!\n  $setVoteState: Boolean\n) {\n  votePrompt(promptId: $promptId, setVoteState: $setVoteState)\n}\n"
  }
};
})();

(node as any).hash = "1135aa25eb2447d4486df865531cadd9";

export default node;

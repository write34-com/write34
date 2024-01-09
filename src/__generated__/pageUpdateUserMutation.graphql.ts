/**
 * @generated SignedSource<<3d2fda1753146eccaee144a55c668011>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import type { ConcreteRequest, Mutation } from 'relay-runtime';
export type pageUpdateUserMutation$variables = {
  newName?: string | null | undefined;
  newPublicName?: string | null | undefined;
};
export type pageUpdateUserMutation$data = {
  readonly updateUser: {
    readonly email: string;
    readonly id: string;
    readonly name: string | null | undefined;
    readonly publicName: string | null | undefined;
  };
};
export type pageUpdateUserMutation = {
  response: pageUpdateUserMutation$data;
  variables: pageUpdateUserMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "newName"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "newPublicName"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "newName",
        "variableName": "newName"
      },
      {
        "kind": "Variable",
        "name": "newPublicName",
        "variableName": "newPublicName"
      }
    ],
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "updateUser",
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
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "publicName",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "email",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "pageUpdateUserMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "pageUpdateUserMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "db9378158680d7ec1c285e8de44e1482",
    "id": null,
    "metadata": {},
    "name": "pageUpdateUserMutation",
    "operationKind": "mutation",
    "text": "mutation pageUpdateUserMutation(\n  $newName: String\n  $newPublicName: String\n) {\n  updateUser(newName: $newName, newPublicName: $newPublicName) {\n    id\n    name\n    publicName\n    email\n  }\n}\n"
  }
};
})();

(node as any).hash = "37e416d7cca6810a0dae9952b5ddecf9";

export default node;

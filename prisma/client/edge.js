
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  detectRuntime,
} = require('./runtime/edge')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.7.0
 * Query Engine version: 79fb5193cf0a8fdbef536e4b4a159cad677ab1b9
 */
Prisma.prismaVersion = {
  client: "5.7.0",
  engine: "79fb5193cf0a8fdbef536e4b4a159cad677ab1b9"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  Serializable: 'Serializable'
});

exports.Prisma.PromptsScalarFieldEnum = {
  id: 'id',
  aetherId: 'aetherId',
  authorsNote: 'authorsNote',
  description: 'description',
  memory: 'memory',
  nsfw: 'nsfw',
  parentId: 'parentId',
  promptContent: 'promptContent',
  publishDate: 'publishDate',
  quests: 'quests',
  tags: 'tags',
  title: 'title',
  scriptZip: 'scriptZip',
  novelAiScenario: 'novelAiScenario',
  holoAiScenario: 'holoAiScenario',
  correlationId: 'correlationId',
  dateCreated: 'dateCreated',
  dateEdited: 'dateEdited'
};

exports.Prisma.WorldInfosScalarFieldEnum = {
  id: 'id',
  aetherId: 'aetherId',
  entry: 'entry',
  keys: 'keys',
  promptId: 'promptId',
  correlationId: 'correlationId',
  dateCreated: 'dateCreated',
  dateEdited: 'dateEdited'
};

exports.Prisma.PromptSearchScalarFieldEnum = {
  id: 'id',
  text: 'text'
};

exports.Prisma.WorldInfoSearchScalarFieldEnum = {
  id: 'id',
  text: 'text'
};

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  name: 'name',
  dateCreated: 'dateCreated',
  lastLoggedIn: 'lastLoggedIn'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  Prompts: 'Prompts',
  WorldInfos: 'WorldInfos',
  PromptSearch: 'PromptSearch',
  WorldInfoSearch: 'WorldInfoSearch',
  User: 'User'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/Users/free/code/seanario/prisma/client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "darwin-arm64",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../.env",
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "..",
  "clientVersion": "5.7.0",
  "engineVersion": "79fb5193cf0a8fdbef536e4b4a159cad677ab1b9",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "sqlite",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": null,
        "value": "file:../seanario.sqlite"
      }
    }
  },
  "inlineSchema": "Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICAvLyBHZW5lcmF0ZSBpbnRvIGN1c3RvbSBsb2NhdGlvbiBiZWNhdXNlIHRoaXMgcmVwbyBoYXMgbXVsdGlwbGUgcHJpc21hIHNjaGVtYXMKICBvdXRwdXQgICA9ICIuL2NsaWVudCIKfQoKZ2VuZXJhdG9yIHBvdGhvcyB7CiAgcHJvdmlkZXIgICAgID0gInByaXNtYS1wb3Rob3MtdHlwZXMiCiAgb3V0cHV0ICAgICAgID0gIi4vcG90aG9zLXR5cGVzLnRzIgogIC8vIE1hdGNoIGNsaWVudCBvdXRwdXQgbG9jYXRpb24gZnJvbSBhYm92ZQogIGNsaWVudE91dHB1dCA9ICIuL2NsaWVudCIKfQoKZGF0YXNvdXJjZSBkYiB7CiAgcHJvdmlkZXIgPSAic3FsaXRlIgogIHVybCAgICAgID0gImZpbGU6Li4vc2VhbmFyaW8uc3FsaXRlIgp9Cgptb2RlbCBQcm9tcHRzIHsKICBpZCAgICAgICAgICAgICAgU3RyaW5nICBAaWQgQGRlZmF1bHQodXVpZCgpKQogIGFldGhlcklkICAgICAgICBJbnQ/CiAgYXV0aG9yc05vdGUgICAgIFN0cmluZz8KICBkZXNjcmlwdGlvbiAgICAgU3RyaW5nPwogIG1lbW9yeSAgICAgICAgICBTdHJpbmc/CiAgbnNmdyAgICAgICAgICAgIEludAogIHBhcmVudElkICAgICAgICBTdHJpbmc/CiAgcHJvbXB0Q29udGVudCAgIFN0cmluZwogIHB1Ymxpc2hEYXRlICAgICBTdHJpbmc/CiAgcXVlc3RzICAgICAgICAgIFN0cmluZz8KICB0YWdzICAgICAgICAgICAgU3RyaW5nCiAgdGl0bGUgICAgICAgICAgIFN0cmluZwogIHNjcmlwdFppcCAgICAgICBCeXRlcz8KICBub3ZlbEFpU2NlbmFyaW8gU3RyaW5nPwogIGhvbG9BaVNjZW5hcmlvICBTdHJpbmc/CiAgY29ycmVsYXRpb25JZCAgIFN0cmluZwogIGRhdGVDcmVhdGVkICAgICBTdHJpbmcKICBkYXRlRWRpdGVkICAgICAgU3RyaW5nPwoKICB3b3JsZEluZm9zIFdvcmxkSW5mb3NbXSBAcmVsYXRpb24oIlByb21wdFdvcmxkSW5mbyIpCgogIEBAaW5kZXgoW2FldGhlcklkXSwgbmFtZTogIklYX1Byb21wdHNfQWV0aGVySWQiKQogIEBAaW5kZXgoW2NvcnJlbGF0aW9uSWRdLCBuYW1lOiAiSVhfUHJvbXB0c19Db3JyZWxhdGlvbklkIikKICBAQGluZGV4KFtwYXJlbnRJZF0sIG5hbWU6ICJJWF9Qcm9tcHRzX1BhcmVudElkIikKfQoKbW9kZWwgV29ybGRJbmZvcyB7CiAgaWQgICAgICAgICAgICBTdHJpbmcgIEBpZCBAZGVmYXVsdCh1dWlkKCkpCiAgYWV0aGVySWQgICAgICBJbnQ/CiAgZW50cnkgICAgICAgICBTdHJpbmcKICBrZXlzICAgICAgICAgIFN0cmluZwogIHByb21wdElkICAgICAgU3RyaW5nCiAgY29ycmVsYXRpb25JZCBTdHJpbmcKICBkYXRlQ3JlYXRlZCAgIFN0cmluZwogIGRhdGVFZGl0ZWQgICAgU3RyaW5nPwoKICBwcm9tcHRzIFByb21wdHMgQHJlbGF0aW9uKCJQcm9tcHRXb3JsZEluZm8iLCBmaWVsZHM6IFtwcm9tcHRJZF0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBDYXNjYWRlKQoKICBAQGluZGV4KFthZXRoZXJJZF0sIG5hbWU6ICJJWF9Xb3JsZEluZm9zX0FldGhlcklkIikKICBAQGluZGV4KFtjb3JyZWxhdGlvbklkXSwgbmFtZTogIklYX1dvcmxkSW5mb3NfQ29ycmVsYXRpb25JZCIpCiAgQEBpbmRleChbcHJvbXB0SWRdLCBuYW1lOiAiSVhfV29ybGRJbmZvc19Qcm9tcHRJZCIpCn0KCi8vIG1vZGVsIEFldGhlclByb21wdHMgewovLyAgIGlkICAgICAgICAgICAgICBJbnQgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCi8vICAgYXV0aG9yc05vdGUgICAgIFN0cmluZz8KLy8gICBkZXNjcmlwdGlvbiAgICAgU3RyaW5nPwovLyAgIG1lbW9yeSAgICAgICAgICBTdHJpbmc/Ci8vICAgbnNmdyAgICAgICAgICAgIEludAovLyAgIHBhcmVudElkICAgICAgICBTdHJpbmc/Ci8vICAgcHJvbXB0Q29udGVudCAgIFN0cmluZwovLyAgIHB1Ymxpc2hEYXRlICAgICBTdHJpbmc/Ci8vICAgcXVlc3RzICAgICAgICAgIFN0cmluZz8KLy8gICB0YWdzICAgICAgICAgICAgU3RyaW5nCi8vICAgdGl0bGUgICAgICAgICAgIFN0cmluZwovLyAgIHNjcmlwdFppcCAgICAgICBCeXRlcz8KLy8gICBub3ZlbEFpU2NlbmFyaW8gU3RyaW5nPwovLyAgIGhvbG9BaVNjZW5hcmlvICBTdHJpbmc/Ci8vICAgY29ycmVsYXRpb25JZCAgIFN0cmluZwovLyAgIGRhdGVDcmVhdGVkICAgICBTdHJpbmcKLy8gICBkYXRlRWRpdGVkICAgICAgU3RyaW5nPwovLwovLyAgIHdvcmxkSW5mb3MgQWV0aGVyV29ybGRJbmZvc1tdIEByZWxhdGlvbigiQWV0aGVyUHJvbXB0V29ybGRJbmZvIikKLy8KLy8gICBAQGluZGV4KFtjb3JyZWxhdGlvbklkXSwgbmFtZTogIklYX0FldGhlclByb21wdHNfQ29ycmVsYXRpb25JZCIpCi8vIH0KCi8vIG1vZGVsIEFldGhlcldvcmxkSW5mb3MgewovLyAgIGlkICAgICAgICAgICAgSW50ICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQovLyAgIGVudHJ5ICAgICAgICAgU3RyaW5nCi8vICAga2V5cyAgICAgICAgICBTdHJpbmcKLy8gICBwcm9tcHRJZCAgICAgIEludAovLyAgIGNvcnJlbGF0aW9uSWQgU3RyaW5nCi8vICAgZGF0ZUNyZWF0ZWQgICBTdHJpbmcKLy8gICBkYXRlRWRpdGVkICAgIFN0cmluZz8KLy8KLy8gICBwcm9tcHRzIEFldGhlclByb21wdHMgQHJlbGF0aW9uKCJBZXRoZXJQcm9tcHRXb3JsZEluZm8iLCBmaWVsZHM6IFtwcm9tcHRJZF0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBDYXNjYWRlKQovLwovLyAgIEBAaW5kZXgoW2NvcnJlbGF0aW9uSWRdLCBuYW1lOiAiSVhfQWV0aGVyV29ybGRJbmZvc19Db3JyZWxhdGlvbklkIikKLy8gICBAQGluZGV4KFtwcm9tcHRJZF0sIG5hbWU6ICJJWF9BZXRoZXJXb3JsZEluZm9zX1Byb21wdElkIikKLy8gfQoKLy8gZnN0NSBzZWFyY2ggdGFibGVzCm1vZGVsIFByb21wdFNlYXJjaCB7CiAgaWQgICBJbnQgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICB0ZXh0IFN0cmluZwp9Cgptb2RlbCBXb3JsZEluZm9TZWFyY2ggewogIGlkICAgSW50ICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgdGV4dCBTdHJpbmcKfQoKbW9kZWwgVXNlciB7CiAgaWQgICAgICAgICAgIFN0cmluZyAgQGlkIEBkZWZhdWx0KHV1aWQoKSkKICBlbWFpbCAgICAgICAgU3RyaW5nICBAdW5pcXVlCiAgbmFtZSAgICAgICAgIFN0cmluZwogIGRhdGVDcmVhdGVkICBTdHJpbmcKICBsYXN0TG9nZ2VkSW4gU3RyaW5nPwoKICBAQGluZGV4KFtlbWFpbF0sIG5hbWU6ICJJWF9Vc2Vyc19FbWFpbCIpCiAgQEBpbmRleChbbmFtZV0sIG5hbWU6ICJJWF9Vc2Vyc19OYW1lIikKICBAQGluZGV4KFtsYXN0TG9nZ2VkSW5dLCBuYW1lOiAiSVhfVXNlcnNfTGFzdExvZ2dlZEluIikKfQo=",
  "inlineSchemaHash": "8e4f268741c5e5bde45d9b1ef045921648bf1aa31768985748a5f989db0659b4",
  "noEngine": false
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"Prompts\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"aetherId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"authorsNote\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"memory\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nsfw\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parentId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"promptContent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"publishDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"quests\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tags\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"scriptZip\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"novelAiScenario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"holoAiScenario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"correlationId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateCreated\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateEdited\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"worldInfos\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"WorldInfos\",\"relationName\":\"PromptWorldInfo\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"WorldInfos\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"aetherId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"entry\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"keys\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"promptId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"correlationId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateCreated\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateEdited\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"prompts\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Prompts\",\"relationName\":\"PromptWorldInfo\",\"relationFromFields\":[\"promptId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PromptSearch\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"text\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"WorldInfoSearch\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"text\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"User\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateCreated\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastLoggedIn\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined

config.injectableEdgeEnv = () => ({
  parsed: {}
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)


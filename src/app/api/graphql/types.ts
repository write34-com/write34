import SchemaBuilder from "@pothos/core";
import PrismaPlugin from "@pothos/plugin-prisma";
import RelayPlugin, {resolveOffsetConnection} from "@pothos/plugin-relay";
import {db, Prisma} from "./db";
import {DateResolver, JSONResolver} from "graphql-scalars";
import PrismaTypes from "../../../../prisma/pothos-types";
import {User} from "../../../../prisma/client";

const builder = new SchemaBuilder<{
    PrismaTypes: PrismaTypes;
    Scalars: {
        JSON: {
            Input: unknown;
            Output: unknown;
        };
        Date: {
            Input: Date;
            Output: Date;
        };
    };
    Context: {
        currentUser: User;
    };
}>({
    plugins: [PrismaPlugin, RelayPlugin],
    prisma: {
        client: db,
        // defaults to false, uses /// comments from prisma schema as descriptions
        // for object types, relations and exposed fields.
        // descriptions can be omitted by setting description to false
        exposeDescriptions: true,
        // use where clause from prismaRelatedConnection for totalCount (will true by default in next major version)
        filterConnectionTotalCount: true,
        // Because the prisma client is loaded dynamically, we need to explicitly provide the some information about the prisma schema
        dmmf: Prisma.dmmf,
        // warn when not using a query parameter correctly
        onUnusedQuery: process.env.NODE_ENV === 'production' ? null : 'warn',
    },
    relayOptions: {
        // These will become the defaults in the next major version
        clientMutationId: 'omit',
        cursorType: 'String',
    },
});

builder.addScalarType('JSON', JSONResolver);
builder.addScalarType('Date', DateResolver);

const Prompts = builder.prismaNode('Prompts', {
    id: {field: 'id'},
    select: {
        id: true,
    },
    fields: (t) => ({
        // id: t.exposeID('id', {
        //     nullable: false,
        // }),
        aetherId: t.exposeInt('aetherId', {
            nullable: true,
        }),
        authorsNote: t.exposeString('authorsNote', {
            nullable: true,
        }),
        description: t.exposeString('description', {
            nullable: true,
        }),
        memory: t.exposeString('memory', {
            nullable: true,
        }),
        nsfw: t.exposeBoolean('nsfw' as never, {
            nullable: false
        }),
        parentId: t.exposeID('parentId', {
            nullable: true,
        }),
        promptContent: t.exposeString('promptContent', {
            nullable: false,
        }),
        publishDate: t.exposeString('publishDate', {
            nullable: true,
        }),
        quests: t.exposeString('quests', {
            nullable: true,
        }),
        tags: t.exposeString('tags', {
            nullable: false,
        }),
        title: t.exposeString('title', {
            nullable: false,
        }),
        // TODO: Figure out how to expose this
        // scriptsZip: t.exposeString('scriptsZip', {
        //     nullable: true,
        // }),
        novelAiScenario: t.exposeString('novelAiScenario', {
            nullable: true,
        }),
        holoAiScenario: t.exposeString('holoAiScenario', {
            nullable: true,
        }),
        correlationId: t.exposeString('correlationId', {
            nullable: false,
        }),
        dateCreated: t.exposeString('dateCreated', {
            nullable: false,
        }),
        dateEdited: t.exposeString('dateEdited', {
            nullable: true,
        }),
        // TODO: Figure out how to do many-to-many JOINs in Pothos
        // tags: t.relation('tagsPromptsMap'),
        worldInfos: t.relation('worldInfos'),
    }),
});

builder.prismaNode('WorldInfos', {
    // Optional name for the object, defaults to the name of the prisma model
    // name: 'WorldInfos',
    id: {field: 'id'},
    fields: (t) => ({
        // id: t.exposeID('id'),
        aetherId: t.exposeInt('aetherId', {
            nullable: true,
        }),
        entry: t.exposeString('entry', {
            nullable: false,
        }),
        keys: t.exposeString('keys', {
            nullable: false,
        }),
        promptId: t.exposeID('promptId', {
            nullable: false,
        }),
        correlationId: t.exposeString('correlationId', {
            nullable: false,
        }),
        dateCreated: t.exposeString('dateCreated', {
            nullable: false,
        }),
        dateEdited: t.exposeString('dateEdited', {
            nullable: true,
        })
    })
});

const PromptsSearch = builder.prismaNode('Prompts', {
    variant: 'PromptsSearch',
    id: {field: 'id'},
    fields: (t) => ({
        title: t.exposeString('title', {
            nullable: false,
        }),
        description: t.exposeString('description', {
            nullable: true,
        }),
        tags: t.exposeString('tags', {
            nullable: false,
        }),
        promptContent: t.exposeString('promptContent', {
            nullable: false,
        }),
        memory: t.exposeString('memory', {
            nullable: true,
        }),
        authorsNote: t.exposeString('authorsNote', {
            nullable: true,
        }),
        dateCreated: t.exposeString('dateCreated', {
            nullable: false,
        }),
        dateEdited: t.exposeString('dateEdited', {
            nullable: true,
        }),
        publishDate: t.exposeString('publishDate', {
            nullable: true,
        }),
        nsfw: t.boolean({
            resolve: (parent) => {
                // Assuming `parent.nsfw` is the boolean
                const nsfw = parent.nsfw;

                if (nsfw === undefined) {
                    return false;
                }

                return Number(nsfw) !== 0;
            },
        }),
    })
});

builder.prismaNode('User', {
    id: {field: 'id'},
    fields: (t) => ({
        email: t.exposeString('email', {
            nullable: false,
        }),
        name: t.exposeString('name', {
            nullable: true,
        }),
        image: t.exposeString('image', {
            nullable: true,
        }),
        publicName: t.exposeString('publicName', {
            nullable: true,
        }),
        // dateCreated: t.exposeString('dateCreated', {
        //     nullable: false,
        // }),
        // name: t.exposeString('name', {
        //     nullable: false,
        // }),
        // picture: t.exposeString('picture', {
        //     nullable: false,
        // }),
        // dateCreated: t.exposeString('dateCreated', {
        //     nullable: false,
        // }),

        // prompts: t.relation('prompts'),
        // worldInfos: t.relation('worldInfos'),
    })
});

builder.prismaNode('Tags', {
    id: {field: 'id'},
    fields: (t) => ({
        name: t.exposeString('name', {
            nullable: false,
        }),
        description: t.exposeString('description', {
            nullable: true,
        }),
    })
});

class TopTagsResult {
    count: number;
    name: string;
    description?: string;

    constructor(count: number, name: string, description?: string) {
        this.count = count;
        this.name = name;
        this.description = description;
    }
}

const TopTags = builder.objectType(TopTagsResult, {
    name: 'TopTags',
    fields: (t) => ({
        // SQLite exposes BigInt as the response to the query, so we to convert it.
        // TODO: Move this to a utility if we see this again
        count: t.int({
            resolve: (parent) => {
                // Assuming `parent.count` is the BigInt
                const count = parent.count;

                // Check if the value is within the safe integer range
                if (count <= Number.MAX_SAFE_INTEGER) {
                    return Number(count);
                } else {
                    // Handle the case where the number is too large
                    throw new Error("Count exceeds the safe integer limit");
                }
            },
        }),
        name: t.exposeString('name', {
            nullable: false,
        }),
        description: t.exposeString('description', {
            nullable: true
        }),
    }),
});

// Empty class because this is just the object we expose on the GraphQL server to hold different search types
class Search {
}

builder.objectType(Search, {
    name: 'Search',
    description: 'Search results',
    fields: (t) => ({
        prompts: t.connection({
            type: PromptsSearch,
            args: {
                query: t.arg.string({required: false}),
                tags: t.arg.stringList({required: false}),
                nsfw: t.arg.boolean({required: false}),
                order: t.arg.string({required: false}),
            },
            // TODO: Clean this code up with types and maybe to feel less hacky
            resolve: async (parent, args, ctx, info) => {
                const resolveOffset = await resolveOffsetConnection({args}, async ({limit, offset}) => {
                    // TODO: Figure out how to allow additional characters like dashes without crashing queryRaw
                    const searchTerm = args.query ? args.query.replace(/[\-@]/g, ' ').replace(/[^a-zA-Z0-9 _]/g, '').trim() : null;

                    let prompts: any[] = [];

                    const nsfwFilter = args.nsfw === null ? [true, false] : [!!args.nsfw];

                    if (!searchTerm && (!args.tags || args.tags.length === 0)) {
                        return db.$queryRaw`SELECT p.id, p.title, p.promptContent, p.description, p.tags, p.nsfw, prompts.dateCreated, prompts.dateEdited, prompts.publishDate
                                            FROM "promptSearch" p
                                            JOIN Prompts prompts ON p.id = prompts.id
                                            WHERE p.nsfw IN (${Prisma.join(nsfwFilter)})
                                                AND prompts.description IS NOT NULL AND prompts.description != ''
                                                AND prompts.deleted = false
                                            ORDER BY prompts.dateCreated DESC
                                            LIMIT ${limit} OFFSET ${offset}`;
                    }

                    // Search by tags
                    if (args.tags && args.tags.length > 0) {
                        const tags = args.tags.map(tag => tag.toLowerCase());

                        prompts = await db.$queryRaw`
                                SELECT p.*
                                FROM prompts AS p
                                JOIN tagsPromptsMap AS tpm ON p.id = tpm.promptID
                                JOIN tags AS t ON tpm.tagId = t.id
                                WHERE t.name IN (${Prisma.join(tags)})
                                    AND p.nsfw IN (${Prisma.join(nsfwFilter)})
                                    AND p.deleted = false
                                GROUP BY p.id
                                HAVING COUNT(DISTINCT t.id) = ${tags.length}
                                LIMIT ${limit} OFFSET ${offset}
                            `;
                    }

                    // We are done if there is no search query
                    if (!searchTerm) {
                        return prompts;
                    }

                    if (prompts.length > 0) {
                        // Search by text for all prompts that match the tags
                        return db.$queryRaw`SELECT p.id, p.title, p.promptContent, p.description, p.tags, p.nsfw, prompts.dateCreated, prompts.dateEdited, prompts.publishDate
                                            FROM "promptSearch" p
                                            JOIN Prompts prompts ON p.id = prompts.id
                                            WHERE
                                                p.id IN (${Prisma.join(prompts.map(p => p.id))})
                                                AND "promptSearch" MATCH ${searchTerm}
                                                AND p.nsfw IN (${Prisma.join(nsfwFilter)})
                                                AND prompts.deleted = false
                                            LIMIT ${limit} OFFSET ${offset}`;
                    }

                    const promptsByText = db.$queryRaw`SELECT p.id, p.title, p.promptContent, p.description, p.tags, p.nsfw, prompts.dateCreated, prompts.dateEdited, prompts.publishDate
                                        FROM "promptSearch" p
                                        JOIN Prompts prompts ON p.id = prompts.id
                                        WHERE "promptSearch" MATCH ${searchTerm}
                                        AND p.nsfw IN (${Prisma.join(nsfwFilter)})
                                        AND prompts.deleted = false
                                        LIMIT ${limit} OFFSET ${offset}` as any;

                    return promptsByText;
                });
                return resolveOffset as any;
            },
        }),
    }),
});

class Viewer {
}

builder.objectType(Viewer, {
    name: 'Viewer',
    description: 'Collection of information about the database',
    fields: (t) => ({
        tagCounts: t.field({
            type: [TopTags],
            resolve: async () => {
                const result = await db.$queryRaw`SELECT count, name, description FROM (
                                                      SELECT COUNT(tagId) as count, T.name, T.description
                                                      FROM TagsPromptsMap
                                                          JOIN main.Tags T on TagsPromptsMap.tagId = T.id
                                                      GROUP BY tagId
                                                      ORDER BY COUNT(tagId) DESC
                                                  ) WHERE count > 4`;
                // TODO: Figure out the right type to cast this as
                return result as any;
            },
        }),
    }),
});

builder.queryType({
    fields: (t) => ({
        prompt: t.prismaField({
            type: Prompts,
            nullable: true,
            args: {
                id: t.arg.id({required: true}),
            },
            resolve: (query, root, args) =>
                db.prompts.findUnique({
                    ...query,
                    where: {id: String(args.id)},
                }),
        }),
        prompts: t.prismaConnection({
            type: Prompts,
            cursor: 'id',
            resolve: (query) => {
                return db.prompts.findMany({...query});
            }
        }),
        worldInfo: t.prismaField({
            type: 'WorldInfos',
            nullable: true,
            args: {
                id: t.arg.id({required: true}),
            },
            resolve: (query, root, args) =>
                db.worldInfos.findUnique({
                    ...query,
                    where: {id: String(args.id)},
                }),
        }),
        worldInfos: t.prismaConnection({
            type: 'WorldInfos',
            cursor: 'id',
            resolve: (query) =>
                db.worldInfos.findMany({
                    ...query,
                }),
        }),
        me: t.prismaField({
            type: 'User',
            resolve: async (query, root, args, ctx, info) =>
                ctx.currentUser
        }),
        search: t.field({
            type: Search,
            resolve: async (parent, args, ctx, info) => {
                return {};
            },
        }),
        viewer: t.field({
            type: Viewer,
            resolve: async (parent, args, ctx, info) => {
                return {};
            },
        })
    }),
});

/** Mutations **/

builder.mutationType({
    fields: (t) => ({
        // Define other mutations here
        updateUser: t.prismaField({
            type: 'User',
            args: {
                newName: t.arg.string({ required: false }),
                newPublicName: t.arg.string({ required: false }),
            },
            resolve: async (query, root, { newName, newPublicName }, ctx, info) => {
                if (!ctx.currentUser) {
                    throw new Error("No user found");
                }

                const loggedInUser = ctx.currentUser.id;

                // TODO: Implement an admin system to allow admins to update other users
                // Perform the update operation using Prisma client
                return db.user.update({
                    ...query,
                    where: { id: loggedInUser },
                    data: {
                        name: newName,
                        publicName: newPublicName,
                    },
                });
            },
        }),
    }),
});


// Build and export the schema
export const schema = builder.toSchema();
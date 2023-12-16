import SchemaBuilder from "@pothos/core";
import PrismaPlugin from "@pothos/plugin-prisma";
import RelayPlugin from "@pothos/plugin-relay";
import {db, Prisma} from "./db";
import {DateResolver, JSONResolver} from "graphql-scalars";
import PrismaTypes from "../../../../prisma/pothos-types";

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
    relayOptions: {},
});

builder.addScalarType('JSON', JSONResolver);
builder.addScalarType('Date', DateResolver);

builder.prismaNode('Prompts', {
    id: { field: 'id' },
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
        description: t.exposeString('authorsNote', {
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
        worldInfos: t.relation('worldInfos'),
    }),
});

builder.prismaNode('WorldInfos', {
    // Optional name for the object, defaults to the name of the prisma model
    // name: 'WorldInfos',
    id: { field: 'id' },
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

builder.queryType({
    fields: (t) => ({
        prompt: t.prismaField({
            type: 'Prompts',
            nullable: true,
            args: {
                id: t.arg.id({ required: true }),
            },
            resolve: (query, root, args) =>
                db.prompts.findUnique({
                    ...query,
                    where: { id: String(args.id) },
                }),
        }),
        prompts: t.prismaConnection({
            type: 'Prompts',
            cursor: 'id',
            resolve: (query) =>
                db.prompts.findMany({
                    ...query,
                }),
        }),
        worldInfo: t.prismaField({
            type: 'WorldInfos',
            nullable: true,
            args: {
                id: t.arg.id({ required: true }),
            },
            resolve: (query, root, args) =>
                db.worldInfos.findUnique({
                    ...query,
                    where: { id: String(args.id) },
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
    }),
});

builder.queryField("promptById", (t) =>
    t.prismaField({
        type: "Prompts",
        nullable: true,
        args: {
            id: t.arg.string({ required: true }),
        },
        resolve: async (query, root, args, ctx, info) => {
            // return db.prompts.findMany({
            //     ...query,
            //     where: { id: args.id }
            // });

            return db.prompts.findUnique({
                ...query,
                where: { id: args.id }
            });
        },
    })
);

// Build and export the schema
export const schema = builder.toSchema();
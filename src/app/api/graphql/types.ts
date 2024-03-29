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

function convertBigInt<
  T extends { int: (options: { resolve: (parent: B) => number }) => any },
  B extends { count: bigint }
> (t: T) {
    return t.int({
        resolve: (parent: B) => {
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
    });
}

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
        downloadCount: t.exposeInt('downloadCount', {
            nullable: false,
        }),
        // TODO: Figure out how to do many-to-many JOINs in Pothos
        // tags: t.relation('tagsPromptsMap'),
        worldInfos: t.relation('worldInfos'),
        rating: t.float({
            resolve: async (parent) => {
                // Count the number of upvotes in the database and return the total
                const promptId = parent.id;

                const ratings = await db.promptVotes.findMany({
                    where: {
                        promptId: promptId,
                    }
                });

                if (ratings.length === 0) {
                    return 0;
                }

                // Average the ratings
                return ratings.reduce((a, b) => a + b.rating, 0) / ratings.length;
            }
        }),
        // TODO: Dedupe this code
        totalRatings: t.int({
            resolve: (parent) => {
                // Count the number of upvotes in the database and return the total
                const promptId = parent.id;

                return db.promptVotes.count({
                    where: {
                        promptId: promptId,
                    }
                });
            }
        }),
        userRating: t.int({
            nullable: true,
            resolve: async (parent, args, ctx, info) => {
                if (!ctx.currentUser) {
                    return null;
                }

                const loggedInUser = ctx.currentUser.id;

                const rating = await db.promptVotes.findFirst({
                    where: {
                        userId: loggedInUser,
                        promptId: parent.id,
                    }
                });

                if (!rating) {
                    return null;
                }

                return rating.rating;
            }
        }),
        isUserAuthor: t.boolean({
            resolve: async (parent, args, ctx, info) => {
                if (!ctx.currentUser) {
                    return false;
                }

                const promptAuthor = await db.prompts.findFirst({
                    where: {
                        id: parent.id,
                    }
                });

                return ctx.currentUser.id === promptAuthor?.authorId;
            }
        }),
        comments: t.relation('Comments'),
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
        downloadCount: t.exposeInt('downloadCount', {
            nullable: false,
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
        rating: t.float({
            resolve: async (parent) => {
                // Count the number of upvotes in the database and return the total
                const promptId = parent.id;

                const ratings = await db.promptVotes.findMany({
                    where: {
                        promptId: promptId,
                    }
                });

                if (ratings.length === 0) {
                    return 0;
                }

                // Average the ratings
                return ratings.reduce((a, b) => a + b.rating, 0) / ratings.length;
            }
        }),
        // TODO: Dedupe this code
        totalRatings: t.int({
            resolve: (parent) => {
                // Count the number of upvotes in the database and return the total
                const promptId = parent.id;

                return db.promptVotes.count({
                    where: {
                        promptId: promptId,
                    }
                });
            }
        }),
        userRating: t.int({
            nullable: true,
            resolve: async (parent, args, ctx, info) => {
                if (!ctx.currentUser) {
                    return null;
                }

                const loggedInUser = ctx.currentUser.id;

                const rating = await db.promptVotes.findFirst({
                    where: {
                        userId: loggedInUser,
                        promptId: parent.id,
                    }
                });

                if (!rating) {
                    return null;
                }

                return rating.rating;
            }
        }),
    })
});

builder.prismaNode('User', {
    id: {field: 'id'},
    fields: (t) => ({
        email: t.exposeString('email', {
            nullable: false,
        }),
        name: t.string({
            resolve: async (parent, args, ctx, info) => {
                if (!ctx.currentUser) {
                    return parent.publicName || 'Anonymous';
                }

                if (ctx.currentUser.id === parent.id) {
                    return parent.name || 'Anonymous';
                }

                return 'Anonymous';
            }
        }),
        image: t.exposeString('image', {
            nullable: true,
        }),
        publicName: t.exposeString('publicName', {
            nullable: true,
        }),
    })
});

const Tags = builder.prismaNode('Tags', {
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
        count: convertBigInt(t as any),
        name: t.exposeString('name', {
            nullable: false,
        }),
        description: t.exposeString('description', {
            nullable: true
        }),
    }),
});

const Comments = builder.prismaNode('Comments', {
id: {field: 'id'},
    fields: (t) => ({
        userId: t.exposeID('userId', {
            nullable: false,
        }),
        promptId: t.exposeID('promptId', {
            nullable: false,
        }),
        comment: t.exposeString('comment', {
            nullable: false,
        }),
        // @ts-ignore
        createdAt: t.exposeString('createdAt', {
            nullable: false,
        }),
        user: t.relation('user'),
    })
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
                orderField: t.arg.string({required: false}),
            },
            // TODO: Clean this code up with types and maybe to feel less hacky
            resolve: async (parent, args, ctx, info) => {
                const resolveOffset = await resolveOffsetConnection({args}, async ({limit, offset}) => {
                    // TODO: Figure out how to allow additional characters like dashes without crashing queryRaw
                    const searchTerm = args.query ? args.query.replace(/[\-@]/g, ' ').replace(/[^a-zA-Z0-9 _]/g, '').trim() : null;
                    const searchOrder = (!args.order || args.order && args.order.toUpperCase() === 'DESC') ? 'DESC' : 'ASC';
                    const searchOrderField = args.orderField === 'dateCreated' ? 'dateCreated' : 'downloadCount';

                    const nsfwFilter = args.nsfw === null ? [true, false] : [!!args.nsfw];

                    /**
                     * This is a painful hack to get around Prisma's lack of support for dynamic ORDER BY clauses.
                     * It might come from Postgres not supporting templates in ORDER BY clauses, but I'm not sure.
                     * Fortunately, this hack isn't the worst thing in the world. It's just annoying that we can't use
                     * Prisma.sql to do this. I officially hate Prisma.
                     */
                    function getOrderByClause() {
                        if (searchOrderField === 'dateCreated' && searchOrder === 'DESC') {
                            return Prisma.sql`ORDER BY p.dateCreated DESC`;
                        }
                        if (searchOrderField === 'dateCreated' && searchOrder === 'ASC') {
                            return Prisma.sql`ORDER BY p.dateCreated ASC`;
                        }
                        if (searchOrderField === 'downloadCount' && searchOrder === 'ASC') {
                            return Prisma.sql`ORDER BY p.downloadCount ASC`;
                        }
                        if (searchOrderField === 'downloadCount' && searchOrder === 'DESC') {
                            return Prisma.sql`ORDER BY p.downloadCount DESC`;
                        }
                        throw new Error('Unsupported query order type');
                    }

                    // The "default" search when somebody hasn't plugged in any queries. More interesting than a blank page.
                    if (!searchTerm && (!args.tags || args.tags.length === 0)) {
                        return db.$queryRaw`SELECT p.id, p.title, p.promptContent, p.description, p.tags, p.nsfw, p.dateCreated as dateCreated, p.dateEdited, p.publishDate, p.downloadCount as downloadCount
                                            FROM Prompts p
                                            WHERE p.nsfw IN (${Prisma.join(nsfwFilter)})
                                                AND p.deleted = false
                                            ${getOrderByClause()}
                                            LIMIT ${limit} OFFSET ${offset}`;
                    }

                    // Search by tags
                    if (args.tags && args.tags.length > 0) {
                        const allTags = args.tags.map(tag => tag.toLowerCase());
                        const negativeTags = allTags.filter(tag => tag.startsWith('-')).map(tag => tag.substring(1));
                        const positiveTags = allTags.filter(tag => !tag.startsWith('-'));

                        // TODO: Figure out if this can be merged with the next query
                        if (negativeTags.length > 0 && positiveTags.length === 0) {
                            return db.$queryRaw`
                                SELECT p.*
                                FROM prompts AS p
                                WHERE p.id NOT IN (
                                    SELECT tpm.promptID
                                    FROM tagsPromptsMap AS tpm
                                    JOIN tags AS t ON tpm.tagId = t.id
                                    WHERE t.name IN (${Prisma.join(negativeTags)})
                                )
                                AND p.nsfw IN (${Prisma.join(nsfwFilter)})
                                AND p.deleted = false
                                ${getOrderByClause()}
                                LIMIT ${limit} OFFSET ${offset}
                            `;
                        }

                        // If there is no search term, just return the prompts that match the tags
                        if (!searchTerm) {
                            return db.$queryRaw`
                                SELECT p.*
                                FROM prompts AS p
                                         JOIN tagsPromptsMap AS tpm ON p.id = tpm.promptID
                                         JOIN tags AS t ON tpm.tagId = t.id
                                WHERE 1=1 ${negativeTags.length > 0 ? Prisma.sql`AND p.id NOT IN (
                                    SELECT tpm2.promptID
                                    FROM tagsPromptsMap AS tpm2
                                             JOIN tags AS t2 ON tpm2.tagId = t2.id
                                    WHERE t2.name IN (${Prisma.join(negativeTags)})
                                )` : Prisma.empty}
                                    ${positiveTags.length > 0 ? Prisma.sql`AND t.name IN (${Prisma.join(positiveTags)})` : Prisma.empty}
                                  AND p.nsfw IN (${Prisma.join(nsfwFilter)})
                                  AND p.deleted = false
                                GROUP BY p.id
                                HAVING COUNT(DISTINCT t.id) = ${positiveTags.length}
                                ${getOrderByClause()}
                                LIMIT ${limit} OFFSET ${offset}
                            `;
                        }

                        // TODO: Figure out how to search the prompts AND tags at the same time. It's likely doable, I'm just lazy.
                        // The tradeoff is that right now we just return ALL prompts. Not the most optimal, but it works.
                        const allTagPrompts = await db.$queryRaw<{id: string}[]>`
                            SELECT p.id 
                            FROM prompts AS p
                                     JOIN tagsPromptsMap AS tpm ON p.id = tpm.promptID
                                     JOIN tags AS t ON tpm.tagId = t.id
                            WHERE 1=1 ${negativeTags.length > 0 ? Prisma.sql`AND p.id NOT IN (
                                    SELECT tpm2.promptID
                                    FROM tagsPromptsMap AS tpm2
                                             JOIN tags AS t2 ON tpm2.tagId = t2.id
                                    WHERE t2.name IN (${Prisma.join(negativeTags)})
                                )` : Prisma.empty}
                                ${positiveTags.length > 0 ? Prisma.sql`AND t.name IN (${Prisma.join(positiveTags)})` : Prisma.empty}
                              AND p.nsfw IN (${Prisma.join(nsfwFilter)})
                              AND p.deleted = false
                            GROUP BY p.id
                            HAVING COUNT(DISTINCT t.id) = ${positiveTags.length}
                            ${getOrderByClause()}
                        `;

                        // We can't call the next step with an empty array
                        if (allTagPrompts.length === 0) {
                            return [];
                        }

                        // TODO: Get rid of the any because it's not necessary
                        // Search by text for all prompts that match the tags
                        return db.$queryRaw`SELECT ps.id, ps.title, ps.promptContent, ps.description, ps.tags, ps.nsfw, p.dateCreated, p.dateEdited, p.publishDate, p.downloadCount
                                            FROM "promptSearch" ps
                                            JOIN Prompts p ON ps.id = p.id
                                            WHERE
                                                ps.id IN (${Prisma.join(allTagPrompts.map(p => p.id))})
                                                AND "promptSearch" MATCH ${searchTerm}
                                                AND ps.nsfw IN (${Prisma.join(nsfwFilter)})
                                                AND p.deleted = false
                                            ${getOrderByClause()}
                                            LIMIT ${limit} OFFSET ${offset}`;
                    }

                    return db.$queryRaw`SELECT ps.id, ps.title, ps.promptContent, ps.description, ps.tags, ps.nsfw, p.dateCreated, p.dateEdited, p.publishDate, p.downloadCount
                                        FROM "promptSearch" ps
                                        JOIN Prompts p ON ps.id = p.id
                                        WHERE "promptSearch" MATCH ${searchTerm}
                                        AND ps.nsfw IN (${Prisma.join(nsfwFilter)})
                                        AND p.deleted = false
                                        ${getOrderByClause()}
                                        LIMIT ${limit} OFFSET ${offset}` as any;
                });
                return resolveOffset as any;
            },
        }),
        // tags: t.connection({
        //     type: Tags,
        //     args: {
        //         query: t.arg.string({required: false}),
        //     },
        //     resolve: async (parent, args, ctx, info) => {
        //         const resolveOffset = await resolveOffsetConnection({args}, async ({limit, offset}) => {
        //             const searchTerm = args.query ? args.query.replace(/[\-@]/g, ' ').replace(/[^a-zA-Z0-9 _]/g, '').trim() : null;
        //
        //             // The "default" search when somebody hasn't plugged in any queries. More interesting than a blank page.
        //             if (!searchTerm) {
        //                 return db.$queryRaw`SELECT *
        //                                     FROM Tags
        //                                     ORDER BY name ASC
        //                                     LIMIT ${limit} OFFSET ${offset}`;
        //             }
        //
        //             return db.$queryRaw`SELECT *
        //                                 FROM "tagSearch"
        //                                 WHERE "tagSearch" MATCH ${searchTerm}
        //                                 ORDER BY name ASC
        //                                 LIMIT ${limit} OFFSET ${offset}` as any;
        //         });
        //         return resolveOffset as any;
        //     },
        // }),

    })
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
        updatePrompt: t.prismaField({
            type: 'Prompts',
            args: {
                id: t.arg.id({required: true}),
                title: t.arg.string({required: false}),
                description: t.arg.string({required: false}),
                promptContent: t.arg.string({required: false}),
                memory: t.arg.string({required: false}),
                authorsNote: t.arg.string({required: false}),
                nsfw: t.arg.boolean({required: false}),
                // tags: t.arg.string({required: false}),
            },
            resolve: async (query, root, {
                id,
                title,
                description,
                promptContent,
                memory,
                authorsNote,
                nsfw,
                // tags
            }, ctx, info) => {
                if (!ctx.currentUser) {
                    throw new Error("No user found");
                }

                if (typeof id !== 'string') {
                    throw new Error("Invalid ID");
                }

                const loggedInUser = ctx.currentUser.id;

                const prompt = await db.prompts.findUnique({
                    where: {
                        id: id,
                    }
                });

                if (!prompt) {
                    throw new Error("Prompt not found");
                }

                // TODO: Add admin overrides and a more advanced permissions system
                if (prompt.authorId !== loggedInUser) {
                    throw new Error("You are not the author of this prompt");
                }

                const newPromptData: {
                    title?: string,
                    description?: string,
                    promptContent?: string,
                    memory?: string,
                    authorsNote?: string,
                    nsfw?: number,
                    publishDate?: string,
                    tags?: string
                } = {};

                if (title) {
                    newPromptData.title = title;
                }

                if (description) {
                    newPromptData.description = description;
                }

                if (promptContent) {
                    newPromptData.promptContent = promptContent;
                }

                if (memory) {
                    newPromptData.memory = memory;
                }

                if (authorsNote) {
                    newPromptData.authorsNote = authorsNote;
                }

                if (nsfw !== undefined && nsfw !== null) {
                    newPromptData.nsfw = nsfw ? 1 : 0;
                }

                // if (tags) {
                //     newPromptData.tags = tags;
                // }

                // Perform the update operation using Prisma client
                return db.prompts.update({
                    ...query,
                    where: {id: id},
                    data: {
                        ...newPromptData,
                    },
                });
            }
        }),
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
        votePrompt: t.boolean({
            args: {
                promptId: t.arg.string({ required: true }),
                setRating: t.arg.float({ required: false }),
            },
            resolve: async (root, { promptId, setRating }, ctx, info) => {
                if (!ctx.currentUser) {
                    throw new Error("No user found, please login");
                }

                const loggedInUser = ctx.currentUser.id;

                // Check if the user has already voted for the prompt
                const promptVote = await db.promptVotes.findFirst({
                    where: {
                        userId: loggedInUser,
                        promptId: promptId,
                    }
                });

                // If the user has already voted the prompt, then remove the vote
                if (promptVote) {
                    await db.promptVotes.delete({
                        where: {
                            id: promptVote.id,
                        }
                    });
                }

                // The user is "un-voting", so do nothing.
                if (setRating === null || setRating === undefined) {
                    return true;
                }

                await db.promptVotes.create({
                    data: {
                        userId: loggedInUser,
                        promptId: promptId,
                        rating: setRating,
                    }
                });

                return true;
            }
        })
    }),
});

// Build and export the schema
export const schema = builder.toSchema();


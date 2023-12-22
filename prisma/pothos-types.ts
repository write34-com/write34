/* eslint-disable */
import type { Prisma, Prompts, WorldInfos, AetherPrompts, AetherWorldInfos, PromptSearch, WorldInfoSearch, User, Tags, TagsPromptsMap } from "./client";
export default interface PrismaTypes {
    Prompts: {
        Name: "Prompts";
        Shape: Prompts;
        Include: Prisma.PromptsInclude;
        Select: Prisma.PromptsSelect;
        OrderBy: Prisma.PromptsOrderByWithRelationInput;
        WhereUnique: Prisma.PromptsWhereUniqueInput;
        Where: Prisma.PromptsWhereInput;
        Create: {};
        Update: {};
        RelationName: "tagsFull" | "worldInfos";
        ListRelations: "tagsFull" | "worldInfos";
        Relations: {
            tagsFull: {
                Shape: TagsPromptsMap[];
                Name: "TagsPromptsMap";
            };
            worldInfos: {
                Shape: WorldInfos[];
                Name: "WorldInfos";
            };
        };
    };
    WorldInfos: {
        Name: "WorldInfos";
        Shape: WorldInfos;
        Include: Prisma.WorldInfosInclude;
        Select: Prisma.WorldInfosSelect;
        OrderBy: Prisma.WorldInfosOrderByWithRelationInput;
        WhereUnique: Prisma.WorldInfosWhereUniqueInput;
        Where: Prisma.WorldInfosWhereInput;
        Create: {};
        Update: {};
        RelationName: "prompts";
        ListRelations: never;
        Relations: {
            prompts: {
                Shape: Prompts;
                Name: "Prompts";
            };
        };
    };
    AetherPrompts: {
        Name: "AetherPrompts";
        Shape: AetherPrompts;
        Include: Prisma.AetherPromptsInclude;
        Select: Prisma.AetherPromptsSelect;
        OrderBy: Prisma.AetherPromptsOrderByWithRelationInput;
        WhereUnique: Prisma.AetherPromptsWhereUniqueInput;
        Where: Prisma.AetherPromptsWhereInput;
        Create: {};
        Update: {};
        RelationName: "worldInfos";
        ListRelations: "worldInfos";
        Relations: {
            worldInfos: {
                Shape: AetherWorldInfos[];
                Name: "AetherWorldInfos";
            };
        };
    };
    AetherWorldInfos: {
        Name: "AetherWorldInfos";
        Shape: AetherWorldInfos;
        Include: Prisma.AetherWorldInfosInclude;
        Select: Prisma.AetherWorldInfosSelect;
        OrderBy: Prisma.AetherWorldInfosOrderByWithRelationInput;
        WhereUnique: Prisma.AetherWorldInfosWhereUniqueInput;
        Where: Prisma.AetherWorldInfosWhereInput;
        Create: {};
        Update: {};
        RelationName: "prompts";
        ListRelations: never;
        Relations: {
            prompts: {
                Shape: AetherPrompts;
                Name: "AetherPrompts";
            };
        };
    };
    PromptSearch: {
        Name: "PromptSearch";
        Shape: PromptSearch;
        Include: never;
        Select: Prisma.PromptSearchSelect;
        OrderBy: Prisma.PromptSearchOrderByWithRelationInput;
        WhereUnique: Prisma.PromptSearchWhereUniqueInput;
        Where: Prisma.PromptSearchWhereInput;
        Create: {};
        Update: {};
        RelationName: never;
        ListRelations: never;
        Relations: {};
    };
    WorldInfoSearch: {
        Name: "WorldInfoSearch";
        Shape: WorldInfoSearch;
        Include: never;
        Select: Prisma.WorldInfoSearchSelect;
        OrderBy: Prisma.WorldInfoSearchOrderByWithRelationInput;
        WhereUnique: Prisma.WorldInfoSearchWhereUniqueInput;
        Where: Prisma.WorldInfoSearchWhereInput;
        Create: {};
        Update: {};
        RelationName: never;
        ListRelations: never;
        Relations: {};
    };
    User: {
        Name: "User";
        Shape: User;
        Include: never;
        Select: Prisma.UserSelect;
        OrderBy: Prisma.UserOrderByWithRelationInput;
        WhereUnique: Prisma.UserWhereUniqueInput;
        Where: Prisma.UserWhereInput;
        Create: {};
        Update: {};
        RelationName: never;
        ListRelations: never;
        Relations: {};
    };
    Tags: {
        Name: "Tags";
        Shape: Tags;
        Include: Prisma.TagsInclude;
        Select: Prisma.TagsSelect;
        OrderBy: Prisma.TagsOrderByWithRelationInput;
        WhereUnique: Prisma.TagsWhereUniqueInput;
        Where: Prisma.TagsWhereInput;
        Create: {};
        Update: {};
        RelationName: "tagPrompts";
        ListRelations: "tagPrompts";
        Relations: {
            tagPrompts: {
                Shape: TagsPromptsMap[];
                Name: "TagsPromptsMap";
            };
        };
    };
    TagsPromptsMap: {
        Name: "TagsPromptsMap";
        Shape: TagsPromptsMap;
        Include: Prisma.TagsPromptsMapInclude;
        Select: Prisma.TagsPromptsMapSelect;
        OrderBy: Prisma.TagsPromptsMapOrderByWithRelationInput;
        WhereUnique: Prisma.TagsPromptsMapWhereUniqueInput;
        Where: Prisma.TagsPromptsMapWhereInput;
        Create: {};
        Update: {};
        RelationName: "tag" | "prompt";
        ListRelations: never;
        Relations: {
            tag: {
                Shape: Tags;
                Name: "Tags";
            };
            prompt: {
                Shape: Prompts;
                Name: "Prompts";
            };
        };
    };
}
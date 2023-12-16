/* eslint-disable */
import type { Prisma, Prompts, WorldInfos, AetherPrompts, AetherWorldInfos } from "./client";
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
        RelationName: "worldInfos";
        ListRelations: "worldInfos";
        Relations: {
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
}
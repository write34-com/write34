/* eslint-disable */
import type { Prisma, Prompts, WorldInfos, AetherPrompts, AetherWorldInfos, PromptSearch, WorldInfoSearch, TagSearch, Account, Session, User, VerificationToken, Tags, TagsPromptsMap, PromptVotes, Comments, CommentVotes, CommentReplies } from "./client";
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
        RelationName: "tagsFull" | "worldInfos" | "author" | "PromptVotes" | "Comments";
        ListRelations: "tagsFull" | "worldInfos" | "PromptVotes" | "Comments";
        Relations: {
            tagsFull: {
                Shape: TagsPromptsMap[];
                Name: "TagsPromptsMap";
            };
            worldInfos: {
                Shape: WorldInfos[];
                Name: "WorldInfos";
            };
            author: {
                Shape: User | null;
                Name: "User";
            };
            PromptVotes: {
                Shape: PromptVotes[];
                Name: "PromptVotes";
            };
            Comments: {
                Shape: Comments[];
                Name: "Comments";
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
    TagSearch: {
        Name: "TagSearch";
        Shape: TagSearch;
        Include: never;
        Select: Prisma.TagSearchSelect;
        OrderBy: Prisma.TagSearchOrderByWithRelationInput;
        WhereUnique: Prisma.TagSearchWhereUniqueInput;
        Where: Prisma.TagSearchWhereInput;
        Create: {};
        Update: {};
        RelationName: never;
        ListRelations: never;
        Relations: {};
    };
    Account: {
        Name: "Account";
        Shape: Account;
        Include: Prisma.AccountInclude;
        Select: Prisma.AccountSelect;
        OrderBy: Prisma.AccountOrderByWithRelationInput;
        WhereUnique: Prisma.AccountWhereUniqueInput;
        Where: Prisma.AccountWhereInput;
        Create: {};
        Update: {};
        RelationName: "user";
        ListRelations: never;
        Relations: {
            user: {
                Shape: User;
                Name: "User";
            };
        };
    };
    Session: {
        Name: "Session";
        Shape: Session;
        Include: Prisma.SessionInclude;
        Select: Prisma.SessionSelect;
        OrderBy: Prisma.SessionOrderByWithRelationInput;
        WhereUnique: Prisma.SessionWhereUniqueInput;
        Where: Prisma.SessionWhereInput;
        Create: {};
        Update: {};
        RelationName: "user";
        ListRelations: never;
        Relations: {
            user: {
                Shape: User;
                Name: "User";
            };
        };
    };
    User: {
        Name: "User";
        Shape: User;
        Include: Prisma.UserInclude;
        Select: Prisma.UserSelect;
        OrderBy: Prisma.UserOrderByWithRelationInput;
        WhereUnique: Prisma.UserWhereUniqueInput;
        Where: Prisma.UserWhereInput;
        Create: {};
        Update: {};
        RelationName: "accounts" | "sessions" | "Prompts" | "PromptVotes" | "Comments" | "CommentVotes" | "CommentReplies";
        ListRelations: "accounts" | "sessions" | "Prompts" | "PromptVotes" | "Comments" | "CommentVotes" | "CommentReplies";
        Relations: {
            accounts: {
                Shape: Account[];
                Name: "Account";
            };
            sessions: {
                Shape: Session[];
                Name: "Session";
            };
            Prompts: {
                Shape: Prompts[];
                Name: "Prompts";
            };
            PromptVotes: {
                Shape: PromptVotes[];
                Name: "PromptVotes";
            };
            Comments: {
                Shape: Comments[];
                Name: "Comments";
            };
            CommentVotes: {
                Shape: CommentVotes[];
                Name: "CommentVotes";
            };
            CommentReplies: {
                Shape: CommentReplies[];
                Name: "CommentReplies";
            };
        };
    };
    VerificationToken: {
        Name: "VerificationToken";
        Shape: VerificationToken;
        Include: never;
        Select: Prisma.VerificationTokenSelect;
        OrderBy: Prisma.VerificationTokenOrderByWithRelationInput;
        WhereUnique: Prisma.VerificationTokenWhereUniqueInput;
        Where: Prisma.VerificationTokenWhereInput;
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
    PromptVotes: {
        Name: "PromptVotes";
        Shape: PromptVotes;
        Include: Prisma.PromptVotesInclude;
        Select: Prisma.PromptVotesSelect;
        OrderBy: Prisma.PromptVotesOrderByWithRelationInput;
        WhereUnique: Prisma.PromptVotesWhereUniqueInput;
        Where: Prisma.PromptVotesWhereInput;
        Create: {};
        Update: {};
        RelationName: "user" | "prompt";
        ListRelations: never;
        Relations: {
            user: {
                Shape: User;
                Name: "User";
            };
            prompt: {
                Shape: Prompts;
                Name: "Prompts";
            };
        };
    };
    Comments: {
        Name: "Comments";
        Shape: Comments;
        Include: Prisma.CommentsInclude;
        Select: Prisma.CommentsSelect;
        OrderBy: Prisma.CommentsOrderByWithRelationInput;
        WhereUnique: Prisma.CommentsWhereUniqueInput;
        Where: Prisma.CommentsWhereInput;
        Create: {};
        Update: {};
        RelationName: "user" | "prompt" | "CommentVotes" | "CommentReplies";
        ListRelations: "CommentVotes" | "CommentReplies";
        Relations: {
            user: {
                Shape: User;
                Name: "User";
            };
            prompt: {
                Shape: Prompts;
                Name: "Prompts";
            };
            CommentVotes: {
                Shape: CommentVotes[];
                Name: "CommentVotes";
            };
            CommentReplies: {
                Shape: CommentReplies[];
                Name: "CommentReplies";
            };
        };
    };
    CommentVotes: {
        Name: "CommentVotes";
        Shape: CommentVotes;
        Include: Prisma.CommentVotesInclude;
        Select: Prisma.CommentVotesSelect;
        OrderBy: Prisma.CommentVotesOrderByWithRelationInput;
        WhereUnique: Prisma.CommentVotesWhereUniqueInput;
        Where: Prisma.CommentVotesWhereInput;
        Create: {};
        Update: {};
        RelationName: "user" | "comment";
        ListRelations: never;
        Relations: {
            user: {
                Shape: User;
                Name: "User";
            };
            comment: {
                Shape: Comments;
                Name: "Comments";
            };
        };
    };
    CommentReplies: {
        Name: "CommentReplies";
        Shape: CommentReplies;
        Include: Prisma.CommentRepliesInclude;
        Select: Prisma.CommentRepliesSelect;
        OrderBy: Prisma.CommentRepliesOrderByWithRelationInput;
        WhereUnique: Prisma.CommentRepliesWhereUniqueInput;
        Where: Prisma.CommentRepliesWhereInput;
        Create: {};
        Update: {};
        RelationName: "user" | "comment";
        ListRelations: never;
        Relations: {
            user: {
                Shape: User;
                Name: "User";
            };
            comment: {
                Shape: Comments;
                Name: "Comments";
            };
        };
    };
}
CREATE TABLE PromptVotes (
                         id TEXT NOT NULL PRIMARY KEY DEFAULT (lower(hex(randomblob(14)))),
                         userId TEXT NOT NULL,
                         promptId TEXT NOT NULL,
                         createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
                         upvote BOOLEAN NOT NULL,
                         CONSTRAINT "Upvotes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
                         CONSTRAINT "Upvotes_promptId_fkey" FOREIGN KEY ("promptId") REFERENCES "Prompts" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- Indexes
CREATE INDEX PromptVotes_userId_idx ON PromptVotes(userId);
CREATE INDEX PromptVotes_promptId_idx ON PromptVotes(promptId);
CREATE INDEX PromptVotes_createdAt_idx ON PromptVotes(createdAt);
CREATE UNIQUE INDEX "PromptVotes_userId_promptId_key" ON "PromptVotes"("userId", "promptId");

CREATE TABLE Comments (
                         id TEXT NOT NULL PRIMARY KEY DEFAULT (lower(hex(randomblob(14)))),
                         userId TEXT NOT NULL,
                         promptId TEXT NOT NULL,
                         comment TEXT NOT NULL,
                         createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
                         CONSTRAINT "Comments_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
                         CONSTRAINT "Comments_promptId_fkey" FOREIGN KEY ("promptId") REFERENCES "Prompts" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- Indexes
CREATE INDEX Comments_userId_idx ON Comments(userId);
CREATE INDEX Comments_promptId_idx ON Comments(promptId);
CREATE INDEX Comments_createdAt_idx ON Comments(createdAt);

CREATE TABLE CommentVotes (
                         id TEXT NOT NULL PRIMARY KEY DEFAULT (lower(hex(randomblob(14)))),
                         userId TEXT NOT NULL,
                         commentId TEXT NOT NULL,
                         createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
                         upvote BOOLEAN NOT NULL,
                         CONSTRAINT "CommentReplies_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
                         CONSTRAINT "CommentReplies_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "Comments" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- Indexes
CREATE INDEX CommentVotes_userId_idx ON CommentVotes(userId);
CREATE INDEX CommentVotes_commentId_idx ON CommentVotes(commentId);
CREATE INDEX CommentVotes_createdAt_idx ON CommentVotes(createdAt);
CREATE UNIQUE INDEX "CommentVotes_userId_commentId_key" ON "CommentVotes"("userId", "commentId");

CREATE TABLE CommentReplies (
                         id TEXT NOT NULL PRIMARY KEY DEFAULT (lower(hex(randomblob(14)))),
                         userId TEXT NOT NULL,
                         commentId TEXT NOT NULL,
                         reply TEXT NOT NULL,
                         createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
                         CONSTRAINT "CommentReplies_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
                         CONSTRAINT "CommentReplies_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "Comments" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- Indexes
CREATE INDEX CommentReplies_userId_idx ON CommentReplies(userId);
CREATE INDEX CommentReplies_commentId_idx ON CommentReplies(commentId);

-- General Indexes
CREATE INDEX User_name_idx ON User(name);
CREATE INDEX User_publicName_idx ON User(publicName);

-- Add downloadCount column
ALTER TABLE "Prompts" ADD COLUMN "downloadCount" INTEGER NOT NULL DEFAULT 0;

-- Indexes
CREATE INDEX Prompts_downloadCount_idx ON Prompts(downloadCount);

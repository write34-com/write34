DROP TABLE IF EXISTS PromptVotes;

DROP INDEX IF EXISTS "PromptVotes_userId_idx";
DROP INDEX IF EXISTS "PromptVotes_createdAt_idx";
DROP INDEX IF EXISTS "PromptVotes_rating_idx";
DROP INDEX IF EXISTS "PromptVotes_promptId_idx";
DROP INDEX IF EXISTS "PromptVotes_userId_promptId_key";

CREATE TABLE PromptVotes (
                                 id TEXT NOT NULL PRIMARY KEY DEFAULT (lower(hex(randomblob(14)))),
                                 userId TEXT NOT NULL,
                                 promptId TEXT NOT NULL,
                                 createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
                                 rating INTEGER CHECK (rating BETWEEN 0 AND 50),
                                 CONSTRAINT "Upvotes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
                                 CONSTRAINT "Upvotes_promptId_fkey" FOREIGN KEY ("promptId") REFERENCES "Prompts" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- Indexes
CREATE INDEX PromptVotes_userId_idx ON PromptVotes(userId);
CREATE INDEX PromptVotes_promptId_idx ON PromptVotes(promptId);
CREATE INDEX PromptVotes_createdAt_idx ON PromptVotes(createdAt);
CREATE INDEX PromptVotes_rating_idx ON PromptVotes(rating);
CREATE UNIQUE INDEX "PromptVotes_userId_promptId_key" ON "PromptVotes"("userId", "promptId");

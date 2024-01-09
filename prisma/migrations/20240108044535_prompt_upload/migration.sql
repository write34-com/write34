-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "publicName" TEXT,
    "email" TEXT NOT NULL,
    "emailVerified" DATETIME,
    "image" TEXT,
    "dateCreated" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_User" ("dateCreated", "email", "emailVerified", "id", "image", "name") SELECT "dateCreated", "email", "emailVerified", "id", "image", "name" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE TABLE "new_Prompts" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "aetherId" INTEGER,
    "authorsNote" TEXT,
    "description" TEXT,
    "memory" TEXT,
    "nsfw" INTEGER NOT NULL,
    "parentId" TEXT,
    "promptContent" TEXT NOT NULL,
    "publishDate" TEXT,
    "quests" TEXT,
    "tags" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "scriptZip" BLOB,
    "novelAiScenario" TEXT,
    "holoAiScenario" TEXT,
    "correlationId" TEXT NOT NULL,
    "dateCreated" TEXT NOT NULL,
    "dateEdited" TEXT,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "authorId" TEXT,
    "json" TEXT,
    CONSTRAINT "Prompts_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Prompts" ("aetherId", "authorsNote", "correlationId", "dateCreated", "dateEdited", "deleted", "description", "holoAiScenario", "id", "memory", "novelAiScenario", "nsfw", "parentId", "promptContent", "publishDate", "quests", "scriptZip", "tags", "title") SELECT "aetherId", "authorsNote", "correlationId", "dateCreated", "dateEdited", "deleted", "description", "holoAiScenario", "id", "memory", "novelAiScenario", "nsfw", "parentId", "promptContent", "publishDate", "quests", "scriptZip", "tags", "title" FROM "Prompts";
DROP TABLE "Prompts";
ALTER TABLE "new_Prompts" RENAME TO "Prompts";
CREATE INDEX "IX_Prompts_AetherId" ON "Prompts"("aetherId");
CREATE INDEX "IX_Prompts_CorrelationId" ON "Prompts"("correlationId");
CREATE INDEX "IX_Prompts_ParentId" ON "Prompts"("parentId");
CREATE TABLE "new_AetherWorldInfos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "entry" TEXT NOT NULL,
    "keys" TEXT NOT NULL,
    "promptId" INTEGER NOT NULL,
    "correlationId" TEXT NOT NULL,
    "dateCreated" TEXT NOT NULL,
    "dateEdited" TEXT,
    CONSTRAINT "AetherWorldInfos_promptId_fkey" FOREIGN KEY ("promptId") REFERENCES "AetherPrompts" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_AetherWorldInfos" ("correlationId", "dateCreated", "dateEdited", "entry", "id", "keys", "promptId") SELECT "correlationId", "dateCreated", "dateEdited", "entry", "id", "keys", "promptId" FROM "AetherWorldInfos";
DROP TABLE "AetherWorldInfos";
ALTER TABLE "new_AetherWorldInfos" RENAME TO "AetherWorldInfos";
CREATE INDEX "IX_AetherWorldInfos_CorrelationId" ON "AetherWorldInfos"("correlationId");
CREATE INDEX "IX_AetherWorldInfos_PromptId" ON "AetherWorldInfos"("promptId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

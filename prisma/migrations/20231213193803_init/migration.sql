-- CreateTable
CREATE TABLE "Prompts" (
    "id" TEXT NOT NULL PRIMARY KEY default (uuid()),
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
    "deleted" INTEGER NOT NULL DEFAULT 0
);

-- CreateIndex
CREATE INDEX "IX_Prompts_AetherId" ON "Prompts"("aetherId");

-- CreateIndex
CREATE INDEX "IX_Prompts_CorrelationId" ON "Prompts"("correlationId");

-- CreateIndex
CREATE INDEX "IX_Prompts_ParentId" ON "Prompts"("parentId");

-- CreateTable
CREATE TABLE "WorldInfos" (
    "id" TEXT NOT NULL PRIMARY KEY default (uuid()),
    "aetherId" INTEGER,
    "entry" TEXT NOT NULL,
    "keys" TEXT NOT NULL,
    "promptId" INTEGER NOT NULL,
    "correlationId" INTEGER NOT NULL,
    "dateCreated" TEXT NOT NULL,
    "dateEdited" TEXT,
    CONSTRAINT "WorldInfos_promptId_fkey" FOREIGN KEY ("promptId") REFERENCES "Prompts" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE INDEX "IX_WorldInfos_CorrelationId" ON "WorldInfos"("correlationId");

-- CreateIndex
CREATE INDEX "IX_WorldInfos_AetherId" ON "WorldInfos"("aetherId");

-- CreateIndex
CREATE INDEX "IX_WorldInfos_PromptId" ON "WorldInfos"("promptId");

-- These tables exist for migrating data into

-- CreateTable
CREATE TABLE "AetherPrompts" (
                           "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
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
                           "dateEdited" TEXT
);

-- CreateTable
CREATE TABLE "AetherWorldInfos" (
                              "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
                              "entry" TEXT NOT NULL,
                              "keys" TEXT NOT NULL,
                              "promptId" INTEGER NOT NULL,
                              "correlationId" INTEGER NOT NULL,
                              "dateCreated" TEXT NOT NULL,
                              "dateEdited" TEXT,
                              CONSTRAINT "AetherWorldInfos_promptId_fkey"
                                  FOREIGN KEY ("promptId") REFERENCES "AetherPrompts" ("id")
                                      ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE INDEX "IX_AetherPrompts_CorrelationId" ON "AetherPrompts"("correlationId");

-- CreateIndex
CREATE INDEX "IX_AetherWorldInfos_CorrelationId" ON "AetherWorldInfos"("correlationId");

-- CreateIndex
CREATE INDEX "IX_AetherWorldInfos_PromptId" ON "AetherWorldInfos"("promptId");

-----

CREATE VIRTUAL TABLE promptSearch USING fts5
(
    id UNINDEXED,
    description,
    memory,
    promptContent,
    tags,
    title,
    nsfw UNINDEXED,
    content="Prompts",
    content_rowid='rowid'
);

-- This has been moved into "db-setup.sql" for now until we can figure out the
-- "malformed database" issue that seems to exist when prompts are inserted by these triggers.
-- It only happens when we run a FTS5 search against `promptSearch` but it breaks the ORM/Prisma.
-- Very annoying. It might have to do with the ID needing to be an integer value, but we're using
-- a UUID and instead relying on `rowid` as the identifier. Perhaps there is a weird edge case there.
-- For now though, this works and is just a bit jank. But databases are often delicate anyway!

CREATE TRIGGER promptSearch_ai AFTER INSERT ON Prompts
BEGIN
    INSERT INTO promptSearch (id, description, memory, promptContent, tags, title, nsfw)
    VALUES (new.id, new.description, new.memory, new.promptContent, new.tags, new.title, new.nsfw);
END;

CREATE TRIGGER promptSearch_ad AFTER DELETE ON Prompts
BEGIN
    INSERT INTO promptSearch (promptSearch, id, description, memory, promptContent, tags, title, nsfw)
    VALUES ('delete', old.id, old.description, old.memory, old.promptContent, old.tags, old.title, old.nsfw);
END;

CREATE TRIGGER promptSearch_au AFTER UPDATE ON Prompts
BEGIN
    INSERT INTO promptSearch (promptSearch, id, description, memory, promptContent, tags, title, nsfw)
    VALUES ('delete', old.id, old.description, old.memory, old.promptContent, old.tags, old.title, old.nsfw);
    INSERT INTO promptSearch (id, description, memory, promptContent, tags, title, nsfw)
    VALUES (new.id, new.description, new.memory, new.promptContent, new.tags, new.title, new.nsfw);
END;

CREATE VIRTUAL TABLE worldInfoSearch USING fts5
(
    id UNINDEXED,
    entry,
    keys,
    content="WorldInfos",
    content_rowid='rowid'
);

-- Create Trigger
CREATE TRIGGER worldInfoSearch_ai AFTER INSERT ON WorldInfos
BEGIN
    INSERT INTO worldInfoSearch (id, entry, keys)
    VALUES (new.id, new.entry, new.keys);
END;

-- Create Trigger
CREATE TRIGGER worldInfoSearch_ad AFTER DELETE ON WorldInfos
BEGIN
    INSERT INTO worldInfoSearch (worldInfoSearch, rowid, entry, keys)
    VALUES ('delete', old.id, old.entry, old.keys);
END;

-- Create Trigger
CREATE TRIGGER worldInfoSearch_au AFTER UPDATE ON WorldInfos
BEGIN
    INSERT INTO worldInfoSearch (worldInfoSearch, rowid, entry, keys)
    VALUES ('delete', old.id, old.entry, old.keys);
    INSERT INTO worldInfoSearch (id, entry, keys)
    VALUES (new.id, new.entry, new.keys);
END;

-----

-- Tags Tables
--
-- CREATE TABLE Tags (
--     "id" TEXT NOT NULL PRIMARY KEY default (uuid()),
--     "name" TEXT NOT NULL UNIQUE,
--     "description" TEXT
-- );
--
-- -- CreateIndex
-- CREATE INDEX "IX_Tags_Name" ON "Tags"("name");
--
-- CREATE TABLE TagsPromptsMap (
--     "tagId" TEXT NOT NULL REFERENCES Tags,
--     "promptId" TEXT NOT NULL REFERENCES Prompts,
-- );
--
-- -- CreateIndex
-- CREATE INDEX "IX_TagsPromptsMap_TagId" ON "TagsPromptsMap"("tagId");
--
-- -- CreateIndex
-- CREATE INDEX "IX_TagsPromptsMap_PromptId" ON "TagsPromptsMap"("promptId");


ATTACH DATABASE 'backup.db' as 'AetherDB';

BEGIN TRANSACTION;

-- Select all records that don't exist in our database yet.
INSERT INTO AetherPrompts
SELECT * FROM AetherDB.Prompts
WHERE id NOT IN (SELECT id FROM AetherPrompts);

-- Select all records that don't exist in our database yet.
INSERT INTO AetherWorldInfos
SELECT * FROM AetherDB.WorldInfos
WHERE id NOT IN (SELECT id FROM AetherWorldInfos);

COMMIT;

BEGIN TRANSACTION;

-- Create a temporary table for correlationId to UUID mapping
CREATE TEMPORARY TABLE CorrelationIdMapping (
    correlationId INTEGER UNIQUE,
    newUUID TEXT default (uuid())
);

-- Insert distinct correlationIds from both Prompts and WorldInfos, generating UUIDs
INSERT INTO CorrelationIdMapping (correlationId)
SELECT DISTINCT correlationId
FROM (
    SELECT DISTINCT correlationId FROM AetherDB.Prompts
    UNION
    SELECT DISTINCT correlationId FROM AetherDB.WorldInfos
)
WHERE correlationId IS NOT NULL;

-- Initial insert with generated UUIDs and temporary parentId
INSERT INTO Prompts (
    id,
    aetherId,
    authorsNote,
    description,
    memory,
    nsfw,
    parentId, -- Temporarily using the aetherId of the parent
    promptContent,
    publishDate,
    quests,
    tags,
    title,
    scriptZip,
    novelAiScenario,
    holoAiScenario,
    correlationId,
    dateCreated,
    dateEdited
)
SELECT
    uuid() as id,
    id as aetherId,
    authorsNote,
    description,
    memory,
    nsfw,
    -- This is the aetherId of the parent until the next step
    CAST(parentId AS TEXT),
    promptContent,
    publishDate,
    quests,
    tags,
    title,
    scriptZip,
    novelAiScenario,
    holoAiScenario,
    -- Getting new UUID from the mapping table
    m.newUUID as correlationId,
    dateCreated,
    dateEdited
FROM AetherDB.Prompts p
JOIN CorrelationIdMapping m ON p.correlationId = m.correlationId
WHERE p.id NOT IN (SELECT aetherId FROM Prompts);

-- Update parentId to the UUID of the parent record, if exists
UPDATE Prompts
SET correlationId = (
    SELECT cm.newUUID
    FROM CorrelationIdMapping cm
    WHERE Prompts.correlationId = cm.correlationId
)
WHERE EXISTS (
    SELECT 1
    FROM CorrelationIdMapping cm
    WHERE Prompts.correlationId = cm.correlationId
);

-- Create a temporary table for aetherId to UUID mapping
CREATE TEMPORARY TABLE PromptsMapping (
                                          aetherId TEXT UNIQUE,
                                          newUUID TEXT
);

-- Create a mapping of aetherId to UUID
INSERT INTO PromptsMapping (aetherId, newUUID)
SELECT p.aetherId, p.id
FROM Prompts p;

-- Update parentId to the UUID of the parent record, if exists
UPDATE Prompts
SET parentId = (
    SELECT pm.newUUID
    FROM PromptsMapping pm
    WHERE Prompts.parentId = pm.aetherId
)
WHERE EXISTS (
    SELECT 1
    FROM PromptsMapping pm
    WHERE Prompts.parentId = pm.aetherId
);

-- Select all WorldInfos that don't exist in our database yet.
INSERT INTO WorldInfos (
    aetherId,
    entry,
    keys,
    -- This will be the newUUID from PromptsMapping
    promptId,
    correlationId,
    dateCreated,
    dateEdited
)
SELECT
    wi.id as aetherId,
    wi.entry,
    wi.keys,
    -- Replacing promptId with the newUUID from PromptsMapping
    pm.newUUID as promptId,
    -- Getting new UUID from the mapping table
    m.newUUID as correlationId,
    wi.dateCreated,
    wi.dateEdited
FROM AetherDB.WorldInfos wi
         LEFT JOIN PromptsMapping pm ON wi.promptId = pm.aetherId
         JOIN CorrelationIdMapping m ON wi.correlationId = m.correlationId
WHERE wi.id NOT IN (SELECT aetherId FROM WorldInfos);

-- Update parentId to the UUID of the parent record, if exists
UPDATE WorldInfos
SET promptId = (
    SELECT pm.newUUID
    FROM PromptsMapping pm
    WHERE WorldInfos.promptId = pm.aetherId
)
WHERE EXISTS (
    SELECT 1
    FROM PromptsMapping pm
    WHERE WorldInfos.promptId = pm.aetherId
);


-- Update parentId to the UUID of the parent record, if exists
UPDATE WorldInfos
SET correlationId = (
    SELECT cm.newUUID
    FROM CorrelationIdMapping cm
    WHERE WorldInfos.correlationId = cm.correlationId
)
WHERE EXISTS (
    SELECT 1
    FROM CorrelationIdMapping cm
    WHERE WorldInfos.correlationId = cm.correlationId
);

COMMIT;


-- Why the hell does this query work when I put a LIMIT on it?
-- If I don't and I run the FST5 search query, SELECT * FROM "promptSearch" WHERE "promptSearch" MATCH 'Orgy';
-- I get a "database is malformed" error. Total bonkers.
INSERT INTO "promptSearch" (id,
                            description,
                            memory,
                            promptContent,
                            tags,
                            title)
SELECT id, description, memory, PromptContent, Tags, Title FROM "Prompts" LIMIT 100000;

-- Creating these *after* because of the malformed database error
CREATE TRIGGER promptSearch_ai AFTER INSERT ON Prompts
BEGIN
    INSERT INTO promptSearch (id, description, memory, promptContent, tags, title)
    VALUES (new.id, new.description, new.memory, new.promptContent, new.tags, new.title);
END;

CREATE TRIGGER promptSearch_ad AFTER DELETE ON Prompts
BEGIN
    INSERT INTO promptSearch (promptSearch, id, description, memory, promptContent, tags, title)
    VALUES ('delete', old.id, old.description, old.memory, old.promptContent, old.tags, old.title);
END;

CREATE TRIGGER promptSearch_au AFTER UPDATE ON Prompts
BEGIN
    INSERT INTO promptSearch (promptSearch, id, description, memory, promptContent, tags, title)
    VALUES ('delete', old.id, old.description, old.memory, old.promptContent, old.tags, old.title);
    INSERT INTO promptSearch (id, description, memory, promptContent, tags, title)
    VALUES (new.id, new.description, new.memory, new.promptContent, new.tags, new.title);
END;

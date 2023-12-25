BEGIN;

DROP TABLE promptSearch;

CREATE VIRTUAL TABLE promptSearch USING fts5 (
    id UNINDEXED,
    description,
    memory,
    promptContent,
    tags,
    title,
    nsfw,
    content="Prompts",
    content_rowid='rowid'
);

INSERT INTO promptSearch (id, description, memory, promptContent, tags, title, nsfw)
SELECT id, description, memory, promptContent, tags, title, nsfw FROM Prompts;

COMMIT;


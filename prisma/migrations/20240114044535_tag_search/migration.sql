
CREATE VIRTUAL TABLE TagSearch USING fts5(
    id UNINDEXED,
    name,
    tokenize="trigram",
    prefix='1 2 3 4',
    content="Tags",
    content_rowid='rowid'
);

-- Triggers to keep the FTS index up to date.
CREATE TRIGGER TagSearch_ai AFTER INSERT ON Tags BEGIN
    INSERT INTO TagSearch(rowid, id, name) VALUES (new.rowid, new.id, new.name);
END;
CREATE TRIGGER TagSearch_ad AFTER DELETE ON Tags BEGIN
    INSERT INTO TagSearch(TagSearch, rowid, id, name) VALUES('delete', old.rowid, old.id, old.name);
END;
CREATE TRIGGER TagSearch_au AFTER UPDATE ON Tags BEGIN
    INSERT INTO TagSearch(TagSearch, rowid, id, name) VALUES('delete', old.rowid, old.id, old.name);
    INSERT INTO TagSearch(rowid, id, name) VALUES (new.rowid, new.id, new.name);
END;

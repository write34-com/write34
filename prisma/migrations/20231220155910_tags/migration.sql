
-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "dateCreated" TEXT NOT NULL,
    "lastLoggedIn" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "IX_Users_Email" ON "User"("email");

-- CreateIndex
CREATE INDEX "IX_Users_Name" ON "User"("name");

-- CreateIndex
CREATE INDEX "IX_Users_LastLoggedIn" ON "User"("lastLoggedIn");


-- CreateTable
CREATE TABLE "Tags" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "Tags_name_key" ON "Tags"("name");

-- CreateIndex
CREATE INDEX "IX_Tags_Name" ON "Tags"("name");


-- CreateTable
CREATE TABLE "TagsPromptsMap" (
    "tagId" TEXT NOT NULL,
    "promptID" TEXT NOT NULL,
    CONSTRAINT "TagsPromptsMap_tagId_fkey"
        FOREIGN KEY ("tagId") REFERENCES "Tags" ("id")
            ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "TagsPromptsMap_promptID_fkey"
        FOREIGN KEY ("promptID") REFERENCES "Prompts" ("id")
            ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "TagsPromptsMap_tagId_promptID_key"
    ON "TagsPromptsMap"("tagId", "promptID");

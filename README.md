# write34

This is the code that backs https://write34.com

It is a website for sharing NovelAI prompts. The prompts are pulled from [AetherRoom](https://aetherroom.club) from the SQLite database they share.

## Contributing

This is a NextJS app built with the default Next template. It uses TypeScript, React, Prisma, SQLite, Pothos, and Tailwind CSS with Daisy UI.

### Getting Started

Clone the repo:
```bash
git clone https://github.com/write34-com/write34.git
cd write34
```

Setup the database:
- Download it from here: https://file.io/26toKZmBKOEp
- Extract it:
  ```bash
  xz -d seanario-scrubbed.sqlite
  ```
- Move it to root of repo
  ```bash
  mv seanario-scrubbed.sqlite seanario.sqlite
  ```

Install dependencies and generate everything.
```bash
# Install dependencies
npm install

# Generate GraphQL stuff
npm run generate
```

Then run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the pages by modifying files like `app/page.tsx`. The pages auto-updates as you edit the file. (Thanks NextJS!)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

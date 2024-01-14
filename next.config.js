/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
        relay: {
            src: "./",
            language: "typescript",
            artifactDirectory: "src/__generated__",
        },
    },
    env: {
        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
        NEXTAUTH_URL: process.env.NEXTAUTH_URL,
        IS_BUILDING_SITE: process.env.IS_BUILDING_SITE,
    }
    // experimental: { appDir: true },
};

module.exports = nextConfig;

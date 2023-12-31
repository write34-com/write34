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
    }
    // experimental: { appDir: true },
};

module.exports = nextConfig;

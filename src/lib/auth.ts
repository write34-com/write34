import type { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from "next";
import type { NextAuthOptions } from "next-auth";
import { getServerSession } from "next-auth";
import GithubProvider from "next-auth/providers/github";

// const clientId = process.env.GITHUB_ID;
//
// if (!clientId) {
//     throw new Error(
//         `Please define the GITHUB_ID environment variable inside .env.local`
//     );
// }
//
// const clientSecret = process.env.GITHUB_SECRET;
//
// if (!clientSecret) {
//     throw new Error(
//         `Please define the GITHUB_SECRET environment variable inside .env.local`
//     );
// }

export const config = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID || '',
            clientSecret: process.env.GITHUB_SECRET || '',
        }),
    ],
} satisfies NextAuthOptions;

export function auth(...args: [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]] | [NextApiRequest, NextApiResponse] | []) {
    return getServerSession(...args, config);
}

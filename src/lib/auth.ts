import type {GetServerSidePropsContext, NextApiRequest, NextApiResponse} from "next";
import type {NextAuthOptions, Session} from "next-auth";
import {getServerSession} from "next-auth";
import GithubProvider from "next-auth/providers/github";
import {db} from "@/app/api/graphql/db";
import {PrismaAdapter} from "@next-auth/prisma-adapter";

const clientId = process.env.GITHUB_ID;

if (!clientId && process.env.NODE_ENV !== "development") {
    throw new Error(
        `Please define the GITHUB_ID environment variable inside .env.local`
    );
}

const clientSecret = process.env.GITHUB_SECRET;

if (!clientSecret && process.env.NODE_ENV !== "development") {
    throw new Error(
        `Please define the GITHUB_SECRET environment variable inside .env.local`
    );
}

export interface UserSession extends Session {
    user: {
        id: string;
        name?: string;
        publicName?: string;
        email: string;
        image?: string;
    }
};

export const config = {
    debug: process.env.NODE_ENV === "development",
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID || '',
            clientSecret: process.env.GITHUB_SECRET || '',
        }),
    ],
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60, // 30 days
    },
    adapter: PrismaAdapter(db as any),

    callbacks: {
        async jwt({token, account, profile}) {

            if (!token.email) {
                throw new Error("No email found");
            }

            const user = await db.user.findUniqueOrThrow({
                where: {
                    email: token.email
                },
                select: {
                    id: true,
                    publicName: true,
                }
            });

            // Persist the user id to the token right after signin
            token.id = user.id;
            token.publicName = user.publicName;

            return token;
        },
        async session({session, token, user}): Promise<UserSession> {
            if (!session.user) {
                throw new Error("No user found");
            }

            if (!session.user.email) {
                throw new Error("No email found");
            }

            // TODO: Maybe make this a little bit more typesafe but for now this is reasonable
            return {
                ...session,
                user: {
                    id: token.id as string,
                    email: session.user.email as string,
                    name: session.user.name as string,
                    image: session.user.image as string,
                    publicName: (token.publicName as string) || undefined,
                }
            };
        }
    }
} satisfies NextAuthOptions;

export function auth(...args: [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]] | [NextApiRequest, NextApiResponse] | []) {
    return getServerSession(...args, config);
}

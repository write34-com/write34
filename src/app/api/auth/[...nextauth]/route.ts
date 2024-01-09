import NextAuth from "next-auth";
import {config} from "@/lib/auth";
import {db} from "@/app/api/graphql/db";

const handler = NextAuth({
  ...config,
});

export { handler as GET, handler as POST };
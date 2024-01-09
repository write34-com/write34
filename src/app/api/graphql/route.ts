import { createYoga } from 'graphql-yoga';
import type { NextApiRequest, NextApiResponse } from 'next';
import {schema} from "@/app/api/graphql/types";
import {auth, config} from "@/lib/auth";
import {NextRequest, NextResponse} from "next/server";

// Proxy the Yoga request handler through a handler that holds req/res
async function handler(req: Request | NextRequest, res: NextResponse<Response>) {

    // Get the user session using NextAuth
    const session = await auth(
      // @ts-ignore
      req,
      {
          ...res,
          getHeader: (name: string) => res.headers?.get(name),
          setHeader: (name: string, value: string) => res.headers?.set(name, value),
      } as unknown as NextApiResponse);

    const { handleRequest } = createYoga({
        schema: schema,
        graphqlEndpoint: '/api/graphql',

        context: async ({request}) => {

            // Add the user to the context
            const currentUser = session?.user || null;

            // Return the context object
            return { currentUser };
        },
        // Yoga needs to know how to create a valid Next response
        fetchAPI: {
            Response: Response,
            Request: Request,
        }
    });

    return handleRequest(req, res);
}

export { handler as GET, handler as POST, handler as OPTIONS };


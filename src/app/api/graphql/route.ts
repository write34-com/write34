import { createYoga } from 'graphql-yoga';
import type { NextApiRequest, NextApiResponse } from 'next';
import {schema} from "@/app/api/graphql/types";

const { handleRequest } = createYoga<{
    req: NextApiRequest
    res: NextApiResponse
}>({
    schema: schema,
    graphqlEndpoint: '/api/graphql',

    // Yoga needs to know how to create a valid Next response
    fetchAPI: { Response }
});

export { handleRequest as GET, handleRequest as POST, handleRequest as OPTIONS };

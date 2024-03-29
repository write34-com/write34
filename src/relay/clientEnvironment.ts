import {
    Environment,
    Network,
    RecordSource,
    Store,
    RequestParameters,
    QueryResponseCache,
    Variables,
    GraphQLResponse,
    CacheConfig,
} from "relay-runtime";
import {SerializablePreloadedQuery} from "@/relay/loadSerializableQuery";

const IS_SERVER = typeof window === typeof undefined;
const CACHE_TTL = 5 * 1000; // 5 seconds, to resolve preloaded results

const MAX_RETRY = process.env.IS_BUILDING_SITE ? 4: 2;

// Retry function to fetch data from network
export async function retryRequest<T>(
  fn: () => Promise<T>,
): Promise<T> {
    for (let i = 0; i <= MAX_RETRY; i++) {
        try {
            // delay
            await new Promise((resolve) => setTimeout(resolve, (Math.random() * 1000 + i * 1000) * (i * i)));
            return await fn();
        } catch (e) {
            if (process.env.NODE_ENV === 'development') {
                console.error('Failed to fetch data from network, retrying...', e);
            }
            if (i === MAX_RETRY) {
                throw e;
            }
        }
    }
    throw new Error('Unreachable');
}

export async function networkFetch(
    request: RequestParameters,
    variables: Variables
): Promise<GraphQLResponse> {

    const baseurl = process.env.NEXTAUTH_URL;

    const resp = await fetch(baseurl + '/api/graphql', {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: request.text,
            variables,
        }),
    });
    const json = await resp.json();

    // GraphQL returns exceptions (for example, a missing required variable) in the "errors"
    // property of the response. If any exceptions occurred when processing the request,
    // throw an error to indicate to the developer what went wrong.
    if (Array.isArray(json.errors)) {
        console.error(json.errors);
        throw new Error(
            `Error fetching GraphQL query '${
                request.name
            }' with variables '${JSON.stringify(variables)}': ${JSON.stringify(
                json.errors
            )}`
        );
    }

    return json;
}

export const globalResponseCache: QueryResponseCache | null = IS_SERVER
    ? null
    : new QueryResponseCache({
        size: 100,
        ttl: CACHE_TTL,
    });


export function setupFetchQuery(localResponseCache: QueryResponseCache | null ) {
    const responseCache = localResponseCache || globalResponseCache;

    return function fetchQuery(
      request: RequestParameters,
      variables: Variables,
      cacheConfig: CacheConfig
    ) {
        const isQuery = request.operationKind === "query";
        const cacheKey = request.id ?? request.cacheID;
        const forceFetch = cacheConfig && cacheConfig.force;
        if (responseCache != null && isQuery && !forceFetch) {
            const fromCache = responseCache.get(cacheKey, variables);
            if (fromCache != null) {
                return Promise.resolve(fromCache);
            }
        }

        const baseurl = process.env.NEXTAUTH_URL || '';

        return fetch(baseurl + '/api/graphql', {
            method: 'POST',
            headers: {
                // Add authentication and other headers here
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                query: request.text, // GraphQL text from input
                variables,
            }),
        }).then(response => {
            return response.json();
        });
    };
}

function createEnvironment(preloadedQuery?: SerializablePreloadedQuery<any, any>) {
    const responseCache = new QueryResponseCache({
        size: 100,
        ttl: CACHE_TTL,
    });

    if (preloadedQuery) {
        responseCache.set(
            preloadedQuery.params.id ?? preloadedQuery.params.cacheID,
            preloadedQuery.variables,
            preloadedQuery.response
        );
    }

    return new Environment({
        // network: createNetwork(),
        network: Network.create(setupFetchQuery(responseCache)),
        store: new Store(RecordSource.create()),
        isServer: IS_SERVER,
    });
}

export const environment = createEnvironment();

export function getCurrentEnvironment(preloadedQuery?: SerializablePreloadedQuery<any, any>) {
    // TODO: Figure out how to pass cookies to this
    if (IS_SERVER) {
        return createEnvironment(preloadedQuery);
    }

    return environment;
}


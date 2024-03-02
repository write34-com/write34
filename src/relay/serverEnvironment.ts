import {
    Environment,
    Network,
    RecordSource,
    Store,
    RequestParameters,
    Variables,
    CacheConfig,
} from "relay-runtime";
import {cookies} from "next/headers";

export function serverFetchQuery(
  cookies: string) {
    return function fetchQuery(
      request: RequestParameters,
      variables: Variables,
      // cacheConfig: CacheConfig
      // uploadables,
    )
    {
        const baseurl = process.env.NEXTAUTH_URL;

        return fetch(baseurl + '/api/graphql', {
            method: 'POST',
            headers: {
                // Add authentication and other headers here
                'content-type': 'application/json',
                Cookie: cookies
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

function createEnvironment() {
    return new Environment({
        // network: createNetwork(),
        network:  Network.create(serverFetchQuery(cookies().toString())),
        store: new Store(RecordSource.create()),
        isServer: true,
    });
}

export function getServerEnvironment(): Environment {
    return createEnvironment();
}


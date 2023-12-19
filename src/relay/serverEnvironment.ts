import {
    Environment,
    Network,
    RecordSource,
    Store,
    RequestParameters,
    Variables,
    CacheConfig,
} from "relay-runtime";

export function fetchQuery(
    request: RequestParameters,
    variables: Variables,
    cacheConfig: CacheConfig
    // uploadables,
) {
    const baseurl = process.env.NEXTAUTH_URL;

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
}

function createEnvironment() {
    return new Environment({
        // network: createNetwork(),
        network:  Network.create(fetchQuery),
        store: new Store(RecordSource.create()),
        isServer: true,
    });
}

export function getServerEnvironment(): Environment {
    return createEnvironment();
}


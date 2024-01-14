import {
    GraphQLResponse,
    OperationType,
    RequestParameters,
    VariablesOf,
} from "relay-runtime";
import { ConcreteRequest } from "relay-runtime/lib/util/RelayConcreteNode";
import {fetchQuery, networkFetch} from "./clientEnvironment";

export interface SerializablePreloadedQuery<
    TRequest extends ConcreteRequest,
    TQuery extends OperationType
> {
    params: TRequest["params"];
    variables: VariablesOf<TQuery>;
    response: GraphQLResponse;
}

// Call into raw network fetch to get serializable GraphQL query response
// This response will be sent to the client to "warm" the QueryResponseCache
// to avoid the client fetches.
export default async function loadSerializableQuery<
    TRequest extends ConcreteRequest,
    TQuery extends OperationType
>(
    params: RequestParameters,
    variables: VariablesOf<TQuery>
): Promise<SerializablePreloadedQuery<TRequest, TQuery>> {

    if (process.env.IS_BUILDING_SITE) {
        // Wait for a random amount of time between 0 and 5 seconds
        // If we don't do this, we get build errors because builds happen in parallel too quickly.
        // TODO: When we swap from SQLite to Postgres, we can likely remove this because we can use connection pooling.
        await new Promise(resolve => setTimeout(resolve, 3000 + Math.random() * 5000));
    }

    const response = await networkFetch(params, variables);
    return {
        params,
        variables,
        response,
    };
}

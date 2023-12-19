
import {db} from "@/app/api/graphql/db";
import loadSerializableQuery from "@/relay/loadSerializableQuery";
import ScenarioClientComponent from "@/app/scenarios/[scenario]/scenarioClientComponent";
import scenarioComponentViewQueryGraphql, {
    scenarioComponentViewQuery
} from "@/__generated__/scenarioComponentViewQuery.graphql";

export const generateStaticParams = (async () => {

    const dbScenarios = await db.prompts.findMany({
        take: 100000,
    });

    return dbScenarios.map(scenario => ({
        scenario: scenario.id
    }));
});

export default async function ScenarioPage({ params }: {
    params: { scenario: string };
}) {
    const preloadedQuery = await loadSerializableQuery<
        typeof scenarioComponentViewQueryGraphql,
        scenarioComponentViewQuery
    >(scenarioComponentViewQueryGraphql.params, {
        scenario: params.scenario
    });

    return <ScenarioClientComponent preloadedQuery={preloadedQuery} />;
}


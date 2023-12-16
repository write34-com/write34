import { printSchema } from 'graphql';
import type { CodegenConfig } from '@graphql-codegen/cli';
import {schema} from "./src/app/api/graphql/types";

const config: CodegenConfig = {
    schema: printSchema(schema),
    documents: ['src/**/*.tsx'],
    generates: {
        // './src/gql/': {
        //     preset: 'client',
        //     plugins: [],
        // },
        'schema.graphql': {
            plugins: ['schema-ast'],
        },
    },
    config: {
        scalars: {
            UUID: 'string',
            DateTime: 'Date',
        },
    },
};

export default config;

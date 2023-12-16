
module.exports = {
  root: ".",
  "sources": {
    "src": "seanario",
    "src/app": "seanario"
  },
  "projects": {
    "seanario": {
      "language": "typescript",
      "schema": "schema.graphql",
      "output": "src/__generated__",
      "useImportTypeSyntax": true,
      "featureFlags": {
        // "relay_resolver_model_syntax_enabled": true,
        // "use_named_imports_for_relay_resolvers": true,
        // "enable_relay_resolver_transform": true,
        // "relay_resolver_enable_terse_syntax": true
      },
      "eagerEsModules": true
    }
  },
};

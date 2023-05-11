module.exports = {
  //https://github.com/B2o5T/graphql-eslint/blob/master/packages/plugin/CHANGELOG.md
  overrides: [
    {
      files: ['*.gql'],
      parser: '@graphql-eslint/eslint-plugin',
      plugins: ['@graphql-eslint'],
      rules: {
        'prettier/prettier': [
          'error',
          {
            parser: 'graphql',
          },
        ],
        '@graphql-eslint/naming-convention': [
          'error',
          {
            types: 'PascalCase',
            FieldDefinition: 'camelCase',
            OperationDefinition: {
              style: 'camelCase',
              forbiddenPrefixes: ['Query', 'Mutation', 'Subscription', 'Get'],
              forbiddenSuffixes: ['Query', 'Mutation', 'Subscription'],
            },
            FragmentDefinition: 'camelCase',
            'FieldDefinition[parent.name.value = Query]': 'camelCase',
            allowLeadingUnderscore: true,
          },
        ],
        '@graphql-eslint/no-deprecated': ['error'],
        '@graphql-eslint/unique-fragment-name': ['error'],
        '@graphql-eslint/unique-operation-name': ['error'],
        '@graphql-eslint/no-anonymous-operations': ['error'],
        '@graphql-eslint/require-deprecation-reason': ['error'],
        '@graphql-eslint/no-case-insensitive-enum-values-duplicates': ['error'],
        '@graphql-eslint/no-duplicate-fields': ['error'],
        '@graphql-eslint/input-name': [
          'error',
          {
            checkInputType: true,
            checkQueries: false,
            checkMutations: false,
            caseSensitiveInputType: false,
          },
        ],
        '@graphql-eslint/fields-on-correct-type': ['error'],
        '@graphql-eslint/known-argument-names': ['error'],
        '@graphql-eslint/known-directives': ['error'],
        '@graphql-eslint/known-fragment-names': ['error'],
        '@graphql-eslint/known-type-names': ['error'],
        '@graphql-eslint/no-unused-fragments': ['off'],
        '@graphql-eslint/no-unused-variables': ['error'],
        '@graphql-eslint/unique-field-definition-names': ['error'],
        '@graphql-eslint/unique-input-field-names': ['error'],
        '@graphql-eslint/unique-operation-types': ['error'],
        '@graphql-eslint/unique-type-names': ['error'],
        '@graphql-eslint/unique-variable-names': ['error'],
      },
    },
  ],
};

module.exports = {
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
            ObjectTypeDefinition: 'PascalCase',
            InputObjectTypeDefinition: 'PascalCase',
            FieldDefinition: 'camelCase',
            // FIXME:
            // EnumValueDefinition: 'camelCase',
            OperationDefinition: 'camelCase',
            FragmentDefinition: 'camelCase',
            QueryDefinition: 'camelCase',
            leadingUnderscore: 'allow',
          },
        ],
        '@graphql-eslint/no-deprecated': ['error'],
        '@graphql-eslint/unique-fragment-name': ['error'],
        '@graphql-eslint/unique-operation-name': ['error'],
        '@graphql-eslint/no-anonymous-operations': ['error'],
        '@graphql-eslint/no-operation-name-suffix': ['error'],
        '@graphql-eslint/avoid-operation-name-prefix': ['error', { keywords: ['get'] }],
        '@graphql-eslint/require-deprecation-reason': ['error'],
        '@graphql-eslint/no-case-insensitive-enum-values-duplicates': ['error'],
        '@graphql-eslint/avoid-duplicate-fields': ['error'],
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

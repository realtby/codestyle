module.exports = {
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      settings: {
        'import/resolver': {
          typescript: {},
        },
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
        ecmaFeatures: {
          arrowFunctions: true,
        },
        project: './tsconfig.json',
      },
      extends: [
        'plugin:@typescript-eslint/base',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/typescript',
      ],
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
          typescript: {
            alwaysTryTypes: true,
          },
        },
      },
      rules: {
        // unused
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error'],
        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': ['error'],

        // @ts-ignore
        '@typescript-eslint/ban-ts-comment': [
          'error',
          {
            'ts-expect-error': true,
            'ts-ignore': 'allow-with-description',
            'ts-nocheck': true,
            'ts-check': true,
            minimumDescriptionLength: 3,
          },
        ],

        // prefer `string[]`, but Array<string | number>
        '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],

        'no-return-await': 'off',
        '@typescript-eslint/return-await': ['error', 'never'],

        'no-duplicate-imports': 'off',
        '@typescript-eslint/no-duplicate-imports': ['error'],

        camelcase: 'off',
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'variable',
            format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
            leadingUnderscore: 'allow',
            trailingUnderscore: 'allow',
          },
          {
            selector: 'function',
            format: ['camelCase', 'PascalCase'],
          },
          {
            selector: 'typeLike',
            format: ['PascalCase'],
          },
          {
            // emulates @typescript-eslint/class-name-casing
            selector: 'class',
            format: ['PascalCase'],
          },
          {
            // emulates @typescript-eslint/interface-name-prefix
            selector: 'interface',
            format: ['PascalCase'],
            custom: {
              regex: '^I[A-Z]',
              match: false,
            },
          },
        ],

        '@typescript-eslint/unbound-method': 'off',
        'jest/unbound-method': 'off',
        // FIXME: error or off
        '@typescript-eslint/no-unsafe-assignment': 'warn',
        '@typescript-eslint/no-unsafe-call': 'warn',
        '@typescript-eslint/no-unsafe-return': 'warn',
        '@typescript-eslint/no-unsafe-member-access': 'warn',

        '@typescript-eslint/consistent-type-assertions': [
          'error',
          { assertionStyle: 'as', objectLiteralTypeAssertions: 'allow-as-parameter' },
        ],

        // always use `Record<string, number>`
        '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],

        // enforce using `Interface` for object type definitions.
        '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],

        // prefer `import type {}`
        '@typescript-eslint/consistent-type-imports': 'error',

        // explicit `enum { Foo = 1 }`
        '@typescript-eslint/prefer-enum-initializers': 'error',

        // use `foo?.a?.b?.c`
        '@typescript-eslint/prefer-optional-chain': 'error',

        // use `reduce<Record<string, boolean>>`
        '@typescript-eslint/prefer-reduce-type-parameter': 'error',

        // forbid `[1, 2, 3, 10, 20, 30].sort(); -> [1, 10, 2, 20, 3, 30]`
        '@typescript-eslint/require-array-sort-compare': 'error',

        // chore:
        '@typescript-eslint/no-invalid-void-type': 'error',
        '@typescript-eslint/no-unnecessary-condition': 'error',
        '@typescript-eslint/no-unnecessary-type-constraint': 'error',
        '@typescript-eslint/prefer-literal-enum-member': 'error',
        '@typescript-eslint/prefer-string-starts-ends-with': 'error',
        '@typescript-eslint/promise-function-async': 'error',
        '@typescript-eslint/unified-signatures': 'error',
        '@typescript-eslint/restrict-template-expressions': [
          'error',
          { allowNumber: true, allowBoolean: true },
        ],
        '@typescript-eslint/no-unsafe-argument': 'off',
      },
    },
  ],
};

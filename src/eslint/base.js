module.exports = {
  extends: [
    'eslint:recommended',
    // json@3 requires npm@7
    'plugin:json/recommended-with-comments',
    'plugin:jest/all',
    'plugin:unicorn/recommended',
  ],
  plugins: ['jest', 'unicorn'],
  env: {
    es6: true,
    browser: true,
    jest: true,
    node: true,
  },
  settings: {
    jest: {
      version: 26,
    },
  },
  rules: {
    // allow console.error & console.warning
    'no-console': ['error', { allow: ['warn', 'error'] }],

    // always use brackets after if's
    curly: 'error',

    // omit useless function brackets
    'arrow-body-style': ['error', 'as-needed'],

    'no-else-return': ['error', { allowElseIf: false }],
    'newline-after-var': ['error', 'always'],
    'no-useless-return': 'error',

    // unicorn
    'unicorn/filename-case': [
      'error',
      {
        case: 'kebabCase',
      },
    ],
    'unicorn/consistent-destructuring': 'off',
    'unicorn/explicit-length-check': 'off',
    'unicorn/import-index': 'error',
    'unicorn/no-array-callback-reference': 'off',
    'unicorn/no-array-for-each': 'off',
    'unicorn/no-array-reduce': 'off',
    'unicorn/no-nested-ternary': 'off',
    'unicorn/no-null': 'off',
    'unicorn/no-useless-undefined': 'off',
    'unicorn/prefer-module': 'off',
    'unicorn/prefer-node-protocol': 'off',
    'unicorn/prefer-spread': 'off',
    'unicorn/prefer-starts-ends-with': 'error',
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/prefer-object-from-entries': 'off',

    // jest
    'jest/require-hook': 'off',
  },
};

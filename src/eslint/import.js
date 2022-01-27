module.exports = {
  extends: ['plugin:import/errors', 'plugin:import/warnings'],
  plugins: ['import'],
  settings: {
    node: {
      tryExtensions: ['.js', '.json', '.ts'],
    },
  },
  rules: {
    'no-restricted-imports': ['error', { patterns: ['../*'] }],
    'import/no-useless-path-segments': [
      'error',
      {
        noUselessIndex: true,
      },
    ],
    'import/prefer-default-export': 'off',
    'import/first': 'error',
    'import/newline-after-import': ['error', { count: 1 }],
    'import/no-named-export': 'off',
    // 'import/no-default-export': 'warn',
    'import/no-self-import': 'error',
  },
};

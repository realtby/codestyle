module.exports = {
  extends: ['plugin:node/recommended'],
  plugins: ['node'],
  env: {
    es6: true,
    jest: true,
    node: true,
  },
  rules: {
    'node/no-unsupported-features/es-syntax': ['error', { ignores: ['modules'] }],
    'node/no-missing-import': 'off',
  },
};

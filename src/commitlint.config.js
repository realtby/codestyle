module.exports = ({ scopes = [], list: types = [] } = {}) => ({
  extends: ['@commitlint/config-conventional'],
  plugins: ['commitlint-plugin-function-rules'],
  rules: {
    'type-enum': [2, 'always', types],
    'scope-enum': [0], // disabled, override to use slashes in scopes:
    'function-rules/scope-enum': [
      2,
      'always',
      parsed => {
        if (scopes.includes(parsed.scope)) {
          return [true];
        }

        return [false, `scope must be one of ${scopes.join(', ')}`];
      },
    ],
  },
});

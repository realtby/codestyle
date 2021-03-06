const baseTypes = {
  fix: ['๐จ', 'bug fix'],
  feat: ['๐', 'new feature'],
  task: ['๐ก', 'new task'],
  chore: ['', 'chore changes'],
  ci: ['๐ค', 'ci related changes'],
  docs: ['๐๏ธ', 'docs changes'],
  perf: ['โก', 'performance improvements'],
  style: ['๐', 'markup, formatting'],
  refactor: ['๐ณ', 'code change that neither fixes a bug or adds a feature'],
  tests: ['๐งช', 'add tests'],
  tools: ['โ๏ธ', 'configs, setups, build'],
  temp: ['๐ง', 'temporary changes'],
  release: ['๐ฆ', 'release'],
};

const baseScopes = ['core', 'types', 'user', 'auth', 'utils', '*'];

module.exports = ({ scopes = [], types = {} } = {}) => {
  const resultTypes = Object.assign(baseTypes, types);

  return {
    disableEmoji: false,
    list: Object.keys(resultTypes),
    maxMessageLength: 64,
    minMessageLength: 3,
    questions: ['type', 'scope', 'subject', 'issues'],
    scopes: baseScopes.concat(scopes),
    types: Object.entries(resultTypes).reduce((acc, [value, [emoji, description]]) => {
      acc[value] = { emoji, description, value };
      return acc;
    }, {}),
  };
};

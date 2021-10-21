const baseTypes = {
  fix: ['🔨', 'bug fix'],
  feat: ['🚀', 'new feature'],
  task: ['💡', 'new task'],
  chore: ['', 'chore changes'],
  ci: ['🤖', 'ci related changes'],
  docs: ['🖊️', 'docs changes'],
  perf: ['⚡', 'performance improvements'],
  style: ['💅', 'markup, formatting'],
  refactor: ['🌳', 'code change that neither fixes a bug or adds a feature'],
  tests: ['🧪', 'add tests'],
  tools: ['⚙️', 'configs, setups, build'],
  temp: ['🚧', 'temporary changes'],
  release: ['📦', 'release'],
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

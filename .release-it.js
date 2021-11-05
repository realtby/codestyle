module.exports = {
  npm: {
    publish: true,
    publishPath: 'dist',
  },
  'only-version': true,
  plugins: {
    '@release-it/bumper': {
      out: ['dist/package.json'],
    },
  },
  git: {
    changelog: 'auto-changelog --stdout --commit-limit false -u > /dev/null',
    commitMessage: 'release(*): ${version}',
  },
  hooks: {
    'before:init': ['npm run lint', 'make dist'],
    'after:bump': 'auto-changelog -p',
    'after:release': 'echo "successfully released ${name} v${version} to ${repo.repository}"',
  },
};

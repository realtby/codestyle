module.exports = {
  npm: false,
  'only-version': true,
  plugins: {
    '@release-it/bumper': {
      out: ['package.json', 'package-lock.json'],
    },
  },
  git: {
    changelog: 'auto-changelog --stdout --commit-limit false -u > /dev/null',
    commitMessage: 'release(*): ${version}',
  },
  hooks: {
    'after:bump': 'auto-changelog -p',
    'after:release': 'echo "successfully released ${name} v${version} to ${repo.repository}"',
  },
};

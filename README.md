# [@realtby/codestyle](https://www.npmjs.com/package/@realtby/codestyle)

realt.by frontend codestyle tools shared configs

[![npm](https://img.shields.io/npm/v/@realtby/codestyle)](https://www.npmjs.com/package/@realtby/codestyle)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## Install

```bash
npm i -D @realtby/codestyle
```

## Development

```bash
make release # to push new version & generate changelog
make prerelease # only push new version to npm, for testing
```

## [EditorConfig](https://editorconfig.org)

Create configuration file `.editorconfig` at the root of the project. Insert the following content:

```editorconfig
root = true

[*]
charset = utf-8
end_of_line = lf
indent_size = 2
indent_style = space
insert_final_newline = true
max_line_length = 100
trim_trailing_whitespace = true

[Makefile]
indent_style = tab
```

### ide

If you use Visual Studio Code, install [EditorConfig plugin](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig).

---

## [Prettier](https://prettier.io)

### config

1. Create configuration file `.prettierrc.js` at the root of the project. Insert the following content:

```js
const config = require('@realtby/codestyle/prettier');
module.exports = config;
```

2. Also create file `.prettierignore`, add some ignore patterns:

```gitignore
# ide
.idea/
.vscode/

# npm
node_modules/
package.json
package-lock.json
yarn.lock

# misc
coverage
tsconfig.json

# changelog
*.hbs
CHANGELOG.md
```

### npm

3. Add following lines to yout `package.json`:

```json
{
  "scripts": {
    "format": "prettier --write ."
  }
}
```

4. And then use as `npm run format`

### ide

#### JetBrains IDE

Install [extension](https://plugins.jetbrains.com/plugin/10456-prettier) (It is already bundled to WebStorm).
You can read more information in [Prettier site](https://prettier.io/docs/en/webstorm.html).

#### Visual Studio Code

Install [extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).
Detailed documentation can be found at the extension page.

---

## [ESLint](https://eslint.org)

1. Create configuration file `.eslintrc.js` at the root of the project. Insert the following content:

```js
module.exports = {
  root: true,
  extends: [
    // choose and enable needed configs
    './node_modules/@realtby/codestyle/eslint/prettier', // prettier first!
    './node_modules/@realtby/codestyle/eslint/base',
    './node_modules/@realtby/codestyle/eslint/typescript',
    './node_modules/@realtby/codestyle/eslint/import',
    // './node_modules/@realtby/codestyle/eslint/react',
    // './node_modules/@realtby/codestyle/eslint/node',
    // './node_modules/@realtby/codestyle/eslint/graphql',
  ],
  overrides: [
    {
      files: ['*.gql'],
      parserOptions: {
        // add schema & operations paths
        // for client
        schema: 'http://api.realt.loc:8000/graphql',
        operations: ['./src/**/*.graphql'],
        // for server
        schema: './src/**/*.gql',
      },
    },
  ],
};
```

2. Add following lines to your `package.json`:

```json
{
  "scripts": {
    "lint": "eslint . --ext .ts,.tsx,.js,.jsx,.json --fix --cache --max-warnings=0"
  }
}
```

3. Also create file `.eslintignore`, add some ignore patterns:

```gitignore
# ide
.idea/
.vscode/

# npm
**/node_modules/*
package.json
```

4. Add `.eslintcache` to `.gitignore`

---

## Stylelint

TBD

---

## [Conventional Commits](https://www.conventionalcommits.org/)

- We use [Conventional Commits](https://www.conventionalcommits.org/) convention.

- You can use [@commitizen/cz-cli](https://github.com/commitizen/cz-cli) helper, and then call `git-cz`, `git cz` or just `git commit`

```bash
npm i -g commitizen git-cz
```

- All commit messages checked with [commitlint](https://github.com/conventional-changelog/commitlint), feel free to add new `scope`'s and `type`'s to [`changelog.config.js`](https://gitlab.realt.by/frontend/lib/-/blob/master/codestyle/changelog.config.js)

1. add `.cz.json`:

```json
{
  "path": "git-cz"
}
```

2. add `changelog.config.js` and insert following:

```js
const getChangelogConfig = require('@realtby/codestyle/changelog.config');

module.exports = getChangelogConfig({
  scopes: [
    /* additional scopes */
    'graphql',
  ],
  types: {
    /* additional types */
    temp: ['🚧', 'temporary changes'],
  },
});
```

3. add `commitlint.config.js` and insert following:

```js
const getCommitlintConfig = require('@realtby/codestyle/commitlint.config');

const czConfig = require('./changelog.config');

module.exports = getCommitlintConfig(czConfig);
```

4. add `.release-it.js`:

```js
module.exports = require('@realtby/codestyle/release-it');
```

5. add `.auto-changelog`:

```json
{
  "output": "CHANGELOG.md",
  "template": "./node_modules/@realtby/codestyle/changelog-template.hbs",
  "unreleased": false,
  "commitLimit": false,
  "sort-commits": "date",
  "issueUrl": "https://jira.realt.by/browse/{id}",
  "issuePattern": "REALT-\\d+",
  ".": "https://regex101.com/r/HEBTvr/5",
  "replaceText": {
    "(^[^\n]+)(?:\n)?(?:[^!]+)?(!\\d+)?": "$1 $2"
  }
}
```

6. Add following lines to your `package.json`:

```json
{
  "scripts": {
    "commit": "git-cz",
    "changelog": "auto-changelog -p && git add CHANGELOG.md",
    "release": "release-it"
  }
}
```

7. `npm i -D auto-changelog` + add patch from [`codestyle/patches`](https://github.com/realtby/codestyle/tree/main/patches)

8. add badges to `README.md`

```md
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
```

---

## [lint-staged](https://opencollective.com/lint-staged) & [husky](https://typicode.github.io/husky)

1. add `lint-staged.config.js` and insert following:

```js
module.exports = {
  '*.@(js|jsx|ts|tsx)': ['prettier --write', 'eslint --fix'],
};
```

2. `npm install husky --save-dev`

3. add `.huskyrc.js` and insert following: (TODO: update to lates husky version)

```js
module.exports = {
  hooks: {
    'pre-commit': 'lint-staged',
    'pre-push': 'npm run type-check && npm test',
    'prepare-commit-msg': 'exec < /dev/tty && git cz --hook || true',
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
  },
};
```

module.exports = {
  extends: [
    'react-app',
    'react-app/jest',
    'plugin:testing-library/react',
    'plugin:jsx-a11y/recommended',
  ],
  plugins: ['testing-library', 'jsx-a11y'],
  settings: {
    react: {
      version: 'detect',
    },
    'testing-library/utils-module': 'tests/utils',
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off',
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
    // ts
    'react/prop-types': 'off',
    'react/jsx-curly-brace-presence': [
      'error',
      {
        children: 'ignore',
        props: 'never',
      },
    ],
    'react-hooks/exhaustive-deps': [
      'error',
      { enableDangerousAutofixThisMayCauseInfiniteLoops: true },
    ],
    // next.js require to use <a></a> tag without ref inside Link. it conflicts with this rule
    // see https://github.com/evcohen/eslint-plugin-jsx-a11y/issues/402
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
  },
};

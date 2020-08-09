module.exports = {
  env: {
    es2020: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier', 'prettier/react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
    parser: 'babel-eslint',
  },
  plugins: ['react', 'prettier', 'react-hooks', 'import-helpers'],
  rules: {
    'import/order': 'off',
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
    'import/prefer-default-export': 'off',
    'jsx-quotes': ['error', 'prefer-single'],
    'react/jsx-props-no-spreading': 'off',
    'no-console': ['error'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'class-methods-use-this': 'off',
    'react/forbid-prop-types': ['off', { forbid: ['any', 'array', 'object'] }],
    'react/prop-types': ['error', { ignore: ['navigation', 'route'] }],
    'no-underscore-dangle': 'off',
    'no-plusplus': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react/sort-prop-types': [
      2,
      {
        callbacksLast: false,
        ignoreCase: true,
        requiredFirst: true,
        sortShapeProp: true,
        noSortAlphabetically: false,
      },
    ],
    'react/jsx-sort-default-props': [
      1,
      {
        ignoreCase: true,
      },
    ],
    'react/jsx-sort-props': [
      2,
      {
        callbacksLast: true,
        shorthandFirst: true,
        shorthandLast: false,
        ignoreCase: true,
        noSortAlphabetically: false,
      },
    ],
    'import-helpers/order-imports': [
      'error',
      {
        newlinesBetween: 'always',
        groups: [
          '/^react/',
          'module',
          '/^@/',
          '/^~/',
          ['parent', 'sibling', 'index'],
        ],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
    'import/no-extraneous-dependencies': 'offurn ',
  },
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': {},
    },
  },
}

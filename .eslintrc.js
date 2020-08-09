module.exports = {
  env: {
    es2020: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier', 'prettier/react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'react-hooks'],
  rules: {
    'prettier/prettier': 'error',
    'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
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
    'import/no-unresolved': ['error', { ignore: '@expo/' }],
  },
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': {},
    },
  },
}

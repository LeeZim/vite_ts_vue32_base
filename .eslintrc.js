module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  plugins: ['prettier', 'vue', '@typescript-eslint'],
  extends: [
    'plugin:vue/vue3-strongly-recommended',
    'airbnb-base',
    'plugin:prettier/recommended'
  ],
  rules: {
    'prettier/prettier': 'error',
    'import/no-extraneous-dependencies': 'off',
    'no-console': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ],
    'no-unused-vars': 'off',
    'global-require': 'off'
  },
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  settings: {
    'import/resolver': {
      typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
      alias: {
        map: [['@/*', './src/*']]
      }
    }
  }
}

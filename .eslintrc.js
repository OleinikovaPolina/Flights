module.exports = {
  root: true,

  parserOptions: {
    ecmaVersion: 2021,
  },

  env: {
    node: true,
    browser: true,
    'vue/setup-compiler-macros': true
  },

  extends: [
    'plugin:vue/vue3-recommended',
    'prettier',
  ],

  plugins: [
    'vue',
  ],

  globals: {
    ga: 'readonly',
    cordova: 'readonly',
    __statics: 'readonly',
    __QUASAR_SSR__: 'readonly',
    __QUASAR_SSR_SERVER__: 'readonly',
    __QUASAR_SSR_CLIENT__: 'readonly',
    __QUASAR_SSR_PWA__: 'readonly',
    process: 'readonly',
    Capacitor: 'readonly',
    chrome: 'readonly'
  },

  rules: {
    'prefer-promise-reject-errors': 'off',
    'semi': [2, 'never'],
    'quotes': [2, 'single', { avoidEscape: true }],
    "object-curly-spacing": ["error", "always"],
    "vue/no-irregular-whitespace": ["error", {
      "skipStrings": true,
      "skipComments": false,
      "skipRegExps": false,
      "skipTemplates": false,
      "skipHTMLAttributeValues": false,
      "skipHTMLTextContents": false
    }],
    "vue/match-component-file-name": ["error", {
      "extensions": ["vue"],
      "shouldMatchCase": false
    }],
    "vue/component-name-in-template-casing": ["error", "kebab-case", {
      "registeredComponentsOnly": true,
    }],
    'comma-dangle': ['error', {
      arrays: 'never',
      objects: 'never',
      imports: 'never',
      exports: 'never',
      functions: 'never'
    }],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'arrow-parens': ['error', 'as-needed'],
    'no-plusplus': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-expressions': 'error',
    'no-param-reassign': 'off',
    'prefer-destructuring': ["error", {
          "array": true,
          "object": true
        }, {
          "enforceForRenamedProperties": false
        }
      ],
    'no-bitwise': ['error', { allow: ['~'] }],
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }]
  }
}

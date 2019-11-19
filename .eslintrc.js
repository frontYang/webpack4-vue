module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'node': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:vue/essential'
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'plugins': [
    'vue'
  ],
  'rules': {
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'windows'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'never'
    ],
    'arrow-spacing': [
      2,
      {
        before: true,
        after: true
      }
    ],
    'no-cond-assign': 2,
    'no-control-regex': 0,
    'no-dupe-args': 2,
    'no-dupe-keys':2,
    'no-duplicate-case': 2,
    'no-empty': 2,
    'no-empty-character-class': 2,
    'no-ex-assign': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-parens': [2, 'functions'],
    'no-func-assign': 2,
    'no-inner-declarations': [2, 'functions'],
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': 2,
    'no-obj-calls': 2,
    'no-regex-spaces': 2,
    'no-sparse-arrays': 2,
    'no-unexpected-multiline': 2,
    'no-unreachable': 2,
    'no-unsafe-finally': 2,
    'use-isnan': 2,
    'valid-typeof': 2,
    'no-empty-pattern': 2,
    'no-fallthrough': 2,
    'no-octal': 2,
    'no-redeclare': 2,
    'no-self-assign': 2,
    'no-useless-escape': 0,
    'no-with': 2,
    'no-delete-var': 2,
    'no-shadow-restricted-names': 2,
    'no-undef': 2,
    'no-unused-vars': [2, {
      'vars': 'all',
      'args': 'none'
    }],
    'no-mixed-spaces-and-tabs': 2,
    'constructor-super': 2,
    'no-class-assign': 2,
    'no-const-assign': 2,
    'no-dupe-class-members': 2,
    'no-new-symbol': 2,
    'no-this-before-super': 2,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
  }
}
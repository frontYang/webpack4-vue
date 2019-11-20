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

  // DOC: https://cn.eslint.org/docs/rules/
  'rules': {    
    'indent': [2, 2,
      {
        'SwitchCase': 1
      }
    ],
    'quotes': [2,
      'single'
    ],
    'semi': [2,
      'never'
    ],
    'arrow-spacing': [2,
      {
        before: true,
        after: true
      }
    ],
    'jsx-quotes': [2, 'prefer-single'],
    'no-console': 0,
    'no-control-regex': 0,
    'accessor-pairs': 2,
    'no-extra-parens': [2, 'functions'],
    'no-inner-declarations': [2, 'functions'],
    'no-useless-escape': 0,
    'array-callback-return': 1,
    'block-scoped-var': 1,
    'class-methods-use-this': 1,
    'complexity': [1, 10],
    'curly': 2,
    'default-case': 2,
    'eqeqeq': ["error", "always", {"null": "ignore"}],
    'no-unused-vars': [2, {
      'vars': 'all',
      'args': 'none'
    }],
    'no-caller': 2,
    'no-extend-native': 2,
    'no-eval': 2,
    'no-extra-bind': 2,
    'no-floating-decimal': 2,
    'no-implied-eval': 2,
    'no-iterator': 2,
    'no-labels': [2, {
      'allowLoop': false,
      'allowSwitch': false
    }],
    'no-lone-blocks': 2,
    'no-multi-spaces': 2,
    'no-multi-str': 2,
    'no-new-func': 2,
    'no-new-wrappers': 2,
    'no-octal-escape': 2,
    'no-proto': 2,
    'no-return-assign': [2, 'except-parens'],
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-throw-literal': 2,
    'no-unmodified-loop-condition': 2,
    'no-useless-call': 2,
    'wrap-iife': [2, 'any'],
    'yoda': [2, 'never'],
    'no-label-var': 2,
    'no-undef-init': 2,
    'no-undefined': 2,
    'handle-callback-err': [2, '^(err|error)$'],
    'no-new-require': 2,
    'no-path-concat': 2,
    'array-bracket-spacing': [2, 'never'],
    'block-spacing': [2, 'always'],
    'brace-style': [2, '1tbs', {
      'allowSingleLine': true
    }],
    'camelcase': [1, {
      'properties': 'always'
    }],
    'comma-dangle': [2, 'never'],
    'comma-spacing': [2, {
      'before': false,
      'after': true
    }],
    'comma-style': [2, 'last'],
    'eol-last': 2,
    'key-spacing': [2, {
      'beforeColon': false,
      'afterColon': true
    }],
    'keyword-spacing': [2, {
      'before': true,
      'after': true
    }],
    'max-params': [ 1, 3 ],
    'max-nested-callbacks': [1, 3],
    'new-cap': [2, {
      'newIsCap': true,
      'capIsNew': false
    }],
    'new-parens': 2,
    'no-array-constructor': 2,
    'no-multi-assign': 1,
    'no-multiple-empty-lines': [2, {
      'max': 1
    }],
    'no-new-object': 2,
    'no-trailing-spaces': 2,
    'no-unneeded-ternary': [2, {
      'defaultAssignment': false
    }],
    'no-whitespace-before-property': 2,
    'object-curly-spacing': [2, 'always', {
      objectsInObjects: false
    }],
    'one-var': [2, {
      'initialized': 'never'
    }],
    'operator-linebreak': [2, 'after', {
      'overrides': {
        '?': 'before',
        ':': 'before'
      }
    }],
    'padded-blocks': [2, 'never'],
    'semi': [2, 'never'],
    'semi-spacing': [2, {
      'before': false,
      'after': true
    }],
    'space-before-blocks': [2, 'always'],
    'space-before-function-paren': [2, 'never'],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': 2,
    'space-unary-ops': [2, {
      'words': true,
      'nonwords': false
    }],
    'spaced-comment': [2, 'always', {
      'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',']
    }],
    'arrow-spacing': [2, {
      'before': true,
      'after': true
    }],
    'generator-star-spacing': [2, {
      'before': true,
      'after': true
    }],
    'no-duplicate-imports': [
      2,
      {
        'includeExports': false
      }
    ],
    'no-useless-computed-key': 2,
    'no-useless-constructor': 2,
    'prefer-const': 2,
    'template-curly-spacing': [2, 'never'],
    'yield-star-spacing': [2, 'both'],
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
  }
}
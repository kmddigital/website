module.exports = {
  globals: {
    __PATH_PREFIX__: true,
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'env': {
    'browser': true,
    'es6': true,
    'node': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'plugins': [
    'react'
  ],
  'rules': {
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
    'react/no-unescaped-entities': [
      'off'
    ]
  },
  'settings': {
    'react': {
      'version': 'detect',
    }
  }
};
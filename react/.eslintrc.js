/* eslint-disable */
module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      impliedStrict: true
    }
  },
  settings: {
    'import/resolver': 'webpack'
  },
  'extends': [
		'@commercial-tribe/eslint-config/browser',
    'plugin:react/recommended',
    'plugin:import/react',
    'plugin:import/recommended'
  ],
  plugins: [
    'react',
    'import'
  ],
  rules: {
    'import/export': 'error',
    'import/first': 'error',
    'import/no-duplicates': 'error',
    'import/no-webpack-loader-syntax': 'error',
    'import/order': [
      'error',
      {
        'newlines-between': 'never',
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index'
        ]
      }
    ],
    'import/newline-after-import': 2,
    'import/namespace': [
      'error',
      {
        allowComputed: true
      }
    ]
  }
};

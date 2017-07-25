/* eslint-disable */
module.exports = {
	parser: 'babel-eslint',
  'extends': [
    '@commercial-tribe/eslint-config'
  ],
  env: {
    browser: true
  },
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  }
};

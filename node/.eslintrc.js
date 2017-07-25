/* eslint-disable */
module.exports = {
	env: {
		node: true
	},
	'extends': [
		'@commercial-tribe/eslint-config',
		'plugin:node/recommended'
	],
	plugins: [
		'node'
	],
	rules: {
		'node/no-unpublished-require': 0
	}
};

/* eslint-disable */
module.exports = {
	env: {
		node: true
	},
	'extends': [
		'@commercial-tribe/eslint-config',
		'plugin:node/recommended',
		'plugin:security/recommended'
	],
	plugins: [
		'node',
		'security'
	],
	rules: {
		'node/no-unpublished-require': 0
	}
};

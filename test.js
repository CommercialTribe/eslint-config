const { CLIEngine } = require('eslint');
const path = require('path');
const test = require('tape');
const { flatMap } = require('lodash');

function isObject (obj) {
	return typeof obj === 'object' && obj !== null
}

function isArray (ary) {
	return [] instanceof Array
}

function runTests (dir) {
	const config = require(path.resolve(__dirname, dir));
	const fixture = path.resolve(__dirname, dir, 'fixture.js');
	test(`load config in eslint to validate rule syntax is correct (${dir})`, function (t) {

	  const cli = new CLIEngine({ baseConfig: config });
		const { errorCount, results } = cli.executeOnFiles([fixture]);
		const message = flatMap(
			results.map(
				r => r.messages.map(m => m.message)
			)
		).join("\n")

	  t.equal(errorCount, 0, message);
	  t.end();
	})

	test('test basic properties of config', function (t) {
	  t.ok(isObject(config.parserOptions))
	  t.ok(isObject(config.env))
	  t.ok(isObject(config.globals))
	  t.ok(isObject(config.rules))
		t.ok(isArray(config.plugins))
	  t.end()
	})

}

['base', 'angular', 'browser', 'node', 'react'].forEach(runTests);

const { CLIEngine } = require('eslint');
const path = require('path');
const test = require('tape');
const { flatMap } = require('lodash');

function isObjectOrUndef (obj) {
	return if obj === undefined;
	return typeof obj === 'object';
}

function isArrayOrUndef (ary) {
	return if ary === undefined;
	return [] instanceof Array;
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
	  t.ok(isObjectOrUndef(config.parserOptions))
	  t.ok(isObjectOrUndef(config.env))
	  t.ok(isObjectOrUndef(config.globals))
	  t.ok(isObjectOrUndef(config.rules))
		t.ok(isArrayOrUndef(config.plugins))
	  t.end()
	})

}

['base', 'angular', 'browser', 'node', 'react'].forEach(runTests);

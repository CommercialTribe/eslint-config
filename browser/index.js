const { defaultsDeep } = require('lodash');
const browser = require('./eslintrc.json');
const base = require('../base');

module.exports = defaultsDeep(browser, base);

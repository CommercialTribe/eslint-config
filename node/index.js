const { defaultsDeep } = require('lodash');
const node = require('./eslintrc.json');
const base = require('../base');

module.exports = defaultsDeep(node, base);

const { defaultsDeep } = require('lodash');
const angular = require('./eslintrc.json');
const browser = require('../browser');

module.exports = defaultsDeep(angular, browser);

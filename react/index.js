const { defaultsDeep } = require('lodash');
const react = require('./eslintrc.json');
const browser = require('../browser');

module.exports = defaultsDeep(react, browser);

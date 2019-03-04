const base = require('../../jest.config.base.js');
const pack = require('./package');
const { name } = require('./package');

module.exports = {
    ...base,
    name,
    displayName: name,
};

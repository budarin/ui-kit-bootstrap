const base = require('./jest.config.base.js');

module.exports = {
    ...base,
    projects: ['<rootDir>/packages/*/jest.config.js'],
    coverageDirectory: '<rootDir>/coverage/',

    // Setup Enzyme
    snapshotSerializers: ['enzyme-to-json/serializer'],
    setupTestFrameworkScriptFile: './setupEnzyme.ts',
};

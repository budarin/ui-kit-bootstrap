module.exports = {
    roots: ['<rootDir>'],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
        '^.+\\.(js|jsx)$': 'babel-jest',
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts|tsx|js|jsx)?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    verbose: true,
    testPathIgnorePatterns: ['/__snapshots__/'],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '../../../config/jest/fileMock.js',
        '\\.(css)$': 'identity-obj-proxy',
    },
    collectCoverage: true,
    collectCoverageFrom: ['**/*.{ts,tsx,js,jsx}', '!**/*.d.ts', '!<rootDir>/lib/'],
    coveragePathIgnorePatterns: ['(tests/.*.mock).(|ts|tsx|js|jsx)$'],
    globals: {
        'process.env.__DEV__': true,
        'process.env.__PROD__': false,
        'process.env.__BROWSER__': false,
        'process.env.__SERVER__': false,
        'ts-jest': {
            tsConfig: {
                module: 'commonjs',
                target: 'es5',
            },
        },
    },
    testEnvironmentOptions: {
        // Need this to have jsdom loading images.
        resources: 'usable',
    },
};

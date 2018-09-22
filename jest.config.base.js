module.exports = {
    roots: ['<rootDir>'],
    transform: {
        '^.+\\.ts$': 'ts-jest',
        '^.+\\.tsx$': 'ts-jest',
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts?|tsx?)?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    coveragePathIgnorePatterns: ['(tests/.*.mock).(|ts?|tsx?)$'],
    verbose: true,
    testPathIgnorePatterns: ['/__snapshots__/'],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '../../../config/jest/fileMock.js',
        '\\.(css)$': 'identity-obj-proxy',
    },
    collectCoverage: true,
    collectCoverageFrom: ['**/*.{ts,tsx}', '!**/*.d.ts', '!<rootDir>/lib/'],
    globals: {
        'process.env.__DEV__': true,
        'process.env.__PROD__': false,
        'process.env.__BROWSER__': false,
        'process.env.__SERVER__': false,
    },
};

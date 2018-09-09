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
    collectCoverageFrom: ['src/**/*.{ts,tsx}', '!<rootDir>/node_modules/', '!<rootDir>/lib/'],
    globals: {
        __DEV__: true,
        __PROD__: false,
        __BROWSER__: false,
        __SERVER__: false,
    },
};

module.exports = {
    roots: ['<rootDir>'],
    transform: {
        '^.+\\.ts$': 'ts-jest',
        '^.+\\.tsx$': 'ts-jest',
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts?|tsx?)?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    collectCoverage: true,
    coveragePathIgnorePatterns: ['(tests/.*.mock).(jsx?||ts?|tsx?)$'],
    verbose: true,
    testPathIgnorePatterns: ['/__snapshots__/'],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '../../../config/jest/fileMock.js',
        '\\.(css)$': '../../../config/jest/styleMock.js',
    },
    collectCoverageFrom: ['src/**/*.{jts,tsx}', '!<rootDir>/node_modules/', '!<rootDir>/lib/'],
};

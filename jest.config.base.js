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
    testPathIgnorePatterns: ['<rootDir>/lib/'],
};

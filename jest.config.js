module.exports = {
  moduleDirectories: ['node_modules', 'src'],
  roots: ['<rootDir>'],
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    ".+\\.(css|scss|png|jpg|svg)$": "jest-transform-stub"
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts|tsx)?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'node'],
  collectCoverage: true,
  clearMocks: true,
  coverageDirectory: "coverage",
}

// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {

  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: ['src/utils/**/*.{js,vue}', '!src/utils/auth.js', '!src/utils/request.js', 'src/components/**/*.{js,vue}'],

  // The directory where Jest should output its coverage files
  coverageDirectory: '<rootDir>/tests/unit/coverage',

  // A list of reporter names that Jest uses when writing coverage reports
  coverageReporters: [
    'lcov'
  ],

  // An array of file extensions your modules use
  moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],

  // A map from regular expressions to module names that allow to stub out resources with a single module
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },

  // A list of paths to snapshot serializer modules Jest should use for snapshot testing
  snapshotSerializers: ['jest-serializer-vue'],

  // The test environment that will be used for testing
  testEnvironment: 'node',

  // The glob patterns Jest uses to detect test files
  testMatch: [
    '**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'
  ],

  // This option sets the URL for the jsdom environment. It is reflected in properties such as location.href
  testURL: 'http://localhost',

  // A map from regular expressions to paths to transformers
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '^.+\\.jsx?$': 'babel-jest'
  }
}

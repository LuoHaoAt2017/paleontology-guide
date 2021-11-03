module.exports = {
  preset: 'jest-puppeteer',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  rootDir: '.',
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],
  transform: {
    "\\.js$": 'babel-jest'
  },
  transformIgnorePatterns: [
    "/node_modules/",
  ],
  watchman: false,
  globalSetup: "jest-environment-puppeteer/setup",
  globalTeardown: "jest-environment-puppeteer/teardown",
  testEnvironment: "jest-environment-puppeteer",
  setupFilesAfterEnv: ["expect-puppeteer"]
};

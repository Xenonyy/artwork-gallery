const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/internals/jest/setup.js'],
  roots: ['<rootDir>/src/'],
  modulePaths: ['<rootDir>/src/'],
  collectCoverageFrom: ['**/*.{js,jsx,ts,tsx}', '!**/*.d.ts', '!**/node_modules/**'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/src/test/',
    '<rootDir>/src/enums/',
    '<rootDir>/src/defaultSeo.ts',
    '<rootDir>/src/webPaths.ts',
  ],
  testPathIgnorePatterns: ['<rootDir>/build/'],
  reporters: ['default', 'jest-sonar'],
};

module.exports = createJestConfig(customJestConfig);

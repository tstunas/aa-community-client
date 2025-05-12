module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!flat)/',
  ],
  moduleNameMapper: {
    '@env/(.*)': '<rootDir>/src/environments/$1',
    '@core/(.*)': '<rootDir>/src/app/core/$1',
    '@shared/(.*)': '<rootDir>/src/app/shared/$1',
    '@modules/(.*)': '<rootDir>/src/app/modules/$1',
    '@features/(.*)': '<rootDir>/src/app/features/$1',
    '@store/(.*)': '<rootDir>/src/app/store/$1',
    '@app/(.*)': '<rootDir>/src/app/$1',
  },
};

module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!react-native)/'],
  testPathIgnorePatterns: ['<rootDir>/node_modules'],
  testEnvironment: 'jsdom',
};

// jest.config.mjs
export default {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: {
    "^.+\\.(js|jsx)$": [
      "babel-jest",
      {
        presets: ['@babel/preset-env', '@babel/preset-react'],
        plugins: ['@babel/plugin-syntax-jsx'],
      },
    ],
  },
  extensionsToTreatAsEsm: ['.jsx'],
  transformIgnorePatterns: ["/node_modules/(?!react-router-dom)"],
  moduleResolution: 'node',
};
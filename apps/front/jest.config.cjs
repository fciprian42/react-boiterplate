module.exports = {
  roots: [".", "src"],
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}", "!src/**/*.d.ts", "!src/mocks/**"],
  coveragePathIgnorePatterns: [],
  testEnvironment: "jsdom",
  modulePaths: ["./src"],
  transform: {
    "^.+\\.(ts|js|tsx|jsx)$": "@swc/jest",
    "^.+\\.css$": "<rootDir>/jest/cssTransform.cjs",
    "^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)": "<rootDir>/jest/fileTransform.cjs"
  },
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$",
    "^.+\\.module\\.(css|sass|scss)$"
  ],
  moduleNameMapper: {
    "^react-native$": "react-native-web",
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
    "^@components(.*)$": "<rootDir>/src/components/$1",
    "^@pages(.*)$": "<rootDir>/src/pages/$1",
    "^@services(.*)$": "<rootDir>/src/services/$1",
    "^@types(.*)$": "<rootDir>/src/types/$1",
    "^@config(.*)$": "<rootDir>/src/config/$1",
    "^@constants(.*)$": "<rootDir>/src/constants/$1",
    "^@routes(.*)$": "<rootDir>/src/routes/$1",
    "^@helpers(.*)$": "<rootDir>/src/helpers/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/jest/setupTests.cjs"],
  moduleFileExtensions: [
    // Place tsx and ts to beginning as suggestion from Jest team
    // https://jestjs.io/docs/configuration#modulefileextensions-arraystring
    "tsx",
    "ts",
    "web.js",
    "js",
    "web.ts",
    "web.tsx",
    "json",
    "web.jsx",
    "jsx",
    "node"
  ],
  watchPlugins: ["jest-watch-typeahead/filename", "jest-watch-typeahead/testname"],
  resetMocks: true
};

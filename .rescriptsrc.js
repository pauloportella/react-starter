const rewireStyledComponents = require("react-app-rewire-styled-components")
const rewireStyledComponentsTypescriptPlugin = require("react-app-rewire-styled-components-typescript")

module.exports = {
  webpack: (config, env) => {
    config = rewireStyledComponents(config, env)
    config = rewireStyledComponentsTypescriptPlugin(config, env)

    return config
  },
  jest: config => {
    const prevTestExtensions = config.moduleFileExtensions
    const newConfig = {
      ...config,
      setupFiles: ["<rootDir>/test/jest-config/setup.js"],
      setupFilesAfterEnv: ["<rootDir>/test/jest-config/setupAfterEnv.js"],
      testURL: "http://localhost",
      collectCoverageFrom: ["src/**/*.{ts,tsx,js,jsx,mjs}"],
      testEnvironment: "node",
      transformIgnorePatterns: [
        "<rootDir>/node_modules/(?!(lodash-es|react-apollo)/).+\\.(mjs|js|jsx|ts|tsx)$"
      ],
      transform: {
        ...config.transform,
        "^.+\\.(graphql|gql)$": "jest-transform-graphql"
      },
      moduleFileExtensions: [...prevTestExtensions],
      moduleNameMapper: {
        "^@[/](.+)": "<rootDir>/src/$1",
        "^components[/](.+)": "<rootDir>/src/components/$1"
      }
    }
    return newConfig
  }
}

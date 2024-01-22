import type { Config } from "@jest/types"

const config: Config.InitialOptions = {
  verbose: true,
  collectCoverage: true,
  coverageProvider: "babel",
  coverageReporters: ["text", "cobertura", "json-summary"],
  coverageDirectory: "test/.coverage",
  collectCoverageFrom: ["**/*.ts", "**/*.tsx", "!./test/**", "!**/*.test.ts", "!**/*.test.tsx", "!**/node_modules/**"],
  modulePathIgnorePatterns: ["node_modules", "jest-test-results.json", ".jest-test-results.json"],
  roots: ["<rootDir>/test/"],
  transform: {
    "^.+.tsx*$": "ts-jest",
  },
  reporters: ["default", "jest-junit"],
}

export default config

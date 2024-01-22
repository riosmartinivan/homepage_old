/* eslint-disable no-undef */
let common = [
  "test/integration/features/*.feature", // Specify our feature files
  "--require-module ts-node/register", // Load TypeScript module
  "--require test/integration/step_definitions/*.steps.ts", // Load step definitions
  "--format progress-bar", // Load custom formatter
  "--format @cucumber/pretty-formatter", // Load custom formatter
].join(" ")

module.exports = {
  default: common,
}

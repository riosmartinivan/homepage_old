const path = require("path")

const config = {
  stories: ["../test/**/*.stories.mdx", "../test/**/*.stories.@(js|jsx|ts|tsx)"],
  staticDirs: ["../public"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {
      nextConfigPath: path.resolve(__dirname, '../next.config.js'),
    },
  },
  reactOptions: {
    strictMode: true,
  },
  core: {
    builder: {
      name: 'webpack5',
      options: { lazyCompilation: true }
    },
  },
  features: {
    babelModeV7: true,
  },
  babel: async options => {
    options.presets.push(
      [
        "@babel/preset-react",
        {
          "runtime": "automatic",
          "importSource": "@emotion/react"
        }
      ],
      [
        "@babel/preset-env",
        {
          "targets": {
            "chrome": 100
          }
        }
      ],
    )
    return options
  },
};
export default config;
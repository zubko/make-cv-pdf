const { modifyWebpackConfig } = require("../config/modifyWebpackConfig");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-essentials", "@storybook/preset-create-react-app"],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
  webpackFinal: modifyWebpackConfig,
};

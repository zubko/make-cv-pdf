const { modifyWebpackConfig } = require("./config/modifyWebpackConfig");

module.exports = {
  webpack: {
    configure: modifyWebpackConfig,
  },
};

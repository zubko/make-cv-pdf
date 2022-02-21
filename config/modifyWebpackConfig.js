const webpack = require("webpack");

// Webpack v5 doesn't include polyfills of Node.js libs which are needed for react-pdf
// https://react-pdf.org/advanced#webpack-config
const modifyWebpackConfig = (config) => {
  // eslint-disable-next-line no-param-reassign
  config.resolve.fallback = {
    ...config.resolve.fallback,
    module: "empty",
    dgram: "empty",
    dns: "mock",
    fs: "empty",
    http2: "empty",
    net: "empty",
    tls: "empty",
    child_process: "empty",
    process: require.resolve("process/browser"),
    zlib: require.resolve("browserify-zlib"),
    stream: require.resolve("stream-browserify"),
    util: require.resolve("util"),
    buffer: require.resolve("buffer"),
    asset: require.resolve("assert"),
    // this module is not needed on Web, but it's mentioned in getResourcePath for Node
    // and Webpack will try to resolve it and then another plugin will falsely consider it
    // "relative import outside of src/ folder". So it's easier just to turn it off.
    path: false,
  };
  config.plugins.push(
    new webpack.ProvidePlugin({
      process: "process/browser",
      Buffer: ["buffer", "Buffer"],
    })
  );
  return config;
};

module.exports = {
  modifyWebpackConfig,
};

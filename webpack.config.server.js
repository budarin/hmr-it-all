const webpack = require("webpack");
const path = require("path");
const nodeExternals = require("webpack-node-externals");
const StartServerPlugin = require("start-server-webpack-plugin");

module.exports = {
  mode: "development",
  entry: ["webpack/hot/poll?1000", "./src/server/index"],
  watch: true,
  target: "node",
  externals: [nodeExternals({ allowlist: ["webpack/hot/poll?1000"] })],
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: "babel-loader",
        exclude: /node_modules/,
        include: [
          path.join(__dirname, "src/server"),
          path.join(__dirname, "src/common"),
        ],
      },
    ],
  },
  plugins: [
    new StartServerPlugin("server.js"),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      __DEV__: true,
      __SERVER__: true,
      __CLIENT__: false,
    }),
  ],
  output: { path: path.join(__dirname, "./dist"), filename: "server.js" },
};

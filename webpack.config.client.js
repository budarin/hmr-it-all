const webpack = require("webpack");
const path = require("path");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: ["react-hot-loader/patch", "./src/client/index"],
  target: "web",
  resolve: {
    extensions: [".js", ".json"],
    modules: ["node_modules", "src"],
    alias: { "react-dom": "@hot-loader/react-dom" },
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: "babel-loader",
        exclude: /node_modules/,
        include: [
          path.join(__dirname, "src/client"),
          path.join(__dirname, "src/common"),
        ],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.env": { BUILD_TARGET: JSON.stringify("client") },
    }),
  ],
  devServer: {
    // host: "localhost",
    publicPath: "/",
    port: 3000,
    historyApiFallback: true,
    hot: true,
    proxy: {
      "*": "http://localhost:5000",
    },
    writeToDisk: true,
  },
  output: {
    path: path.join(__dirname, "./dist/client"),
    publicPath: "/",
    filename: "client.js",
  },
};

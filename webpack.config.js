const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: "./target/public/cljs-out/dev/main.js",
    base: "./target/public/cljs-out/dev/cljs_base.js",
    big: "./target/public/cljs-out/dev/big.js",
  },
  resolve: {
    alias: {
      libhunam: path.resolve(__dirname, "src/ts/libhunam.tsx"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg|ico)$/i,
        use: {
          loader: "url-loader",
          options: {
            limit: 40000,
            name: "[name].[ext]",
            esModule: false,
          },
        },
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  output: {
    filename: "[name].js",
  },
  devServer: {
    static: ["./target/public", "./resources/public"],
    liveReload: false,
    hot: true,
    compress: true,
    port: 9001,
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: "./target/public/cljs-out/dev", to: "." }],
    }),
  ],
  devtool: "inline-source-map",
  experiments: {
    asyncWebAssembly: true,
    // futureDefaults: true,
  },
};

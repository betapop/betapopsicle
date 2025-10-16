const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  // This enables production mode, which minifies the JS and CSS files for fast loading times:
  mode: "production",

  // Define entry file (which loads every other file):
  entry: "./src/index.js",

  // Define output file/directory:
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "public/assets"),
    assetModuleFilename: "[path][name][ext]", // Preserve original file paths and file names for resources (images, fonts, etc.)
  },

  module: {
    rules: [
      // Rule for .css files:
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader, // extracts css into a file
          "css-loader", // necessary to load css
        ],
      },
      // Rule for .scss files:
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader, // extracts css into a file
          "css-loader", // necessary to load css
          "sass-loader", // turns scss into css
        ],
      },
    ],
  },

  plugins: [
    // define name for generated css files:
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],

  // Generate source maps for easier debugging:
  devtool: "source-map",
};
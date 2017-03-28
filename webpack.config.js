module.exports = {
  context: __dirname,
  entry: "./scripts/app.js",
  output: {
    path: __dirname,
    filename: "./public/bundle.js"
  },
  devtool: "source-map",
  watch: true,
}


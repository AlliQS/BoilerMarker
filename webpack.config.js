module.exports = {
  entry: "./client/index.js",
  mode: "development",
  output: {
    path: __dirname,
    filename: "bundle.js",
  },
  devtool: "source-maps",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        options: {
            presets: ['react', 'es2015']
          },
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
    ],
  },
};

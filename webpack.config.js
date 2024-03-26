const path = require('path');

module.exports = {
  entry: './src/index.tsx', // Your entry point, adjust as necessary
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js', // Output file
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  mode: 'development', // Use 'production' for production builds
};

const path = require('path');

module.exports = {
  entry: './src/public/scripts/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  node: {
    tls: "empty",
    net: "empty",
    fs: "empty",
    child_process: "empty"
  },
  resolve: {
    modules: ['node_modules'],
    extensions: [ '.tsx', '.ts', '.js', '.json' ]
  },
  output: {
    filename: 'egc.js',
    path: path.resolve(__dirname, 'dist')
  }
};
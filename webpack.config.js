const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './test.js',
  resolve: {
    extensions: ['.js']
  },
  output: {
    path: __dirname,
    filename: 'test.bundle.js'
  },
  plugins: [
    new webpack.NormalModuleReplacementPlugin(
      new RegExp(`^${path.resolve('./string.js')}$`),
      function(result) {
        result.request = path.resolve('./string-replacement.js');
      }
    )
  ]
};
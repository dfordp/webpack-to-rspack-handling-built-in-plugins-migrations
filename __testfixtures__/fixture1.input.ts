//replace the the include package from webpack to rspack one
// and the webpack object in the plugins array to rspack object

const webpack = require('webpack');

module.exports = {
  //...
  plugins: [
    new webpack.DefinePlugin(),
    // ...
  ],
};
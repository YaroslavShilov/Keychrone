const path = require('path');
const Dotenv = require('dotenv-webpack');
module.exports = {
  mode: 'development',
  target: 'web',
  devtool: 'eval-source-map',
  devServer: {
    static: path.resolve(__dirname, '../dist'),
    port: 3000,
    hot: true,
    // open: true,
    compress: true,
    proxy: {
      '/api': {
        target: 'http://localhost:9000',
        secure: false,
      },
    },
  },
  plugins: [
    new Dotenv({
      path: '.env.development',
    }),
  ],
};

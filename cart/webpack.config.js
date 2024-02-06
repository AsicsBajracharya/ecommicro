const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
    },
    devServer: {
        port: 8082
    },
    plugins: [
        new ModuleFederationPlugin({
          name: 'cart',
          filename: 'remoteEntry.js',
          exposes: {
            './CartShow': './src/bootstrap'
          },
          shared: ['faker']
        }),
        new HtmlWebpackPlugin({
          template: 'public/index.html'
      })],
  };
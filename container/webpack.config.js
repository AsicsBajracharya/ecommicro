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
        port: 8080
    },
    plugins: [
      new ModuleFederationPlugin({
        name: 'container',
        remotes:{
          products: 'products@http://localhost:8081/remoteEntry.js',
          cart: 'cart@http://localhost:8082/remoteEntry.js'
        }
      }),
      new HtmlWebpackPlugin({
        template: 'public/index.html'
    })],
  };
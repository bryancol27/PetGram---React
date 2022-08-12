const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin")
const webpackPwaManifestPlugin = require('webpack-pwa-manifest');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js',
    publicPath: '/',
    clean: true
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@hooks': path.resolve(__dirname, 'src/hooks')
    }
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html', 
      filename: './index.html' 
    }),
    new webpackPwaManifestPlugin({
      start_url: '.',
      name: 'Petgram - tu app de fotos de mascotas',
      short_name: 'Petgram🐶',
      description: 'My petgram progressive web app',
      background_color: '#fff',
      theme_color: '#b1a',
      icons:[
        {
          src: path.resolve('src/assets/icon.png'),
          sizes: [96, 128, 193, 256, 384, 512]
        }
      ] 
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      maximumFileSizeToCacheInBytes: 70000000,
      runtimeCaching:[
        {
          urlPattern: new RegExp('https://(res.cloudinary.com|images.unsplah.com)'),
          handler: 'CacheFirst',
          options: {
            cacheName: 'images'
          }
        },
        {
          urlPattern: new RegExp('https://petgram-project-bryancol27.vercel.app'),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api'
          }
        }
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader'
        }
      }
    ]
  },
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    historyApiFallback: true,
    port: 3006,
    open: true, 
  }
}


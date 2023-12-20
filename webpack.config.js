const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


const mode = process.env.NODE_ENV;
const stylesHandler = mode === 'production' ? MiniCssExtractPlugin.loader : 'style-loader';

const config  = {
    entry: path.join(__dirname, 'src', 'frontend', 'index.tsx'),
    mode: mode,
    devServer: {
      host: 'localhost',
      hot: true,
      port: 8081,
      // fallback to root for other urls
      historyApiFallback: true,
  
      static: {
        // match the output path
        directory: path.resolve(__dirname, 'dist'),
        // match the output 'publicPath'
        publicPath: '/',
      },
  
      headers: { 'Access-Control-Allow-Origin': '*' },
      /**
      * proxy is required in order to make api calls to
      * express server while using hot-reload webpack server
      * routes api fetch requests from localhost:8080/api/* (webpack dev server)
      * to localhost:3000/api/* (where our Express server is running)
      */
      proxy: {
        '/api/**': {
          target: 'http://localhost:3000/',
          secure: false,
        },
        '/assets/**': {
          target: 'http://localhost:3000/',
          secure: false,
        },
      },
  
    },
    module: {
      rules: [
        {
          test: /\.(tsx|ts|js)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            plugins: [mode === 'development' && require('react-refresh/babel')].filter(Boolean)
          } 
        },
        {
          test: /\.css$/i,
          use: [stylesHandler,'css-loader'],
        },
        {
          test: /\.s[ac]ss$/i,
          use: [stylesHandler, 'css-loader', 'sass-loader'],
        },
        {
          test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif|svg)$/i,
          type: 'asset',
        },
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.css', '.scss']
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist '),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'src', 'index.html'),
      }),
      
    ]

};

if (mode === 'development') {
  config.devtool = mode === 'development'? 'inline-source-map' : undefined;
  config.plugins.push(new ReactRefreshWebpackPlugin()); 
} else {
  config.plugins.push(new MiniCssExtractPlugin())
}

module.exports = config;
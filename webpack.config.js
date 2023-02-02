const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',//вхідний файл
  output: {
    path: path.resolve(__dirname, 'build'),//вихідна папка
    filename: 'bundle.js',//вихідний файл у вихідній папці
  },
  module: {//загрузчики
    rules: [//масив правил
      {
        test: /\.scss$/i,//для scss
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,//буде робити окремий css файл у вихідній папці
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],//добавили обробку js -Babel
      },
    ],
  },
  plugins: [//плагіни працюють після загрузчиків
    new HtmlWebpackPlugin({ template: 'src/index.html' }),//ств. по нашому шаблону html і автоматично кидає туди js i css
    new MiniCssExtractPlugin({ filename: 'styles.css' }),//ств файл style.css в папці build
  ],
  devServer: {
    port: 4444,
    open: true,
    stats: 'errors-only',
  },
};

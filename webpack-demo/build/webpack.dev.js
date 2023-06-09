const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.js')

module.exports = merge(baseConfig, {
  mode: 'development',
  output: {
    filename: '[name]/[name][hash].js' // 多页面多配置了一个 '[name]/'
  },
  devServer: {
    static: './dist',
    hot: true
  },
  module: {
    rules: [
      // 加载 css 转换成 js 代码
      // style-loader 生成 style 标签代码加到 head 标签中
      // postcss-loader、autoprefixer：添加 css 兼容属性
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      // 编译 scss 代码
      // 解析 less 可以用 less、less-loader
      {
        test: /\.scss$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader']
      },
      // 资源文件解析
      // file-loader、url-loader：解析资源文件、路径
      {
        test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
        use: 'url-loader'
      }
    ]
  },
  plugins: [
    
  ]
})
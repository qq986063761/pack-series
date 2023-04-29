// 可以利用 SpeedMeasurePlugin 插件分析每个配置的打包时间
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin")
const smp = new SpeedMeasurePlugin()
const config = require('./webpack.pro.js')

module.exports = smp.wrap(config)
const path = require('path')

const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // 入口
  entry: "./src/index.ts",
  mode: "development",
  // 出口
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: "index.js"
  },

  stats: "none",

  module: {
    rules: [
      // ts loader
      {
        test: /\.ts$/,
        use: "ts-loader",
      }
    ]
  },

  // 热更新
  devServer: {
    port: 1988,
    // 代理
    proxy: {

    }
  },

  // 匹配后缀
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.vue'],
  },

  //插件
  plugins: [
    new htmlWebpackPlugin({
      template: "./public/index.html"
    })
  ]
}
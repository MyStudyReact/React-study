// console.log(process.env, '====env')

import path from 'path'
// 运行ts文件
import ts from 'rollup-plugin-typescript2'

// 启动本地项目
import serve from 'rollup-plugin-serve'

// 热更新
import livereload from 'rollup-plugin-livereload'

// 代码压缩
import { terser } from 'rollup-plugin-terser'

// 浏览器注册，浏览器就可以访问process
import replace from 'rollup-plugin-replace'

// 判断如果是开发环境才启动本地项目/热更新
const isDev = () => {
  return process.env.NODE_ENV === 'development'
}

export default {
  // 入口
  input: "./src/index.ts",
  // 出口
  output: {
    file: path.resolve(__dirname, './lib/index.js'),
    format: "umd",
    sourcemap: true,
  },

  plugins: [
    // 运行ts文件
    ts(),

    // 热更新
    isDev && livereload(),

    // 代码压缩
    terser({
      compress: {
        // 删除代码里面的console.log
        drop_console: true,
      }
    }),

    // 浏览器注册
    replace({
      // 名字可以自定义
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),

    // 启动本地项目
    isDev() && serve({
      open: true,
      port: 1988,
      openPage: "/public/index.html",
    })
  ]
}
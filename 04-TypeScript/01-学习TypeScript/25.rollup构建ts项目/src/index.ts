const a: string = '你好'

// node 环境才有process，浏览器是没有的，除非加插件
// console.log(a, process.env.NODE_ENV);

if (process.env.NODE_ENV === 'development') {
  alert('开发')
} else {
  alert('生产')
}

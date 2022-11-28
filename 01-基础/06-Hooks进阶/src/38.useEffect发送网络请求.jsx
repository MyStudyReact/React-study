// 类组件 如何发送网络请求
// 生命周期钩子函数 componentDidMount
// 执行时期  初始化的时候dom渲染完毕时只执行一次

// useEffect
// 1.不加依赖项                  - 初始化 + 重新渲染
// 2.加 []                      - 初始化执行一次 ✔
// 3.加特定的依赖项[count,name]  - 初始化 + 任意一个变化执行

import { useEffect } from 'react'
// import axios from 'axios'

function App () {
  // useEffect是一个同步函数 所以这样写是不对的
  // useEffect(async () => {
  //   const res = await axios.get('http://geek.itheima.net/v1_0/channels')
  //   console.log(res)
  // }, [])

  useEffect(() => {
    async function loadData () {
      // const res = await axios.get('http://geek.itheima.net/v1_0/channels')

      /**
       * fetch 写法 和axios写法
       */
      // const res = await fetch('http://geek.itheima.net/v1_0/channels')
      // console.log(res, '===res')
      await fetch('http://geek.itheima.net/v1_0/channels')
        .then(response => response.json())
        .then(data => console.log(data))
    }

    loadData()
    // }, [count])
  }, [])

  // 可以写多个
  // useEffect(() =>{

  // })

  return (
    <div>
      <h1>333</h1>
    </div>
  )
}

export default App
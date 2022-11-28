// useEffect
import { useState, useEffect } from 'react'

// 在修改数据之后，把count值放到页面的标题中
// 1.导入useEffect函数
// 2.在函数中进行执行，传入一个回调，并且自定义副作用
// 3.当我们通过修改状态更新组件值，副作用也会不断执行

function App () {
  const [count, setCount] = useState(0)
  useEffect(() => {
    //定义副作用
    document.title = count
  })
  return (
    <div >
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  )
}

export default App

// let count = 0
// function getNum (a, b) {
//   // 如果加上此，就不是一个纯函数了
//   count++

//   // 当前只有自己要实现的作用 就为纯函数
//   return a + b
// }
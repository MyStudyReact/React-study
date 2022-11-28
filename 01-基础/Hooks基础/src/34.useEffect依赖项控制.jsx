// useEffect
import { useState, useEffect } from 'react'

// 在修改数据之后，把count值放到页面的标题中
// 1.导入useEffect函数
// 2.在函数中进行执行，传入一个回调，并且自定义副作用
// 3.当我们通过修改状态更新组件值，副作用也会不断执行

/**
 * 依赖项控制副作用的执行时机
 * 初始化 + count/name被修改时都会执行
 * 1.默认状态（无依赖性）
 *   组件初始化的时候执行一次，等到每次数据修改组件更新再次执行
 * 2.添加一个空数组依赖项
 *   组件初始化的时候执行一次，后面就不执行了
 * 3.添加特定依赖项
 *   组件初始化的时候只执行一次，依赖的特定项发生变化会再次单独执行
 * 
 * 注意事项
 * 只要在useEffect回调函数中用到的数据状态就应该出现在依赖项数组声明中
 */

function App () {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('不去')
  // 1.默认状态
  // useEffect(() => {
  //   //定义副作用
  //   document.title = count
  // })

  // 2.添加一个空数组依赖项
  // useEffect(() => {
  //   //定义副作用
  //   console.log('副作用又执行了')
  //   document.title = 1
  // }, [])

  // 3.添加特定依赖项
  useEffect(() => {
    //定义副作用
    console.log('副作用又执行了')
    document.title = count
  }, [count])
  return (
    <div >
      <button onClick={() => setCount(count + 1)}>{count}</button>

      <hr />

      <button onClick={() => setName('坚持自己')}>{name}</button>
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
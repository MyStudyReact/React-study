// useState
// 1.导入useState函数，从react导入
// 2.执行这个函数并且传入初始值 必须再函数组件中
// 3. 函数中解构出来 [数据，修改数据的方法]
// 4.使用数据，修改数据

/**
 * 状态的读取和修改
 * 1. useState 传过来的参数 作为count的初始值
 * 2. [count, setCount] 这里的写法是一个解构赋值，useState的返回值是一个数组
 *    count,setCount 这里的名字可以自定义，保持语义化就行
 *    count,setCount 这里的顺序不可以交换（因为数组是有序的，对象可以交换，但是对象的变量名需要对应）
 * 3. setCount函数 用来修改count 依旧保持着不能修改原值，还是生成一个新值进行替换
 *    setCount(基于原值计算得到的新值)
 * 4. count 和 setCount 是一对，setCount只能用来修改对应的count的值
 */

/**
 * 更新渲染
 * setState都会更新
 * 1. App组件会再次渲染 这个函数会再次执行
 * 2. useState再次执行，得到的新的count的值不是0而是修改之后的1，模板会用新值渲染
 * 
 * 重点一句话：
 * useState初始值只在首次渲染生效，后续只要调用setCount整个app中的代码都会执行，此时的count每次拿到的都是最新值
 */

import { useState } from 'react'
function App () {
  const [count, setCount] = useState(0)
  return (
    <div >
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  )
}

export default App

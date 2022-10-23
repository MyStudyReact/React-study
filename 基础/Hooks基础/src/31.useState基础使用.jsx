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

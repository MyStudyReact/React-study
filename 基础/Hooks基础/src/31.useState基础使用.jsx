// useState
// 1.导入useState函数，从react导入
// 2.执行这个函数并且传入初始值 必须再函数组件中
// 3. 函数中解构出来 [数据，修改数据的方法]
// 4.使用数据，修改数据

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

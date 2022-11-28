import React, { useEffect, useRef } from 'react'
// 获取我们的组件实例 ---> 类组件
// dom对象           --->  标签

class Test extends React.Component {
  // state = {
  //   name: 'test name'
  // }
  getName = () => {
    return 'this is child Test'
  }
  render () {
    return <div>我是类组件</div>
  }
}

function App () {
  const testRef = useRef(null)
  const h1Ref = useRef(null)

  //useEffect 渲染之后才执行
  //和vue的watch 效果比较像 但是执行时机是不同的
  useEffect(() => {
    console.log(testRef.current)
    console.log(h1Ref.current)
  }, [])

  return (
    <div>
      <Test ref={testRef}>333</Test>

      <h1 ref={h1Ref}>this is h1</h1>
    </div>
  )
}

export default App
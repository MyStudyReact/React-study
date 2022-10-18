
import React from "react"
// 类组件的创建和渲染

//创建
class HelloComponent extends React.Component {
  render () {
    return <div>this is class Component</div>
  }
}


function App () {
  return (
    <div>
      {/* 渲染类组件 */}
      <HelloComponent></HelloComponent>
    </div>
  )
}

export default App


import React from "react"
// 函数组件的创建和渲染
//创建
const clickFun = () => {
  console.log('函数组件中的事件被触发了')
}

function Hello () {
  return <div onClick={clickFun}>Hello</div>
}

// 类组件的创建和渲染
//创建

// 事件绑定函数（标准写法）
// const clickHandler = () => {
//   console.log('类组件中的事件被触发了')
// }
class HelloComponent extends React.Component {
  // 写组件里面是实例，需要加this获取上下文 （标准写法,箭头函数避免this指向问题）
  clickHandler = () => {
    console.log('类组件中的事件被触发了')
  }
  render () {
    return <div onClick={this.clickHandler}>this is class Component</div>
  }
}

function App () {
  return (
    <div>
      {/* 渲染hello组件 */}
      <Hello></Hello>
      {/* 渲染类组件 */}
      <HelloComponent></HelloComponent>
    </div>
  )
}

export default App

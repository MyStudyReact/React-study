import React from "react"

/**
 * App 父组件 Son 子组件
 */

// 函数组件的Son
function SonFun (props) {
  // 3.props 是一个对象 里面存着通过父组件传入的所有数据
  return (
    <h1>函数组件的Son,{props.msg}</h1>
  )
}

// 类组件的Son
class SonClass extends React.Component {
  render () {
    // 3.类组件必须通过this关键词去获取，这里的props是固定的
    return <h1>类组件的Son,{this.props.msg}</h1>
  }
}

class App extends React.Component {
  // 1.准备数据
  state = {
    message: 'this is a message'
  }
  render () {
    return (
      <div>
        {/* 2.子组件身上绑定属性，属性名可以自定义，保持语义化 */}
        <SonFun msg={this.state.message}></SonFun>

        <hr />

        <SonClass msg={this.state.message}></SonClass>
      </div>
    )
  }
}


export default App

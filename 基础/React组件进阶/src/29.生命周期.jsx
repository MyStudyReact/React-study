import React from 'react'

class App extends React.Component {
  /**
   * 创建组件时，最先执行，初始化的时候只执行一次 
   * 
   * 作用:
   * 1. 初始化state  
   * 2. 创建 Ref 
   * 3. 使用 bind 解决 this 指向问题等
   */
  constructor() {
    // 如果你用到了constructor就必须写super(),是用来初始化this的，可以绑定事件到this上;
    super()

    // 不用在里面写
    // this.state = {}

    console.log('constructor')
  }

  // 可以在外面写
  state = {
    count: 0,
  }

  clickHandler = () => {
    this.setState({
      count: this.state.count + 1
    })
  }


  /**
   * 组件挂载（完成DOM渲染）后执行，初始化的时候执行一次
   * （类似于Vue的mounted）
   * 
   * 作用：
   * 1. 发送网络请求   
   * 2.DOM操作
   */
  componentDidMount () {
    console.log('componentDidMount')
  }

  /**
   * 每次组件渲染都会触发
   * 
   * 作用：渲染UI
   */
  render () {
    console.log('render')
    return (
      <>
        <h1 onClick={this.clickHandler}>{this.state.count}</h1>
      </>
    )
  }
}

export default App

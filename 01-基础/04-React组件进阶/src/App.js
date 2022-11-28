import React from 'react'

class Test extends React.Component {
  /**
   * 如果数据是组件的状态需要去影响视图  定义state中
   * 如果是自己需要的数据状态，不和视图绑定，则定义成一个普通的实例属性即可
   * 
   * state中尽量保持精简
   */
  timer = null

  /**
   * 组件卸载（从页面中消失）
   * 
   * 作用：
   * 执行清理工作（比如：清理定时器等）
   */
  componentDidMount () {
    this.timer = setInterval(() => {
      console.log('定时器开启')
    }, 1000)
  }
  componentWillUnmount () {
    console.log('componentWillUnmount')

    //清除定时器
    clearInterval(this.timer)
  }

  render () {
    return (
      <h1>Test</h1>
    )
  }
}


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
    flag: true,
  }

  clickHandler = () => {
    this.setState({
      count: this.state.count + 1,
      flag: !this.state.flag,
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
   * 组件更新后（DOM渲染完毕）
   * 
   * 作用：
   * DOM操作，可以获取到更新后的DOM内容，不要直接调用setState
   */
  componentDidUpdate () {
    console.log('componentDidUpdate')
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
        <div onClick={this.clickHandler}>
          <h1>{this.state.count}</h1>

          {/* 通过一个数据状态的切换，让Test组进行销毁重建，就会发生组件卸载 */}
          {this.state.flag ? (<Test></Test>) : null}
        </div>
      </>
    )
  }
}

export default App

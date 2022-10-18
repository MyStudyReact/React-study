import React from "react"

// 通过类组件修改状态的方法 counter
class Counter extends React.Component {
  // 通过state定义组件状态
  state = {
    count: 0
  }

  // 事件回调函数
  changeCounter = (e, operate) => {
    e.preventDefault()
    if (operate === 'add') {
      // 修改state
      // react这个体系下 `数据不可变` 必须要通过setState方法进行更改
      this.setState({
        count: this.state.count + 1
      })
    } else {
      this.setState({
        count: this.state.count - 1
      })
    }
  }
  render () {
    return (
      <div>
        <div>{this.state.count}</div>
        <button onClick={(e) => this.changeCounter(e, 'add')}>+</button>
        <button onClick={(e) => this.changeCounter(e, 'sub')}>-</button>
      </div>
    )
  }
}
function App () {
  return (
    <div>
      {/* 渲染Counter */}
      <Counter></Counter>
    </div>
  )
}

export default App

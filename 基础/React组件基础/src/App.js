import React from 'react'

class InputComponent extends React.Component {
  // 1.声明一个用来控制input value属性的react组件自己的状态
  state = {
    message: '今晚上一定要早睡'
  }

  // 回调函数
  changeMessage = (e) => {
    // 4.拿到输入框最近的值，交给state中的message
    this.setState({ message: e.target.value })
  }

  // 产出UI模板结构
  render () {
    return (
      <>
        {/* 2.给input框的value属性绑定 react stete */}
        {/* 3.给input框绑定一个change的事件，为了拿到当前输入框的数据 */}
        <input
          type='text'
          value={this.state.message}
          onChange={this.changeMessage}
        ></input>
      </>
    )
  }
}

// 根组件
function App () {
  return (
    <div>
      <InputComponent></InputComponent>
    </div>
  )
}

export default App

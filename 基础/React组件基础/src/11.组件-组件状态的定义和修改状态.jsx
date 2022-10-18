import React from 'react'
//组件状态 类组件作为演示
class TestComponent extends React.Component {
  // 1.定义组件状态
  state = {
    // 在这里可以定义各种属性。全都是当前组件的状态
    name: '去沈阳？去长春？去北上广？'
  }

  //事件的回调函数
  changeName = () => {
    // 3.修改state中的状态name
    // 注意：不可以直接被赋值修改，必须通过一个方法 setState
    // this.state.name = '要前途还是要她'
    this.setState({
      name: '要前途还是要她'
    })
  }

  render () {
    // 2.使用状态
    return (
      <div>
        this is TestComponent
        <div>当前的状态：{this.state.name}</div>

        <button onClick={this.changeName}>修改name</button>
      </div>
    )
  }
}

/**
 * 总结：
 * 1. 编写组件其实就是编写原生js类或者函数
 * 2. 定义状态必须通过state 实例属性的方式，提供一个对象，名称是固定的为state
 * 3. 修改state中的任何属性，都不可以通过直接赋值，必须走setState方法，
 * 这个方法来自于继承React.Component 得到
 * 4. 这里的this 关键词很容易出现指向错误的情况，上面的写法是最推荐和最规范的，没有this指向问题
 */

function App () {
  return (
    <div>
      <TestComponent></TestComponent>
    </div>
  )
}

export default App

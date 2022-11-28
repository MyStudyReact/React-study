import React from 'react'
// this有问题的写法
class Test extends React.Component {
  // 第二种方式
  // constructor(props) {
  //   super(props)
  //   this.state = {}
  //   // 使用bind强行修正我们的this指向
  //   // 相当于在类组件初始化的阶段 就可以把回调函数的this修正到永远指向当前组件的实例对象
  //   this.handleClick = this.handleClick.bind(this)
  // }

  handleClick () {
    // 这时候的this为undefined
    // class 默认都是strict模式，strict下的this就是undefined
    console.log(this)
  }
  render () {
    console.log('父函数中的this指向为：', this)
    return (
      // this有问题的写法
      // <div onClick={this.handleClick}>hhh</div>

      // bind可以不调用函数，第一个参数为当前作用域的this，后面的参数为函数调用时传递的参数。
      // <div onClick={this.handleClick.bind(this)}>第一种方式</div>

      //该方式不能在事件绑定时传递参数，如果后面加括号的话会导致函数直接调用（需要用事件e来阻止默认行为）
      // <div onClick={this.handleClick}>第二种方式</div>

      //利用箭头函数中没有this,箭头函数的this就是外部this这一特性
      <div onClick={() => this.handleClick()}>第三种方式</div>
    )
  }
}

//跟组件
function App () {
  return (
    <div>
      <Test></Test>
    </div>
  )
}

export default App

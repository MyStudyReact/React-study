import React from "react"

/**
 * App 父组件 Son 子组件
 */

// 函数组件的Son
// function SonFun (props) {
//2.
function SonFun ({ msg, list, userInfo, getMsg, child }) {
  // 解构赋值更加简便
  // 1.
  // const { msg, list, userInfo, getMsg, child } = props
  return (
    <>
      {/* 基本类型传参 */}
      {/* <h1>函数组件的Son,{props.msg}</h1> */}
      <h1>函数组件的Son,{msg}</h1>

      {/* 数组传参 */}
      {/* <h2>数组传参,{props.list.map(item => <p key={item}>{item}</p>)}</h2> */}
      <h2>数组传参,{list.map(item => <p key={item}>{item}</p>)}</h2>

      {/* 对象传参 */}
      {/* <h3>对象传参,姓名:{props.userInfo.name}</h3> */}
      <h3>对象传参,姓名:{userInfo.name}</h3>

      {/* 函数传参 */}
      {/* <button onClick={props.getMsg}>触发父组件传入的函数</button> */}
      <button onClick={getMsg}>触发父组件传入的函数</button>

      {/* JSX传参 */}
      {/* {props.child} */}
      {child}
    </>
  )
}

// 这里的写法就是原生的函数语法 props也是一个普通的js对象
// 所以原生支持的写法 这里都是可以的 放心大胆的写

class App extends React.Component {
  state = {
    message: 'this a message',
    // 穿数组、对象、函数、JSX的演示
    list: [1, 2, 3],
    userInfo: {
      name: 'xg',
      age: '22'
    }
  }

  // 父组件中的函数
  getMsg = () => {
    console.log('父组件中的函数')
  }

  render () {
    return (
      <div>
        <SonFun
          list={this.state.list}
          msg={this.state.message}
          userInfo={this.state.userInfo}
          getMsg={this.getMsg}
          child={<h4>this is h4</h4>}>
        </SonFun>
      </div>
    )
  }
}


export default App

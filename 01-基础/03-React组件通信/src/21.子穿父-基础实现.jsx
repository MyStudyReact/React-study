import React from "react"

/**
 * App 父组件 Son 子组件
 * 
 * 父穿子 props 函数
 * 子穿父：子组件调用父组件传递过来的函数,并且把想要传递的数据当成函数的实参传入即可
 */

// 父组件定义一个函数，作为参数传递给子组件，子组件触发触发该函数，将子组件的值作为参数给父组件这个函数使用
function SonFun ({ getSonMsg }) {
  function clickHandler () {
    const sonMsg = '这是来自子组件的数据'
    getSonMsg(sonMsg)

    // getSonMsg('来自于子组件的数据')
  }
  return (
    <>
      <button onClick={clickHandler}>this is Son</button>

      {/* <button onClick={() => getSonMsg('来自于子组件的数据')}>this is Son</button> */}
    </>
  )
}

class App extends React.Component {
  state = {

  }

  // 1.准备一个函数传给子组件
  getSonMsg = (sonMsg) => {
    console.log('收到了吗', sonMsg,)
  }

  render () {
    return (
      <div>
        <SonFun
          getSonMsg={this.getSonMsg}
        >
        </SonFun>
      </div>
    )
  }
}


export default App

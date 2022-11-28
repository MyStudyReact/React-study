import React from "react"

/**
 * 目标：B组件中的数据传给A
 * 
 * 技术方案：
 * 1.先把B中的数据通过子穿父 传给App
 * 2.再把App接收到的Son中的数据 通过父穿子 传给A
 */

function SonA (props) {
  const { sendAMsg } = props
  return (
    <>
      <h1>this is SonA,接收到B组件的msg---{sendAMsg}</h1>
    </>
  )
}

function SonB (props) {
  const { getBMsg } = props

  const bMsg = '这里是来自于B组件中的数据'
  return (
    <>
      <h1 onClick={() => getBMsg(bMsg)}>this is SonB</h1>
    </>
  )
}

class App extends React.Component {
  state = {
    sendAMsg: ''
  }

  //声明一个传给B组件的方法
  getBMsg = (bMsg) => {
    console.log('收到B组件的msg  ' + bMsg)
    this.setState({
      sendAMsg: bMsg
    })
  }

  render () {
    return (
      <div>
        <SonA sendAMsg={this.state.sendAMsg} />

        <hr />

        <SonB getBMsg={this.getBMsg} />
      </div>
    )
  }
}


export default App

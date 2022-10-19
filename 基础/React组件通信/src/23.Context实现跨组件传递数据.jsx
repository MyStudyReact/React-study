// 1.导入createContext方法并执行，结构提供者和消费者
import React, { createContext } from "react"

/**
 * App -> A -> C
 * 
 * App里的数据直接传给C
 * 
 * 注意事项：
 * 1.上层组件和下层组件是相对的，只要存在就可以使用，通常我们都会通过app作为数据提供方法
 * 2.这里设计到的语法都是固定的，有两处，提供的位置（value提供数据），获取的位置{value => 使用value做什么都可以}
 */


// const context = createContext()

// context包含 Provider,Consumer
const { Provider, Consumer } = createContext()

function ComA () {
  return (
    <>
      <h1> this is divA</h1>

      <hr />

      <ComC />
    </>
  )
}

function ComC () {
  return (
    <h1> this is divc
      {/* 通过Consumer使用数据 */}
      <Consumer>
        {value => <div>{value}</div>}
      </Consumer>
    </h1>
  )
}


class App extends React.Component {
  state = {
    mesage: 'this is mesage'
  }
  render () {
    return (
      // 2.使用Provider包裹跟组件
      <Provider value={this.state.mesage}>
        <>
          <ComA />
        </>
      </Provider>
    )
  }
}


export default App

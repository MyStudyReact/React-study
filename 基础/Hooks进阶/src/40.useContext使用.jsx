import React, { useState, createContext, useContext } from 'react'

const Context = createContext()

function ComA () {
  const count = useContext(Context)
  return (<div>
    <h1>this is comA</h1>
    app传过来的数据为： {count}
    <hr />
    <ComC></ComC>
  </div>)
}
function ComC () {
  const count = useContext(Context)
  return (
    <div>
      <h1>this is comc</h1>
      app传过来的数据为：{count}
    </div>
  )
}

function App () {
  const [count, setCount] = useState(20)
  return (
    <div>
      <Context.Provider value={count}>
        <ComA></ComA>

        <button onClick={() => setCount(count + 1)}>+</button>
      </Context.Provider>
    </div>
  )
}

export default App
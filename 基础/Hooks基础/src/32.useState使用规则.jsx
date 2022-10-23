// useState

import { useState } from 'react'
function App () {
  const [count, setCount] = useState(0)
  const [flag, setFlag] = useState(true)
  const [list, setList] = useState([])

  function test () {
    setCount(count + 1)
    setFlag(!flag)
    setList([...list, ...[1, 2, 3]])
  }

  return (
    <div >
      {/* <button onClick={() => setCount(count + 1)}>{count}</button>

      <button onClick={() => setFlag(!flag)}>{flag ? '1' : '0'}</button>

      <button onClick={() => setList([...list, ...[1, 2, 3]])}>{list.join('-')}</button> */}

      <button onClick={test}>test</button>
      <h1>
        <p>count:{count}</p>
        <p>flag:{flag ? '1' : ' 0'}</p>
        <p>list:{list.join('-')}</p>
      </h1>
    </div>
  )
}

export default App
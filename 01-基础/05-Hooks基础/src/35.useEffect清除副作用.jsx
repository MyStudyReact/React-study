import { useState, useEffect } from 'react'


function Test () {
  useEffect(() => {
    let timer = setInterval(() => {
      console.log('定时器执行了！')
    }, 1000)

    //清理定时器
    return () => {
      // 清除的动作
      clearInterval(timer)
    }
  }, [])
  return (
    <div>444</div>
  )
}

function App () {
  const [flag, setFlag] = useState(true)

  return (
    <div>
      {flag ? <Test /> : null}

      <button onClick={() => setFlag(!flag)}>switch</button>
    </div>
  )
}

export default App
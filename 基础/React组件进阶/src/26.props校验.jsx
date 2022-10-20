import React from 'react'

// 里面有各种各样的内置的校验规则
import PropTypes from 'prop-types'

function Com ({ list }) {
  return (
    <>
      {list.map(item => <h1 key={item}>Com,{item}</h1>)}
    </>
  )
}

Com.propTypes = {
  // 定义各种各样的规则
  list: PropTypes.array //限定这里的list参数类型必须是数组类型
}

class App extends React.Component {
  render () {
    return (
      <>
        <Com list={[1, 2, 3]}></Com>
      </>
    )
  }
}

export default App

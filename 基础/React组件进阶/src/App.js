import React from 'react'

// 里面有各种各样的内置的校验规则
import PropTypes from 'prop-types'

function Com ({ list, message, }) {
  return (
    <>
      {list.map(item => <h1 key={item}>Com,{item}</h1>)}

      <h2>{message}</h2>
    </>
  )
}

Com.propTypes = {
  // 定义各种各样的规则
  list: PropTypes.array, //限定这里的list参数类型必须是数组类型

  message: PropTypes.string.isRequired // 加上isRequired,表示必填项
}

class App extends React.Component {
  render () {
    return (
      <>
        <Com list={[1, 2, 3]} message={'我过来了！'}></Com>
      </>
    )
  }
}

export default App

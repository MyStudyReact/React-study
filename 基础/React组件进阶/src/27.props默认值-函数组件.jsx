import React from 'react'

// 里面有各种各样的内置的校验规则
import PropTypes from 'prop-types'

/**
 * 函数组件默认值
 * 1. 使用defaultProps            ---调试工具可以查看
 * 2. 函数参数默认值（推荐的方案）  ---调试工具不可查看，但是可以直接用
 * 
 * 区别：
 * 第一种再用的时候组件内部已经有了pageSize这个prop,第二个只有再传递的时候组件内部才有这个props
 */

// 2. 函数参数默认值（推荐的方案）
function Com ({ list, message, pageSize = 10 }) {
  return (
    <>
      {/* {list.map(item => <h1 key={item}>Com,{item}</h1>)} */}

      <h2>{message} -- {pageSize}</h2>
    </>
  )
}

Com.propTypes = {
  // 定义各种各样的规则
  list: PropTypes.array, //限定这里的list参数类型必须是数组类型

  message: PropTypes.string.isRequired // 加上isRequired,表示必填项
}

//  1. 使用defaultProps
// Com.defaultProps = {
//   pageSize: 10 // 如果给我传pageSize 就以传入的为主，如果不穿就是10
// }

class App extends React.Component {
  render () {
    return (
      <>
        {/* 没传 pageSize为10 */}
        <Com list={[1, 2, 3]} message={'我过来了！'}></Com>
        {/* 穿了20，pageSize为20 */}
        <Com list={[1, 2, 3]} message={'我过来了！'} pageSize={20}></Com>
      </>
    )
  }
}

export default App

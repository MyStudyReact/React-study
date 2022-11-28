import React from 'react'

/**
 * 类组件默认值
 * 1. 使用defaultProps                  ---调试工具可以查看
 * 2. static类静态属性定义（推荐的方案）  ---调试工具不可查看，但是可以直接用
 * 
 * 区别：
 * 第一种再用的时候组件内部已经有了pageSize这个prop,第二个只有再传递的时候组件内部才有这个props
 */

// 2. 类组件参数默认值（推荐的方案）
class Com extends React.Component {
  static defaultProps = {
    pageSize: 10
  }
  render () {
    const { pageSize } = this.props
    return (
      <>
        <h2>this is h2 -- {pageSize}</h2>
      </>
    )
  }
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
        <Com ></Com>
        {/* 穿了20，pageSize为20 */}
        <Com pageSize={20}></Com>
      </>
    )
  }
}

export default App

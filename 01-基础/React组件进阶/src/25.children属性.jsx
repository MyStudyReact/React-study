import React from 'react'

//如果是多个 接收到的是一个数组，可以用map进行遍历
function ComA ({ children }) {
  // children属性也可以再props中直接使用

  //  函数的时候
  // children()
  return (
    <>
      {/* <h1 >ComA,{children}</h1> */}

      {/* 函数的时候 */}
      {/* <h1 >ComA</h1> */}

      {/* 多个的时候，用map进行遍历 */}
      <h1>ComA,{children.map(child => child)}</h1>
    </>
  )
}

class App extends React.Component {
  render () {
    return (
      <>
        {/* 普通文本 */}
        {/* <ComA>普通文本</ComA> */}

        {/* 普通标签元素 */}
        <ComA>
          <div>普通标签元素</div>
          <p>普通标签元素</p>
        </ComA>

        {/* 函数 */}
        {/* <ComA>
          {() => console.log('123')}
        </ComA> */}

        {/* JSX */}
        {/* <ComA>
          {<div><p>{'JSX'}</p></div>}
        </ComA> */}
      </>
    )
  }
}

export default App

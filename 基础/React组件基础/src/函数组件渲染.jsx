// 函数组件的创建和渲染
//创建
function Hello () {
  return <div>Hello</div>
}

/**
 * 渲染标签的方式，命名方式必须和函数名对应,且必须大写
 * <Hello></Hello>
 */


function App () {
  return (
    <div>
      {/* 渲染hello组件 */}
      <Hello></Hello>
    </div>
  )
}

export default App

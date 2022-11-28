// jsx 样式控制
//1. 行内/内联样式 ====> 在元素身上绑定一个style属性即可
//2.  类名样式       ====> 在元素身上绑定一个className属性即可

import './app.css'

const style = {
  color: 'red',
  fontSize: '50px'
}

// 动态控制className,满足条件才有
const activeFlag = false

function App() {
  return (
    <div className="App">
      {/* 1. 行内/内联样式 */}
      {/* <h1 style={{ color: 'red', fontSize: '50px' }}>行内/内联样式</h1> */}
      <h1 style={style}>行内/内联样式</h1>

      <h3 className='active'>测试类名样式</h3>

      <h2 className={activeFlag ? 'active' : ''}>动态控制className</h2>
    </div>
  );
}

export default App;

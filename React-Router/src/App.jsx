// 引入两个组件
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'

import { HashRouter, BrowserRouter, Link, Routes, Route } from 'react-router-dom'

//进行路由配置
function App () {
  return (
    // 声明当前要用一个非hash模式的路由，如果是hash 就是 HashRouter
    // <BrowserRouter>
    <HashRouter>

      {/* 指定跳转的组件 to用来配置路由地址 */}
      <Link to="/">首页</Link>
      <Link to="/about" style={{ 'margin': '0 10px' }}>关于</Link>

      {/* 路由出口 路由对应的组件会在这里进行渲染 */}
      <Routes>
        {/* 指定路径和组件的对应关系，path代表路径，element代表组件 */}
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
    </HashRouter >
  )
}

export default App

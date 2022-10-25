import Login from './pages/Login.jsx'
import NotFound from './pages/NotFound.jsx'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

//进行路由配置
function App () {
  return (
    <BrowserRouter>
      {/* 路由出口 路由对应的组件会在这里进行渲染 */}
      <Routes>
        <Route path='/login' element={<Login></Login>}></Route>
        {/* 当所有的路径都没有匹配的时候，做兜底匹配显示，未找到 */}
        <Route path='*' element={<NotFound></NotFound>} ></Route>
      </Routes>
    </BrowserRouter >
  )
}

export default App
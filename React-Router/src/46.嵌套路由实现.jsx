import Layout from './componts/Layout.jsx'
import Login from './pages/Login.jsx'

import Board from './componts/Board.jsx'
import Article from './componts/Article.jsx'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

//进行路由配置
function App () {
  return (
    <BrowserRouter>
      {/* 路由出口 路由对应的组件会在这里进行渲染 */}
      <Routes>
        <Route path='/' element={<Layout></Layout>}>
          {/* 定义二级路由 */}

          {/* <Route path='/board' element={<Board />}></Route> */}
          {/* 默认二级 添加index属性 把他自己的path属性去掉 */}
          <Route index element={<Board />}></Route>

          <Route path='/article' element={<Article />}></Route>
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </BrowserRouter >
  )
}

export default App

import { useRoutes } from 'react-router-dom'
import Layout from "../componts/Layout"
import Board from "../componts/Board"
import Article from "../componts/Article"

import Login from "../pages/Login"
import About from "../pages/About"
import NotFound from '../pages/NotFound'

// 1. 准备一个路由数组 数组中定义所有的路由对应关系
const router = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        element: <Board />,
        index: true, // index设置为true 变成默认的二级路由
      },
      {
        path: 'article',
        element: <Article />,
      }
    ]
  },
  // 增加n个路由对应关系
  {
    path: '*',
    element: <NotFound />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/about',
    element: <About />,
  },
]

// 2. 使用useRoutes方法传入routesList生成Routes组件
function WrapperRoutes () {
  const element = useRoutes(router)
  return element
}

export { WrapperRoutes }
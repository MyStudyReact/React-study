import { useRoutes } from 'react-router-dom'

// 引入lazy函数，懒加载函数，以及要配合Suspense组件一起使用才能实现懒加载
import { lazy, Suspense } from "react"

// import Layout from "../componts/Layout"
// import Board from "../componts/Board"
// import Article from "../componts/Article"

// import Login from "../pages/Login"
// import About from "../pages/About"
// import NotFound from '../pages/NotFound'

// 使用懒加载引入组件
const Layout = lazy(() => import("../componts/Layout"))
const Board = lazy(() => import("../componts/Board"))
const Article = lazy(() => import("../componts/Article"))

const Login = lazy(() => import('../pages/Login'))
const About = lazy(() => import('../pages/About'))
const NotFound = lazy(() => import('../pages/NotFound'))

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
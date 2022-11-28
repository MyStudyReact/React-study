import { BrowserRouter } from 'react-router-dom'
// 引入lazy函数，懒加载函数，以及要配合Suspense组件一起使用才能实现懒加载
import { lazy, Suspense } from "react"
import { WrapperRoutes } from './router'

//进行路由配置
function App () {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <WrapperRoutes></WrapperRoutes>
      </Suspense>
    </BrowserRouter >
  )
}

export default App
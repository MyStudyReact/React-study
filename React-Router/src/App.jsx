import { BrowserRouter } from 'react-router-dom'
import { WrapperRoutes } from './router'

//进行路由配置
function App () {
  return (
    <BrowserRouter>
      <WrapperRoutes></WrapperRoutes>
    </BrowserRouter >
  )
}

export default App
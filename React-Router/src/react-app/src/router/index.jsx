import { lazy } from "react"
import { useRoutes } from 'react-router-dom'

const Index = lazy(() => import('../pages/index/Index'))
const NotFound = lazy(() => import('../pages/exception/NotFound'))

const router = [
  {
    path: '/',
    element: <Index />
  },
  {
    path: '*',
    element: <NotFound />
  }
]

function WrapperRoutes () {
  const element = useRoutes(router)
  return element
}
export { WrapperRoutes }
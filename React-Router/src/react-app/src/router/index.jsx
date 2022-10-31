import { lazy } from "react"
import { useRoutes } from 'react-router-dom'

const Index = lazy(() => import('../pages/index'))
const NotFound = lazy(() => import('../pages/exception/NotFound'))

const ContentManage = lazy(() => import('../pages/contentManage'))
const OverviewData = lazy(() => import('../pages/overviewData'))
const PublishedArticles = lazy(() => import('../pages/publishedArticles'))

const router = [
  {
    path: '/',
    element: <Index />,
    children: [
      {

        element: <OverviewData />,
        index: true, // index设置为true 变成默认的二级路由
      },
      {
        path: '/contentManage',
        element: <ContentManage />,
      },
      {
        path: '/publishedArticles',
        element: <PublishedArticles />,
      },
    ],
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
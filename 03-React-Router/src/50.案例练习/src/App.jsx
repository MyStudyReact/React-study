import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { WrapperRoutes } from "./router"

function App () {

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <WrapperRoutes></WrapperRoutes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App

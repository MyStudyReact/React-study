import { useEffect } from 'react'
import { useWindowScroll } from './hooks/useWindowScroll'

function App () {
  const [y] = useWindowScroll()
  useEffect(() => {

  })

  return (
    <div style={{ height: '12000px' }}>
      {y}
    </div>
  )
}

export default App
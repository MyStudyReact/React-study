import { useWindowScroll } from './hooks/useWindowScroll'
import { useLocalStorage } from './hooks/useLocalStorage'

function App () {
  const [y] = useWindowScroll()

  const [message, setMessage] = useLocalStorage('hook-key', '胡思乱想')

  setTimeout(() => {
    setMessage('好好生活')
  }, 5000)

  return (
    <div style={{ height: '12000px' }}>
      {y} ----{message}
    </div>
  )
}

export default App
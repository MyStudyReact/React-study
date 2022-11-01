import { useStore } from '../store'

// 一定要加这个！！！
import { observer } from 'mobx-react-lite'

function Bar () {
  const { counterStore } = useStore()
  return (
    <>
      <h1>bar</h1>
      <h1>{counterStore.count}</h1>
    </>
  )
}

export default observer(Bar)
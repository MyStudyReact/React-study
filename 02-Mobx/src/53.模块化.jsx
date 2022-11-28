import { useStore } from './store/index'

import { observer } from 'mobx-react-lite'

function App () {
  // const rootStore = useStore()

  // 注意：解构赋值 到store实例对象就可以了
  // 防止破坏响应式,用哪个store就解构哪个store
  const { counterStore } = useStore()
  return (
    <div className="App">
      {/* {rootStore.counterStore.count}

      <button onClick={rootStore.counterStore.addCount}>+</button> */}

      {counterStore.count}

      <button onClick={counterStore.addCount}>+</button>
    </div>
  )
}


export default observer(App)

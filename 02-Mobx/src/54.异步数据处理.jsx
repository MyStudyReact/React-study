import { useStore } from './store/index'

import { observer } from 'mobx-react-lite'

import { useEffect } from 'react'

function App () {

  const { counterStore, ListStore } = useStore()

  // 1. 使用数据渲染组件
  // 2. 触发action函数发送异步请求
  useEffect(() => {
    ListStore.setChannelList()
  }, [ListStore])

  return (
    <div className="App">
      {/* {rootStore.counterStore.count}

      <button onClick={rootStore.counterStore.addCount}>+</button> */}

      {counterStore.count}

      <button onClick={counterStore.addCount}>+</button>

      <ol>
        {ListStore.channelList.map(item =>
          <li key={item.id}>{item.name}</li>
        )}
      </ol>
    </div>
  )
}

// 让组件可以响应数据的变化[也就是数据一变组件重新渲染]
export default observer(App)

// 1.导入countStore
import { counterStore } from './store/counter.Store'

// 4.导入中间件连接mobx react 完成响应式变化
import { observer } from 'mobx-react-lite'

function App () {
  return (
    <div className="App">

      {counterStore.count}

      <button onClick={counterStore.addCount}>+</button>

      {/* 使用计算属性,不用加括号 */}
      <h1>{counterStore.filterList.join('-')}</h1>
      <button onClick={counterStore.addList}>修改数组</button>
    </div>
  )
}

// 5.包裹App
export default observer(App)

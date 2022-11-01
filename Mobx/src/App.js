// 1.导入countStore
import { counterStore } from './store/counter'

// 4.导入中间件连接mobx react 完成响应式变化
import { observer } from 'mobx-react-lite'

function App () {
  return (
    <div className="App">
      {/* 2.把store中的count渲染一下 */}
      {counterStore.count}

      {/* 3.点击事件触发action函数修改count的值 */}
      <button onClick={counterStore.addCount}>+</button>
    </div>
  )
}

// 5.包裹App
export default observer(App)

import { observer } from 'mobx-react-lite'

import Bar from './components/Bar'
import Footer from './components/Footer'

import { useStore } from './store'

function App () {
  const { counterStore } = useStore()
  return (
    <div>
      <Bar></Bar>
      <button onClick={counterStore.addCount}>修改store数据</button>
      <Footer></Footer>
    </div>
  )
}

// 让组件可以响应数据的变化[也就是数据一变组件重新渲染]
export default observer(App)

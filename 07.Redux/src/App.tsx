import { useSelector, useDispatch } from 'react-redux'
import './App.css'
import { CounterState } from './types/root.d'
import { add } from './store/modules/counterStore'

function App() {
  // 使用数据
  const { count } = useSelector(state => state.counterStore)

  // 修改数据
  const dispatch = useDispatch()
  const clickHandler = () => {
    // 1. 生成action对象
    const action = add()
    // 2. 提交action进行数据更新
    dispatch(action)
  }
  return (
    <div className="App">
      {count}
      <button onClick={clickHandler}>+</button>
    </div>
  )
}

export default App

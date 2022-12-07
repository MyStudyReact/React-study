import { useSelector, useDispatch } from 'react-redux'
import './App.css'
import { RootState } from './store'
import { add, addTaskList } from './store/modules/counterStore'

function App() {
  // 使用数据
  const { count, taskList } = useSelector((state: RootState) => state.counterStore)

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

      <hr />
      {taskList.map((item: string) => {
        return <div>{item}</div>
      })}
      <button onClick={() => dispatch(addTaskList('vue'))}>addList</button>
    </div>
  )
}

export default App

import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './App.css'
import { RootState, AppDispatch } from './store'
import { add, addTaskList } from './store/modules/counterStore'
import { fetchChannelList } from './store/modules/channelStore'


function App() {
  // // 使用数据
  // const { count, taskList } = useSelector((state: RootState) => state.counterStore)

  // // 修改数据
  // const dispatch = useDispatch()
  // const clickHandler = () => {
  //   // 1. 生成action对象
  //   const action = add()
  //   // 2. 提交action进行数据更新
  //   dispatch(action)
  // }

  const { channels } = useSelector((state: RootState) => state.channelStore)

  const dispatch = useDispatch()
  useEffect(() => {
    const action = fetchChannelList()
    console.log(typeof action, '===action');

    dispatch(action)
  }, [dispatch])

  return (
    <div className="App">
      {/* {count}
      <button onClick={clickHandler}>+</button>

      <hr />
      {taskList.map((item: string) => {
        return <div>{item}</div>
      })}
      <button onClick={() => dispatch(addTaskList('vue'))}>addList</button> */}

      {channels.map(task => <li key={task.id}>{task.name}</li>)}
    </div>
  )
}

export default App

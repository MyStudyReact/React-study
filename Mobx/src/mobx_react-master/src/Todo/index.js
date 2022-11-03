// import { useState } from 'react'

import './index.css'
import { useStore } from '../store'
import { observer } from 'mobx-react-lite'

function Task () {
  //useStore
  const { taskStore } = useStore()

  //单选受控方式
  // const {check,setCheck} = useState()
  /**
   * 以上方式不能进行处理，因为是针对于每个数组元素而言的
   * 
   * 所以思路如下：
   * mobx Store去维护状态
   * input 只需要把 e.target.checked 交给store 让他来处理进行修改
   */
  function onChange (e, id) {
    taskStore.singleCheck(id, e.target.checked)
  }

  //全选
  function allChange (e) {
    taskStore.allCheck(e.target.checked)
  }

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          autoFocus
          autoComplete="off"
          placeholder="What needs to be done?"
        />
      </header>
      <section className="main">
        {/* 全选 */}
        <input
          id="toggle-all"
          className="toggle-all"
          type="checkbox"
          checked={taskStore.isAll}
          onChange={allChange}
        />
        <label htmlFor="toggle-all"></label>
        <ul className="todo-list">
          {/* completed 类名标识 */}
          {taskStore.list.map(item => (
            <li
              key={item.id}
              className={`todo${item.isDone ? ' completed' : ''}`}
            >
              <div className="view">
                {/* 单选框 受控和非受控 受控的方式去处理 */}
                <input
                  className="toggle"
                  type="checkbox"
                  checked={item.isDone}
                  onChange={(e) => onChange(e, item.id)} />
                <label >{item.name}</label>
                <button className="destroy"></button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </section>
  )
}

export default observer(Task)
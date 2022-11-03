import './index.css'
import { useStore } from '../store'

function Task () {
  //useStore
  const { taskStore } = useStore()

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
        <input
          id="toggle-all"
          className="toggle-all"
          type="checkbox"
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
                <input className="toggle" type="checkbox" />
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

export default Task
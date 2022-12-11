
import './app.css'
import { useSelector } from 'react-redux'

function App () {
  const { list } = useSelector(state => state.taskStore)
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
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all"></label>
        <ul className="todo-list">
          {list.map((task) => (
            <li key={task.id} className={task.done ? 'todo completed' : 'todo'}>
              <div className="view">
                <input
                  className="toggle"
                  type="checkbox"
                  checked={task.done}
                  onChange={(e) => singleCheck(task.id, e)} />
                <label>{task.title}</label>
                <button
                  className="destroy"
                  onClick={() => delTask(task.id)}></button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </section>
  )
}

export default App

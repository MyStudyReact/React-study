
import React from 'react'
class Counter extends React.Component {
  state = {
    count: 0,
    list: [1, 2, 3, 4, 5],
    person: {
      name: 'jack',
      age: '20',
    }
  }
  changeCount = (e, operate) => {
    e.preventDefault()
    if (operate === 'add') {
      this.setState({
        count: this.state.count + 1
      })
    } else {
      this.setState({
        count: this.state.count - 1
      })
    }
  }

  changeList = (e) => {
    e.preventDefault()
    this.setState({
      // list: [...this.state.list, 6, 7]
      list: this.state.list.splice(1, this.state.list.length - 1)
    })
  }

  changePerson = (e) => {
    e.preventDefault()
    this.setState({
      person: { ...this.state.person, name: 'rose' }
    })
  }

  render () {
    return (
      <>
        <div>{this.state.count}</div>
        <button onClick={(e) => this.changeCount(e, 'add')}>+</button>
        <button onClick={(e) => this.changeCount(e, 'sub')}>+</button>

        <hr />

        <ul>
          {this.state.list.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
        <button onClick={(e) => this.changeList(e)}>改变数组</button>

        <hr />

        <div>姓名：{this.state.person.name}</div>
        <div>年龄：{this.state.person.age}</div>
        <button onClick={(e) => this.changePerson(e)}>改变对象</button>
      </>
    )
  }
}

function App () {
  return (
    <div>
      {/* 渲染Counter */}
      <Counter></Counter>
    </div>
  )
}

export default App

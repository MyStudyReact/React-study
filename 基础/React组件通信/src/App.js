import React from "react"
import './app.css'

// 渲染列表
function ListItem (props) {
  const { listItem, delItem } = props
  return (
    <div className="card" key={listItem.id}>
      <div className="info">
        <h3>标题：{listItem.name}</h3>
        <p>价格：{listItem.price}</p>
        <p>消息：{listItem.info}</p>
      </div>
      <button className="delBtn" onClick={() => delItem(listItem.id)}>删除</button>
    </div>
  )
}



// 数据提供者 渲染ListItem 组件 App套着ListItem
// 先不抽离组件，完成基础渲染之后再去抽离
class App extends React.Component {
  state = {
    list: [
      { id: 1, name: '超级好吃的棒棒糖', price: 18.8, info: '开业大酬宾，全场8折' },
      { id: 2, name: '超级好吃的大鸡腿', price: 34.2, info: '开业大酬宾，全场8折' },
      { id: 3, name: '超级无敌的冰激凌', price: 14.2, info: '开业大酬宾，全场8折' }
    ]
  }

  //给子组件传递的函数
  delItem = (id) => {
    this.setState({
      list: this.state.list.filter(item => item.id !== id),
    })
  }

  render () {
    return (
      <div>
        {this.state.list.map(item => <ListItem key={item.id} listItem={item} delItem={this.delItem}></ListItem>)}
      </div>
    )
  }
}


export default App

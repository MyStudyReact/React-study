# Todos综合案例
![image.png](https://cdn.nlark.com/yuque/0/2022/png/274425/1659260225175-be32a369-657b-4749-a2a8-0f9de5a80215.png#clientId=u9cdd7397-35da-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=471&id=u1dd1e01d&margin=%5Bobject%20Object%5D&name=image.png&originHeight=942&originWidth=1842&originalType=binary&ratio=1&rotation=0&showTitle=false&size=69361&status=done&style=none&taskId=ube051d18-0a84-4015-8fac-cbc38ecf0d2&title=&width=921)

## 1. 开发环境搭建
```bash
# 克隆模块到本地
$ git clone https://gitee.com/react-course-series/mobx_react.git

# 安装所有依赖
$ npm i

# master分支是一个静态的模板  在这个里面进行开发
# finished-mvc分支是一个写完的版本  供参考
```

## 2. Mobx和React的职责划分
![c.png](https://cdn.nlark.com/yuque/0/2022/png/274425/1659260631112-665b28f1-3aab-428b-9937-7ced75d53525.png#clientId=u9cdd7397-35da-4&crop=0&crop=0&crop=1&crop=1&from=drop&id=u71bd1517&margin=%5Bobject%20Object%5D&name=c.png&originHeight=651&originWidth=1618&originalType=binary&ratio=1&rotation=0&showTitle=false&size=853564&status=done&style=none&taskId=u01b7b3d9-2ea9-4eed-9271-8751a0f36a5&title=)

## 3. 列表渲染
```jsx
import './index.css'
import { useStore } from '../store'
function Task () {
  const { taskStore } = useStore()
  return (
    <section className="todoapp">
      <section className="main">
        {/* 省略 */}
        <ul className="todo-list">
          {/* 列表区域 */}
          {taskStore.list.map(item => (
            <li
              className="todo"
              key={item.id}
            >
              <div className="view">
                <input
                  className="toggle"
                  type="checkbox"
                 />
                <label >{item.name}</label>
                <button className="destroy"></button>
              </div>
            </li>
          ))}

          {/* <li
            className="todo completed"
          >
            <div className="view">
              <input className="toggle" type="checkbox" defaultChecked={true} />
              <label >learn react</label>
              <button className="destroy"></button>
            </div>
          </li> */}
        </ul>
      </section>
      <footer className="footer">
        <span className="todo-count">
          任务总数: {10} 已完成: {1}
        </span>
      </footer>
    </section>
  )
}

export default observer(Task)
```

## 4. 单选实现
> 实现思路和步骤: 本质上是在实现双向绑定
> 1. 通过store中的数据状态 isDone字段 绑定到input元素的 checked属性上
> 2. 监听事件 调用mobx的对应方法 传入id   找到要修改的项 把isDone字段取反操作

**task.Store.js**
```jsx
import { makeAutoObservable } from 'mobx'
class TaskStore {
  list = [
    {
      id: 1,
      name: '学习react',
      isDone: true
    },
    {
      id: 2,
      name: '搞定mobx',
      isDone: false
    }
  ]
  constructor() {
    makeAutoObservable(this)
  }
  // 进行单选修改数据的方法
  checkItem = (id) => {
    const item = this.list.find(item => item.id === id)
    item.isDone = !item.isDone
  }
}
export default TaskStore

```

**App.js**
```jsx
const onChange = (id) => taskStore.checkItem(id)

<input
    className="toggle"
    type="checkbox"
    checked={item.isDone}
    onChange={() => onChange(item.id)}
/>
```

## 5. 全选功能
> 实现思路和步骤: 
> 1. 实现数据驱动权限UI显示   通过计算属性 + every方法
> 2. 实现点击权限 控制所有子项   change事件拿到e.target.checked 遍历list进行isDone赋值

**task.Store.js**
```javascript
// 是否全选的计算属性
get isAll () {
  return this.list.every(item => item.isDone)
}

// 遍历修改所有item
allCheckItem = (checked) => {
  this.list.forEach(item => {
    item.isDone = checked
  })
}
```

**App.js**
```jsx
// 全选操作回调
const allChange = (e) => {
  // 通过事件对象e拿到当前是否选中的状态 
  taskStore.allCheckItem(e.target.checked)
}

{/* 全选框 */}
<input
  id="toggle-all"
  className="toggle-all"
  type="checkbox"
  checked={taskStore.isAll}
  onChange={allChange}
/>
```

## 6. 删除功能
> 实现思路和步骤：
> 1. 在mobx中定义好删除数据的方法
> 2. 点击删除 调用mobx提供的删除方法 传出id   进行删除

**task.Store.js**
```JSX
// 删除的方法
delItem = (id) => {
  this.list = this.list.filter(item => item.id !== id)
}
```

**App.js**
```JSX
// 删除操作
const onDel = (id) => taskStore.delItem(id)

<button className="destroy" onClick={() => onDel(item.id)}></button>
```

## 7. 新增功能
> 实现思路和步骤:
> 1. 在mobx中编写新增方法的逻辑
> 2. 在组件中通过受控方式维护输入框中的数据
> 3. 在组件中监听keyUp方法  判断当前是否点击的是回车键 如果是 调用mobx的方法进行新增

**task.Store.js**
```javascript
  addItem = (item) => {
    this.list.push(item)
  }
```

**App.js**
```jsx
// 受控方式维护输入框数据
const [keyword, setKeyword] = useState('')
const keywordChange = (e) => {
  setKeyword(e.target.value)
}

// 键盘抬起事件中 判断code码进行新增
const onKeyUp = (e) => {
  console.log(e)
  if (e.keyCode === 13) {
    taskStore.addItem({
      id: 3,
      name: keyword,
      isDone: false
    })
    // 新增完毕置空
    setKeyword('')
  }
}

<input
  className="new-todo"
  autoFocus
  autoComplete="off"
  placeholder="What needs to be done?"
  value={keyword}
  onChange={keywordChange}
  onKeyUp={onKeyUp}
/>
```

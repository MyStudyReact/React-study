# React组件进阶

## children属性
`目标任务:`掌握props中children属性的用法

**children属性是什么**
> 表示该组件的子节点，只要组件内部有子节点，props中就有该属性
**children可以是什么**
1. 普通文本
2. 普通标签元素
3. 函数 / 对象
4. JSX

`目的`：高阶组件（高阶函数）

## props校验-场景和使用
`目标任务:`掌握组件props的校验写法，增加组件的健壮性

>对于组件来说，props是由外部传入的，我们其实无法保证组件使用者传入了什么格式的数据，如果传入的数据格式不对，就有可能会导致组件内部错误，有一个点很关键 - 组件的使用者可能报错了也不知道为什么，看下面的例子


面对这样的问题，如何解决？ **props校验**

**实现步骤**
1. 安装属性校验包：`npm i prop-types`
2. 导入`prop-types` 包
3. 使用 `组件名.propTypes = {}` 给组件添加校验规则

**核心代码**
```JSX
import PropTypes from 'prop-types'

const List = props => {
  const arr = props.colors
  const lis = arr.map((item, index) => <li key={index}>{item.name}</li>)
  return <ul>{lis}</ul>
}

List.propTypes = {
  colors: PropTypes.array
}
```

## props校验-规则说明
`目标任务:`掌握props常见的规则

**四种常见结构**
1. 常见类型：array、bool、func、number、object、string
2. React元素类型：element
3. 必填项：isRequired
4. 特定的结构对象：shape({})

**核心代码**
```JS
// 常见类型
optionalFunc: PropTypes.func,
// 必填 只需要在类型后面串联一个isRequired
requiredFunc: PropTypes.func.isRequired,
// 特定结构的对象
optionalObjectWithShape: PropTypes.shape({
	color: PropTypes.string,
	fontSize: PropTypes.number
})
```

官网文档更多阅读：https://reactjs.org/docs/typechecking-with-proptypes.html

## props校验-默认值
`目标任务:` 掌握如何给组件的props提供默认值
> 通过 defaultProps 可以给组件的props设置默认值，在未传入props的时候生效
### 1. 函数组件
> 直接使用函数参数默认值
```JSX
function List({pageSize = 10}) {
  return (
    <div>
      此处展示props的默认值：{ pageSize }
    </div>
  )
}

// 不传入pageSize属性
<List />
```

### 2.类组件
> 使用类静态属性声明默认值，static defaultProps = {}
```JSX
class List extends Component {
  static defaultProps = {
    pageSize: 10
  }
  render() {
    return (
      <div>
        此处展示props的默认值：{this.props.pageSize}
      </div>
    )
  }
}
<List />
```

### 生命周期 - 挂载阶段
`目标任务:`  能够说出在组件挂载阶段执行的钩子函数和执行时机

![life1.png](https://cdn.nlark.com/yuque/0/2022/png/274425/1654490729034-d2d80cce-7fab-4dd8-bcbc-29e33bdffb63.png#clientId=u3ca1a750-0855-4&crop=0&crop=0&crop=1&crop=1&from=drop&id=u5060710c&name=life1.png&originHeight=320&originWidth=1342&originalType=binary&ratio=1&rotation=0&showTitle=false&size=12812&status=done&style=none&taskId=u930de835-d57a-4e69-ba5a-fc8ff247f9e&title=)

| 钩子 函数         | 触发时机                                                                       | 作用                                                          |
| ----------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------- |
| constructor       | 创建组件时，最先执行，初始化的时候只执行一次                                   | 1. 初始化state  2. 创建 Ref 3. 使用 bind 解决 this 指向问题等 |
| render            | 每次组件渲染都会触发                                                           | 渲染UI（**注意： 不能在里面调用setState()** ）                |
| componentDidMount | 组件挂载（完成DOM渲染）后执行，初始化的时候执行一次 **（类似于Vue的mounted）** | 1. 发送网络请求   2.DOM操作                                   |

### 生命周期 - 更新阶段
`目标任务:`  能够说出组件的更新阶段的钩子函数以及执行时机

![life2.png](https://cdn.nlark.com/yuque/0/2022/png/274425/1654490742583-b933202d-3de7-41ae-b9ba-75ae1d2af34c.png#clientId=u3ca1a750-0855-4&crop=0&crop=0&crop=1&crop=1&from=drop&id=u16a98d25&name=life2.png&originHeight=261&originWidth=1331&originalType=binary&ratio=1&rotation=0&showTitle=false&size=10692&status=done&style=none&taskId=u62f8fb7c-1679-4410-91e8-2652e06036c&title=)

| 钩子函数           | 触发时机                  | 作用                                                         |
| ------------------ | ------------------------- | ------------------------------------------------------------ |
| render             | 每次组件渲染都会触发      | 渲染UI（与 挂载阶段 是同一个render）                         |
| componentDidUpdate | 组件更新后（DOM渲染完毕） | DOM操作，可以获取到更新后的DOM内容，**不要直接调用setState** |

### 生命周期 - 卸载阶段
`目标任务:`  能够说出组件的销毁阶段的钩子函数以及执行时机

| 钩子函数             | 触发时机                 | 作用                               |
| -------------------- | ------------------------ | ---------------------------------- |
| componentWillUnmount | 组件卸载（从页面中消失） | 执行清理工作（比如：清理定时器等） |
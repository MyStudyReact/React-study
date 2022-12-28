# 学习React
> 源码地址：https://gitee.com/react-cp/react-pc-code

> React基础讲义: https://www.yuque.com/fechaichai/qeamqf/xbai87

> React和Mobx讲义: https://www.yuque.com/fechaichai/qeamqf/apomum

> ReactPc项目讲义: https://www.yuque.com/fechaichai/tzzlh1

## React基础
### 环境初始化
#### 使用脚手架创建项目
```sh
$ npx create-react-app react-study
```
> 说明
> 1. npx是执行Node软件包的工具，它从 npm5.2版本开始，就与npm捆绑在一起
> 2. npx create-react-app 是固定命令，`create-react-app`是React脚手架固定的名称
> 3. react-stydy 表示项目名称，可以自定义，保持语义
> 4. npx命令会帮助我们临时安装create-react-app包，然后初始化项目完成之后会自动删掉，所以不需要全局安装create-react-app

### JSX基础
#### 1. JSX中使用js表达式
**语法**
```javascript
{ JS 表达式}
```
**可以使用的表达式**
1. string、number、boolean、null、undefined、object([]/{})
2. 1+2、 'a+b'.split('')、['a','b'].join('-')
3. fn()

**特别注意**
if语句/switch-case 语句/变量声明语句，这些叫做语句，不是表达式，不能出现在{}中！

#### 2.JSX列表渲染
**实现**
使用map方法

#### JSX条件渲染
**实现**
三元表达式（常用）/ 逻辑&&运算

**特别注意**
> 原则：模板中的逻辑尽量保持精简！
> * 复杂的多分支的逻辑 收敛为一个函数
> * 通过一个函数来写分支逻辑
> * 模板中只负责调用


#### 3.JSX样式控制

##### 多个类名进行使用
1. 字符串拼接，双引号里面名字前面要加一个空格
```javascript
<span className={'hate ' + item.attitude === -1 ? 'hated' : ''}>
```
2. 字符串模板拼接,变量前加一个空格
```javascript
<span className={`hate ${item.attitude} === -1 ? 'hated' : ''`}>
```
3. 写成数组逗号隔开，join方法括号里面加一个空格
```javascript
<span className={['hate', item.attitude === -1 ? 'hated' : ''].join(' ')}>
```
**特别注意**
> 类名不用class 用的是className
> 使用比较多的是类名

#### JSX注意事项
`目标任务:`掌握jsx在实际应用时的注意事项
1. JSX必须有一个根节点，如果没有根节点，可以使用`<></>`（幽灵节点）替代
2. 所有的标签必须是闭合，成对闭合或者自闭合
3. JSX中的语法更贴近js语法，属性名采用驼峰名法 `class -> className`  `for -> htmlFor`(label标签的for属性)
4. JSX支持多行（换行），如果需要换行，需要用（）包裹，表示这是一块独立的代码区域，防止bug出现

## React组件基础
> 主要分成 函数组件和类组件两种
**函数组件和类组件的区别**
> 有没有状态--(组件内部可以控制的自己的属性)
- 函数组件没有状态，也叫无状态组件（比如只有模板插槽，props传递）
  - 负责静态结构的展示
- class类组件有状态，也叫有状态组件
  - 提供状态，提供交互

### 函数组件
`目标任务：`能够独立使用函数完成react组件的创建和渲染
**概念**
> 使用 JS 的函数（或箭头函数）创建的组件，就叫做函数组件
**约定说明**
1. 组件的名称必须首字母大写，react内部会根据这个来判断是组件还是普通的HTML标签
2. 函数组件必须有返回值，表示该组件的 UI 结构；如果不需要渲染任何内容，则返回 null
3. 组件就像 HTML 标签一样可以被渲染到页面中。组件表示的是一段结构内容，对于函数组件来说，渲染的内容是函数的返回值就是对应的内容
4. 使用函数名称作为组件标签名称，可以成对出现也可以自闭合

### 类组件
`目标任务:`能够独立完成类组件的创建和渲染
**概念**
> 使用 ES6 的 class 创建的组件，叫做类（class）组件
**约定说明**
1. **类名称也必须以大写字母开头,且为驼峰**
2. 类组件应该继承 React.Component 父类，从而使用父类中提供的方法或属性
3. 类组件必须提供 render 方法render 方法必须有返回值，表示该组件的 UI 结构
4. 类里面不需要用const/let/var 关键词来声明变量和方法

### 函数组件的事件绑定
`目标任务:`能够独立绑定任何事件并能获取到事件对象e
#### 1. 如何绑定事件
- 语法
on + 事件名称 = { 事件处理程序 } ，比如：`<div onClick={ onClick }></div> `
- 注意点
react事件采用驼峰命名法，比如：onMouseEnter、onFocus
#### 2. 获取事件对象
> 获取事件对象e只需要在 事件的回调函数中 补充一个形参e即可拿到
#### 3. 传递额外参数
> 解决思路: 改造事件绑定为箭头函数 在箭头函数中完成参数的传递

### 类组件的事件绑定
> - 整体的套路都是一致的 和函数组件没有太多不同
> - 唯一需要注意的 因为处于class 类环境下 所以定义事件回调函数 以及 绑定它写法上有不同
> - 定义的时候: class Fields语法 (写在定义的class里面)
> - 使用的时候: 需要借助this关键词获取
**特别注意**
> 之所以要采取class Fields写法是为了保证this的指向正确 永远指向当前的组件实例
> 不需要用const/let/var关键词去声明，直接写事件名

### 组件状态
`目标任务:`能够为组件添加状态和修改状态的值
> 一个前提：在React hook出来之前，函数式组件是没有自己的状态的，所以我们统一通过类组件来讲解

![image](https://user-images.githubusercontent.com/54365306/196343150-e91ca8ed-bcfb-4705-b6dc-7ac07a1ff3b7.png)

#### 1. 初始化状态
- 通过class的实例属性state来初始化 
- state的值是一个对象结构，表示一个组件可以有多个数据状态
#### 2. 读取状态
- 通过this.state来获取状态 
#### 3. 修改状态
- 语法
`this.setState({ 要修改的部分数据 })`
- setState方法作用 
  a. 修改state中的数据状态
  b. 更新UI
- 思想
数据驱动视图，也就是只要修改数据状态，那么页面就会自动刷新，无需手动操作dom 
- 注意事项
**不要直接修改state中的值，必须通过setState方法进行修改**
**this问题说明**
> 这里我们作为了解内容，随着js标准的发展，主流的写法已经变成了`class fields`，无需考虑太多this问题

![image](https://user-images.githubusercontent.com/54365306/196343307-ba185bfe-35fc-40d8-96d4-114b6560f79e.png)


### React的状态不可变
`目标任务:`能够理解不可变的意义并且知道在实际开发中如何修改状态
> 概念：不要直接修改状态的值，而是基于当前状态创建新的状态值
> 类似于微信小程序修改值 https://blog.csdn.net/weihaifeng163/article/details/122696014

### 表单处理
`目标任务:`能够使用受控组件的方式获取文本框的值

**使用React处理表单元素，一般有俩种方式：**
1. 受控组件 （推荐使用）
2. 非受控组件 （了解）
#### 1. 受控表单组件
> 什么是受控组件？  input框自己的状态被React组件状态控制
> React组件的状态的地方是在state中，input表单元素也有自己的状态是在value中，React将state与表单元素的值（value）绑定到一起，由state的值来控制表单元素的值，从而保证单一数据源特性
**实现步骤**
以获取文本框的值为例，受控组件的使用步骤如下：
1. 在组件的state中声明一个组件的状态数据
2. 将状态数据设置为input标签元素的value属性的值
3. 为input添加change事件，在事件处理程序中，通过事件对象e获取到当前文本框的值（即用户当前输入的值）
4. 调用setState方法，将文本框的值作为state状态的最新值

#### 2. 非受控表单组件
> 什么是非受控组件？
> 非受控组件就是通过手动操作dom的方式获取文本框的值，文本框的状态不受react组件的state中的状态控制，直接通过原生dom获取输入框的值

**实现步骤**
1. 导入createRef 函数
2. 调用createRef函数，创建一个ref对象，存储到名为msgRef的实例属性中
3. 为input添加ref属性，值为msgRef
4. 在按钮的事件处理程序中，通过msgRef.current即可拿到input对应的dom元素，而其中msgRef.current.value拿到的就是文本框的值

## React组件通信
### 组件通信的意义
`目标任务:`了解为什么需要组件通信

> 组件是独立且封闭的单元，默认情况下组件只能使用自己的数据（state）
> 组件化开发的过程中，完整的功能会拆分多个组件，在这个过程中不可避免的需要互 相传递一些数据
> 为了能让各组件之间可以进行互相沟通，数据传递，这个过程就是组件通信
1. 父子关系 -  **最重要的**
2. 兄弟关系 -  自定义事件模式产生技术方法 eventBus  /  通过共同的父组件通信
3. 其它关系 -  **mobx / redux / zustand / 基于hook的方案**

### 父传子实现
`目标任务:` 实现父子通信中的父传子，把父组件中的数据传给子组件

**实现步骤**
1.  父组件提供要传递的数据  -  `state`
2.  给子组件标签`添加属性`值为 state中的数据 
3.  子组件中通过 `props` 接收父组件中传过来的数据 
  a. 类组件使用this.props获取props对象
  b. 函数式组件直接通过参数获取props对象

### props说明
`目标任务:`知道props传递时的一些注意事项
1.  props是只读对象（readonly）--和`Vue`一样
根据单项数据流的要求，子组件只能读取props中的数据，不能进行修改(谁的数据谁改)
2. props可以传递任意数据
数字、字符串、布尔值、数组、对象、`函数`、`JSX`
> JSX相当于Vue的插槽

### 子传父实现
`目标任务:`实现父子通信中的子传父

> **口诀：** 父组件给子组件传递回调函数，子组件调用

**实现步骤**
1. 父组件提供一个回调函数 - 用于接收数据
2. 将函数作为属性的值，传给子组件
3. 子组件通过props调用 回调函数
4. 将子组件中的数据作为参数传递给回调函数

### 兄弟组件通信
`目标任务:`实现兄弟组件之间的通信
**核心思路：** 通过状态提升机制，利用共同的父组件实现兄弟通信

**实现步骤**
1. 将共享状态提升到最近的公共父组件中，由公共父组件管理这个状态 
  - 提供共享状态
  - 提供操作共享状态的方法
2. 要接收数据状态的子组件通过 props 接收数据
3. 要传递数据状态的子组件通过props接收方法，调用方法传递数据

### 跨组件通信Context
> **类似于`Vue`的 `provide`和`inject`**
`目标任务:` 了解Context机制解决的问题和使用步骤

>上图是一个react形成的嵌套组件树，如果我们想从App组件向任意一个下层组件传递数据，该怎么办呢？目前我们能采取的方式就是一层一层的props往下传，显然很繁琐
>那么，Context 提供了一个无需为每层组件手动添加 props，就能在组件树间进行数据传递的方法

**实现步骤**
1. 创建Context对象 导出 Provider 和 Consumer对象 
```JavaScript
const { Provider, Consumer } = createContext()
```
 
2. 使用Provider包裹上层组件提供数据 
```JSX
<Provider value={this.state.message}>
    {/* 根组件 */}
</Provider>
```
 
3. 需要用到数据的组件使用Consumer包裹获取数据 
```JSX
<Consumer >
    {value => /* 基于 context 值进行渲染*/}
</Consumer>
```

## React组件进阶

### children属性
`目标任务:`掌握props中children属性的用法

**children属性是什么**
> 表示该组件的子节点，只要组件内部有子节点，props中就有该属性
**children可以是什么**
1. 普通文本
2. 普通标签元素
3. 函数 / 对象
4. JSX

`目的`：高阶组件（高阶函数）

### props校验-场景和使用
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

### props校验-规则说明
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

### props校验-默认值
`目标任务:` 掌握如何给组件的props提供默认值
> 通过 defaultProps 可以给组件的props设置默认值，在未传入props的时候生效
#### 1. 函数组件
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

## 生命周期 - 挂载阶段
`目标任务:`  能够说出在组件挂载阶段执行的钩子函数和执行时机

![life1.png](https://cdn.nlark.com/yuque/0/2022/png/274425/1654490729034-d2d80cce-7fab-4dd8-bcbc-29e33bdffb63.png#clientId=u3ca1a750-0855-4&crop=0&crop=0&crop=1&crop=1&from=drop&id=u5060710c&name=life1.png&originHeight=320&originWidth=1342&originalType=binary&ratio=1&rotation=0&showTitle=false&size=12812&status=done&style=none&taskId=u930de835-d57a-4e69-ba5a-fc8ff247f9e&title=)

| 钩子 函数         | 触发时机                                                                       | 作用                                                          |
| ----------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------- |
| constructor       | 创建组件时，最先执行，初始化的时候只执行一次                                   | 1. 初始化state  2. 创建 Ref 3. 使用 bind 解决 this 指向问题等 |
| render            | 每次组件渲染都会触发                                                           | 渲染UI（**注意： 不能在里面调用setState()** ）                |
| componentDidMount | 组件挂载（完成DOM渲染）后执行，初始化的时候执行一次 **（类似于Vue的mounted）** | 1. 发送网络请求   2.DOM操作                                   |

## 生命周期 - 更新阶段
`目标任务:`  能够说出组件的更新阶段的钩子函数以及执行时机

![life2.png](https://cdn.nlark.com/yuque/0/2022/png/274425/1654490742583-b933202d-3de7-41ae-b9ba-75ae1d2af34c.png#clientId=u3ca1a750-0855-4&crop=0&crop=0&crop=1&crop=1&from=drop&id=u16a98d25&name=life2.png&originHeight=261&originWidth=1331&originalType=binary&ratio=1&rotation=0&showTitle=false&size=10692&status=done&style=none&taskId=u62f8fb7c-1679-4410-91e8-2652e06036c&title=)

| 钩子函数           | 触发时机                  | 作用                                                         |
| ------------------ | ------------------------- | ------------------------------------------------------------ |
| render             | 每次组件渲染都会触发      | 渲染UI（与 挂载阶段 是同一个render）                         |
| componentDidUpdate | 组件更新后（DOM渲染完毕） | DOM操作，可以获取到更新后的DOM内容，**不要直接调用setState** |

## 生命周期 - 卸载阶段
`目标任务:`  能够说出组件的销毁阶段的钩子函数以及执行时机

| 钩子函数             | 触发时机                 | 作用                               |
| -------------------- | ------------------------ | ---------------------------------- |
| componentWillUnmount | 组件卸载（从页面中消失） | 执行清理工作（比如：清理定时器等） |


## Hooks基础
### Hooks概念理解
`本节任务:` 能够理解hooks的概念及解决的问题
#### 1. 什么是hooks
Hooks的本质：一套能够使函数组件更强大，更灵活的“钩子”

React体系里组件分为 类组件 和 函数组件
经过多年的实战，函数组件是一个更加匹配React的设计理念 UI = f(data)，也更有利于逻辑拆分与重用的组件表达形式，而先前的函数组件是不可以有自己的状态的，为了能让函数组件可以拥有自己的状态，所以从react v16.8开始，Hooks应运而生

**注意点：**
1. 有了hooks之后，为了兼容老版本，class类组件并没有被移除，俩者都可以使用
2. 有了hooks之后，不能在把函数成为无状态组件了，因为hooks为函数组件提供了状态
3. hooks只能在函数组件中使用

#### 2. Hooks解决了什么问题
> Hooks的出现解决了俩个问题    1. 组件的状态逻辑复用  2.class组件自身的问题
1.  组件的逻辑复用
在hooks出现之前，react先后尝试了 mixins混入，HOC高阶组件，render-props等模式
但是都有各自的问题，比如mixin的数据来源不清晰，高阶组件的嵌套问题等等 
2.  class组件自身的问题
class组件就像一个厚重的‘战舰’ 一样，大而全，提供了很多东西，有不可忽视的学习成本，比如各种生命周期，this指向问题等等，而我们更多时候需要的是一个轻快灵活的'快艇' 

#### 3.Hooks优势总结
1. 告别难以理解的Class
2. 解决业务逻辑难以拆分的问题
3. 使状态逻辑复用变得更简单
4. 函数组件在设计上，更加契合React的理念

### useState
#### 1. 基础使用
`本节任务:` 能够学会useState的基础用法
**作用**
> useState为函数组件提供状态（state）
**使用步骤**
1. 导入 useState 函数
2. 调用 useState 函数，并传入状态的初始值
3. 从useState函数的返回值中，拿到状态和修改状态的方法
4. 在JSX中展示状态
5. 调用修改状态的方法更新状态

#### 2. 状态的读取和修改
`本节任务:` 能够理解useState下状态的读取和修改
**读取状态**
> 该方式提供的状态，是函数内部的局部变量，可以在函数内的任意位置使用
**修改状态**
1. setCount是一个函数，参数表示最新的状态值
2. 调用该函数后，将使用新值替换旧值
3. 修改状态后，由于状态发生变化，会引起视图变化

**注意事项**
> 修改状态的时候，一定要使用新的状态替换旧的状态，不能直接修改旧的状态，尤其是引用类型

#### 3. 组件的更新过程**
`本节任务:`能够理解使用hook之后组件的更新情况
函数组件使用 **useState** hook 后的执行过程，以及状态值的变化

- 组件第一次渲染 
  a. 从头开始执行该组件中的代码逻辑
  b. 调用 useState(0) 将传入的参数作为状态初始值，即：0
  c. 渲染组件，此时，获取到的状态 count 值为： 0
- 组件第二次渲染 
  a. 点击按钮，调用 setCount(count + 1) 修改状态，因为状态发生改变，所以，该组件会重新渲染
  b. 组件重新渲染时，会再次执行该组件中的代码逻辑
  c. 再次调用 useState(0)，此时 React 内部会拿到最新的状态值而非初始值，比如，该案例中最新的状态值为 1
  d. 再次渲染组件，此时，获取到的状态 count 值为：1

**注意：**useState 的初始值(参数)只会在组件第一次渲染时生效。**也就是说，以后的每次渲染，useState 获取到都是最新的状态值，React 组件会记住每次最新的状态值

#### 4. 使用规则
`本节任务:`能够记住useState的使用规则

1. `useState`函数可以执行多次，每次执行互相独立，每调用一次为函数组件提供一个状态 
2. `useState`注意事项 
  a.  只能出现在函数组件或者其他hook函数中 
  b.  不能嵌套在if/for/其它函数中（react按照hooks的调用顺序识别每一个hook） 
  c.  可以通过开发者工具查看hooks状态 

### useEffect
#### 1. 理解函数副作用
`本节任务:`能够理解副作用的概念

**什么是副作用**
> 副作用是相对于主作用来说的，一个函数除了主作用，其他的作用就是副作用。对于 React 组件来说，**主作用就是根据数据（state/props）渲染 UI**，除此之外都是副作用（比如，手动修改 DOM）

**常见的副作用**
1. 数据请求 ajax发送
2. 手动修改dom
3. localstorage操作

useEffect函数的作用就是为react函数组件提供副作用处理的！

#### 2. 基础使用
`本节任务:` 能够学会useEffect的基础用法并且掌握默认的执行执行时机

**作用**
> 为react函数组件提供副作用处理

**使用步骤**
1. 导入 useEffect 函数
2. 调用 useEffect 函数，并传入回调函数
3. 在回调函数中编写副作用处理（dom操作）
4. 修改数据状态
5. 检测副作用是否生效

#### 3. 依赖项控制执行时机
`本节任务:` 能够学会使用依赖项控制副作用的执行时机

##### 1. 不添加依赖项

> 组件首次渲染执行一次，以及不管是哪个状态更改引起组件更新时都会重新执行
> 1. 组件初始渲染
> 2. 组件更新 （不管是哪个状态引起的更新）
```JSX
useEffect(()=>{
    console.log('副作用执行了')
})
```

##### 2. 添加空数组
组件只在首次渲染时执行一次
```JSX
useEffect(()=>{
	 console.log('副作用执行了')
},[])
```

##### 3. 添加特定依赖项
> 副作用函数在首次渲染时执行，在依赖项发生变化时重新执行
```JSX
useEffect(() => {    
  console.log('副作用执行了')  
}, [count])
```

**注意事项**
useEffect 回调函数中用到的数据（比如，count）就是依赖数据，就应该出现在依赖项数组中，如果不添加依赖项就会有bug出现

##### 4. 清理副作用
> 如果想要清理副作用 可以在副作用函数中的末尾return一个新的函数，在新的函数中编写清理副作用的逻辑
> 注意执行时机为：
> 1. 组件卸载时自动执行
> 2. 组件更新时，下一个useEffect副作用函数执行之前自动执行
```JSX
import { useEffect, useState } from "react"

const App = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const timerId = setInterval(() => {
      setCount(count + 1)
    }, 1000)
    return () => {
      // 用来清理副作用的事情
      clearInterval(timerId)
    }
  }, [count])
  return (
    <div>
      {count}
    </div>
  )
}

export default App
```

## Hooks进阶
### useState - 回调函数的参数
`本节任务:`能够理解useState回调函数作为参数的使用场景

**使用场景**
参数只会在组件的初始渲染中起作用，后续渲染时会被忽略。如果初始 state 需要通过计算才能获得，则可以传入一个函数，在函数中计算并返回初始的 state，此函数只在初始渲染时被调用

**语法**
```JSX
const [name, setName] = useState(()=>{   
  // 编写计算逻辑    return '计算之后的初始值'
})
```

**语法规则**
1. 回调函数return出去的值将作为 name 的初始值
2. 回调函数中的逻辑只会在组件初始化的时候执行一次

**语法选择**
1. 如果就是初始化一个普通的数据 直接使用 useState(普通数据) 即可
2. 如果要初始化的数据无法直接得到需要通过计算才能获取到，使用useState(()=>{})

### useEffect - 发送网络请求
`本节任务:`能够掌握使用useEffect hook发送网络请求
**使用场景**
> 如何在useEffect中发送网络请求，并且封装同步 async await操作
**语法要求**
> 不可以直接在useEffect的回调函数外层直接包裹 await ，因为**useEffect是一个同步函数**
```JavaScript
useEffect(async ()=>{    
    const res = await axios.get('http://geek.itheima.net/v1_0/channels')   
    console.log(res)
},[])
```
**正确写法**
> 在内部单独定义一个函数，然后把这个函数包装成同步
```JSX
useEffect(()=>{   
    async function fetchData(){      
       const res = await axios.get('http://geek.itheima.net/v1_0/channels')                            console.log(res)   
    } 
},[])
```

### useRef
`本节任务:`能够掌握使用useRef获取真实dom或组件实例的方法
**使用场景**
> 在函数组件中获取真实的dom元素对象或者是组件对象
## 使用步骤 ##
1. 导入 useRef 函数
2. 执行 useRef 函数并传入null，返回值为一个对象 内部有一个current属性存放拿到的dom对象（组件实例）
通过ref 绑定 要获取的元素或者组件
3. 函数组件由于没有实例，不能使用ref获取，如果想获取组件实例，必须是类组件

### seContext
`本节任务:`能够掌握hooks下的context使用方式

**实现步骤**
1. 使用createContext 创建Context对象
2. 在顶层组件通过Provider 提供数据
3. 在底层组件通过useContext函数获取数据

# React Hook 入门到精通（ useState | useReduce、useEffect、useContext、useRef、useCallback | useMemo ）

**Hook 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。**
## useState | useReducer 的使用
```JSX
import React, { useState, useReducer } from 'react'
 
// 创建reduce
const ageReduce = (state, action) => {
  switch (action.type) {
    case 'add':
      return state + 1
    case 'minus':
      return state - 1
    default:
      return state
  }
}
 
const StateReduce = function () {
  // 基础数据类型推荐使用useState Number、String、Boolean
  const [count, setCount] = useState(0)
 
  // 复杂类型推荐使用useReduce 如 Object、Array  对应的属性更容易操作
  const [age, ageDispatch] = useReducer(ageReduce, 0)
 
  const addCount = () => {
    // 第一更新种方式
    // setCount(count + 1)
 
    // 第二种更新方式
    setCount(count => count + 1)
  }
 
  /**
   * @type 操作类型
   */
  const setAge = type => {
    ageDispatch({ type })
  }
 
  return (
    <div>
      <div>count：{count}</div>
      <button onClick={addCount}>addCount</button>
      <div>age：{age}</div>
      <button onClick={setAge.bind(this, 'add')}>addAge</button>
      <button onClick={setAge.bind(this, 'minus')}>minusAge</button>
    </div>
  )
}
 
export default StateReduce
```

## useEffect 的使用
**你可以把 useEffect Hook 看做 componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合。**
```JSX
import React, { useState, useEffect } from 'react'
 
const Effect = function () {
  const [count, setCount] = useState(0)
  const [other, setOther] = useState(10)
 
  //不传第二个参数时每次更新都会执行
  useEffect(() => {
    console.log('每次更新都会执行，相当于didmount、didUpdate')
  })
 
  //第二个参数为某个属性时当属性改变执行
  useEffect(() => {
    console.log('Count改变时我出发----count改变了')
  }, [count])
 
  useEffect(() => {
    console.log('Other改变时我出发----other改变了')
  }, [other])
 
  //第二个参数为[]空数组时相当于是初始化执行一次
  useEffect(() => {
    console.log('只在初始化时候执行，相当于didMount')
  }, [])
 
  //返回值相当于销毁 也可用于关闭页面的监听订阅和定时器
  useEffect(() => {
    return () => {
      console.log('我销毁了！-------------------')
    }
  }, [])
 
  const handleClick = () => {
    setCount(count + 2)
  }
 
  const handleOtherClick = () => {
    setOther(other + 1)
  }
 
  return (
    <div>
      <div>Count：{count}</div>
      <button onClick={handleClick}>操作触发Count</button>
      <div>Other：{other}</div>
      <button onClick={handleOtherClick}>操作触发Other</button>
    </div>
  )
}
 
export default Effect
```

## useContext 的使用
```JSX
import React, { Component, createContext, useContext } from 'react'
 
const AppContext = createContext()
 
export default function Context() {
  return (
    <AppContext.Provider
      value={{
        context: '测试数据',
        location: '我来自父组件的context',
      }}
    >
      <Foo />
      <Bar />
      <Baz />
    </AppContext.Provider>
  )
}
 
 
/**
 * 类组件的调用方法:
 * @Foo 原始的标签调用方式 使用 AppContext.Consumer 通过返回值拿到。
 * @Bar 使用static接收 是标签的简化版更方便操作。
 * 函数组件的使用:
 * @Baz 函数hook方法或比较简洁清爽。
*/
 
class Foo extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {value => (
          <div>
            类组件标签获取方法：{value.context}、{value.location}
          </div>
        )}
      </AppContext.Consumer>
    )
  }
}
 
class Bar extends Component {
  static contextType = AppContext
  render() {
    const { context, location } = this.context
    return (
      <div>
        类组件通过static获取：{context}、{location}
      </div>
    )
  }
}
 
function Baz() {
  const { context, location } = useContext(AppContext)
  return (
    <div>
      useContext函数获取：{context}、{location}
    </div>
  )
}
```

## useRef 的使用
```JSX
import React, { Component, createRef, useRef, forwardRef } from 'react'
 
export default function Ref () {
  const inputRef = useRef()
 
  // 父组件的ref 子组件绑定 forwardRef 就能获取子组件的Ref
  const focusInput = () => {
    console.log(inputRef.current)
    inputRef.current.focus()
  }
  return (
    <div>
      <Foo />
      <CreateRefFoo />
      <FooFunc ref={inputRef} />
      <button onClick={focusInput}>父组件聚焦useRef</button>
    </div>
  )
}
/**
 * 类组件获取ref
 * @Foo 类组件获取ref
 * @CreateRefFoo 通过 createRef 来获取
 * @FooFunc 函数组件获取ref
 * @forwardRef 转发Ref
 */
class Foo extends Component {
  refInput = input => {
    this.inputRef = input
  }
 
  focusInput = () => {
    this.inputRef.focus()
  }
 
  render() {
    return (
      <div>
        <input ref={this.refInput} />
        <button onClick={this.focusInput}>聚焦Component</button>
      </div>
    )
  }
}
 
class CreateRefFoo extends Component {
  inputRef = createRef()
 
  focusInput = () => {
    this.inputRef.current.focus()
  }
 
  render() {
    return (
      <div>
        <input ref={this.inputRef} />
        <button onClick={this.focusInput}>聚焦Component-createRef</button>
      </div>
    )
  }
}
 
//forwardRef 转发Ref
const FooFunc = forwardRef((props,inputRef) =>{
    // const inputRef = useRef()
  
    const focusInput = () => {
      inputRef.current.focus()
    }
    return (
      <div>
        <input ref={inputRef} />
        <button onClick={focusInput}>聚焦useRef</button>
      </div>
    )
  }
)
```

## useCallback | useMemo 的使用和区别
```JSX
import React, { useState, useCallback, useMemo, PureComponent, memo } from 'react'
 
/**
 * 作用区别 @PureComponent === @memo 用于组件的优化使用
 * @useCallback @useMemo 区别在于返回值上 用于固定值或者固定函数引用传给子组件 都可用于初次渲染
 * useCallback(fn, deps) 相当于 useMemo(() => fn, deps)。
 * @useCallback 返回一个函数方法
 * @useMemo 返回一个函数执行完成的值
 */  
 
const List = memo(props => {
  console.log('renderList')
  return (
    <div>
      {props.count}
      <url>{props.render}</url>
    </div>
  )
})
 
class FooList extends PureComponent {
  render() {
    console.log('renderFooList')
    return <div>{this.props.count}</div>
  }
}
 
const CallbackMemo = props => {
  const [range, setRange] = useState({ min: 0, max: 1000 })
  const [count, setCount] = useState(0)
 
 
  // const render = useCallback(() => {
  //   let list = []
  //   for (let i = 0; i < range.max; i++) {
  //     list.push(<li key={i}>{i}</li>)
  //   }
  //   return list
  // }, [range])
  const render = useMemo(() => {
    let list = []
    for (let i = 0; i < range.max; i++) {
      list.push(<li key={i}>{i}</li>)
    }
    return list
  }, [range])
 
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>setCount</button>
      <button onClick={() => setRange(range => ({ ...range, max: range.max + 1 }))}>
        setRange
      </button>
      <List count={1} render={render} />
      <FooList count={1} />
    </div>
  )
}
 
export default CallbackMemo
```


# Router
## 1. 准备项目环境
> create-react-app(cra) 是用 webpack 打包的
> vite: 可以实现cra同等能力 但是速度更快的打包工具  [尤大]
> 使用vite新增一个React项目，然后安装一个v6版本的react-router-dom
```bash
# 创建react项目
$ npm create vite react-router --template react

# 安装所有依赖包
$ npm i

# 启动项目
$ npm run dev

# 安装react-router包
$ npm i react-router-dom@6
```
## 2. 基础使用
> 需求:  准备俩个按钮，点击不同按钮切换不同组件内容的显示
> 实现步骤：
> 1. 导入必要的路由router内置组件
> 2. 准备俩个React组件
> 3. 按照路由的规则进行路由配置

```JSX app.jsx
// 引入必要的内置组件
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

// 准备俩个路由组件

const Home = () => <div>this is home</div>
const About = () => <div>this is about</div>

function App() {
  return (
    <div className="App">
      {/* 按照规则配置路由 */}
      <BrowserRouter>
        <Link to="/">首页</Link>
        <Link to="/about">关于</Link>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
```
**注意：如果外部引入，引用的两个组件的后缀为jsx**

## 3. 核心内置组件说明
### 1. BrowerRouter
> 作用: 包裹整个应用，一个React应用只需要使用一次

| **模式**           | **实现方式**                   | **路由url表现**               |
| ------------------ | ------------------------------ | ----------------------------- |
| HashRouter         | 监听url hash值实现             | http://localhost:3000/#/about |
| BrowerRouter(推荐) | h5的 history.pushState API实现 | http://localhost:3000/about   |

## 2. Link
> 作用: 用于指定导航链接，完成声明式的路由跳转  类似于 <router-link/>

![image.png](https://cdn.nlark.com/yuque/0/2022/png/274425/1659241017118-6434a4dd-8e94-4f36-8aab-0cb8554c1c80.png#clientId=uef430495-3869-4&crop=0&crop=0&crop=1&crop=1&errorMessage=unknown%20error&from=paste&height=219&id=u5773ee5c&margin=%5Bobject%20Object%5D&name=image.png&originHeight=292&originWidth=1440&originalType=binary&ratio=1&rotation=0&showTitle=false&size=49064&status=error&style=none&taskId=u3651ddc2-ea67-4aff-bfc9-4dbb4d25806&title=&width=1080)<br />这里to属性用于指定路由地址，表示要跳转到哪里去，Link组件最终会被渲染为原生的a链接

## 3. Routes
> 作用: 提供一个路由出口，组件内部会存在多个内置的Route组件，满足条件的路由会被渲染到组件内部
> 类比  router-view

![image.png](https://cdn.nlark.com/yuque/0/2022/png/274425/1659241157681-d90d2517-03e5-4126-a04e-ac36802cd7ee.png#clientId=uef430495-3869-4&crop=0&crop=0&crop=1&crop=1&errorMessage=unknown%20error&from=paste&height=281&id=u7a631604&margin=%5Bobject%20Object%5D&name=image.png&originHeight=374&originWidth=998&originalType=binary&ratio=1&rotation=0&showTitle=false&size=56374&status=error&style=none&taskId=u4d8d3f06-54e2-4d5d-82f6-9a8f342dd7c&title=&width=749)

## 4. Route
> 作用: 用于定义路由路径和渲染组件的对应关系  [element：因为react体系内 把组件叫做react element]

![image.png](https://cdn.nlark.com/yuque/0/2022/png/274425/1659241285534-d317335f-03ef-4792-b68e-2735852e53f9.png#clientId=uef430495-3869-4&crop=0&crop=0&crop=1&crop=1&errorMessage=unknown%20error&from=paste&height=164&id=u5f6d9be0&margin=%5Bobject%20Object%5D&name=image.png&originHeight=218&originWidth=1048&originalType=binary&ratio=1&rotation=0&showTitle=false&size=32559&status=error&style=none&taskId=u32c89a35-dce6-4e8b-96d9-dc523fd5794&title=&width=786)<br />其中path属性用来指定匹配的路径地址，element属性指定要渲染的组件，图中配置的意思为: 当url上访问的地址为 /about 时，当前路由发生匹配，对应的About组件渲染

## 4. 编程式导航<br /><br />
> 声明式 【 Link to】  vs  编程式 【调用路由方法进行路由跳转】
> 概念:  通过js编程的方式进行路由页面跳转，比如说从首页跳转到关于页
> 实现步骤：
> 1. 导入一个 useNavigate 钩子函数
> 2. 执行 useNavigate 函数 得到 跳转函数
> 3. 在事件中执行跳转函数完成路由跳转


```jsx
// 导入useNavigate函数
import { useNavigate } from 'react-router-dom'
const Home = () => {
  // 执行函数
  const navigate = useNavigate()
  return (
    <div>
      Home
      <button onClick={ ()=> navigate('/about') }> 跳转关于页 </button>
    </div>
  )
}

export default Home
```
注: 如果在跳转时不想添加历史记录，可以添加额外参数replace 为true
```javascript
navigate('/about', { replace: true } )
```
## 5. 路由传参
> 场景：跳转路由的同时，有时候要需要传递参数  

### 1. searchParams传参
**路由传参**
![image.png](https://cdn.nlark.com/yuque/0/2022/png/274425/1659242510791-9cd4d107-f2fc-47ff-87dc-af9418940ae9.png#clientId=uef430495-3869-4&crop=0&crop=0&crop=1&crop=1&errorMessage=unknown%20error&from=paste&id=u771d1d6e&margin=%5Bobject%20Object%5D&name=image.png&originHeight=186&originWidth=639&originalType=binary&ratio=1&rotation=0&showTitle=false&size=16426&status=error&style=none&taskId=u3d8d8118-1b96-46ce-b826-4ac129a479f&title=)

**路由取参**
![image.png](https://cdn.nlark.com/yuque/0/2022/png/274425/1659242531089-90eb0bbb-1aa8-4bcf-89dd-5332c6d49ab2.png#clientId=uef430495-3869-4&crop=0&crop=0&crop=1&crop=1&errorMessage=unknown%20error&from=paste&id=u95a2584a&margin=%5Bobject%20Object%5D&name=image.png&originHeight=222&originWidth=640&originalType=binary&ratio=1&rotation=0&showTitle=false&size=21488&status=error&style=none&taskId=u4c83abf4-e892-40cb-83ef-cadf42459cb&title=)

### 2. params传参
**路由传参**
![image.png](https://cdn.nlark.com/yuque/0/2022/png/274425/1659242608059-40cce1de-3700-422d-b4ef-b4ada61c4152.png#clientId=uef430495-3869-4&crop=0&crop=0&crop=1&crop=1&errorMessage=unknown%20error&from=paste&id=u647c4d42&margin=%5Bobject%20Object%5D&name=image.png&originHeight=186&originWidth=640&originalType=binary&ratio=1&rotation=0&showTitle=false&size=14036&status=error&style=none&taskId=u15d870aa-e3d9-4a27-8e31-a76577c86fd&title=)

**路由取参**
![image.png](https://cdn.nlark.com/yuque/0/2022/png/274425/1659242647823-818d12d4-1be8-4e2a-bbe6-2bcf8ddd614c.png#clientId=uef430495-3869-4&crop=0&crop=0&crop=1&crop=1&errorMessage=unknown%20error&from=paste&id=u5a55485a&margin=%5Bobject%20Object%5D&name=image.png&originHeight=222&originWidth=640&originalType=binary&ratio=1&rotation=0&showTitle=false&size=17807&status=error&style=none&taskId=ucf1c097d-4c38-42ec-b1b1-e7320f53d50&title=)

## 6. 嵌套路由
> 场景：在我们做的很多的管理后台系统中，通常我们都会设计一个Layout组件，在它内部实现嵌套路由

![无标题-2022-07-27-1257.png](https://cdn.nlark.com/yuque/0/2022/png/274425/1659243096808-094c30b7-53d4-4f34-ab2a-3e6ad06e3aac.png#clientId=uef430495-3869-4&crop=0&crop=0&crop=1&crop=1&errorMessage=unknown%20error&from=drop&height=520&id=u3a8e8d6a&margin=%5Bobject%20Object%5D&name=%E6%97%A0%E6%A0%87%E9%A2%98-2022-07-27-1257.png&originHeight=693&originWidth=995&originalType=binary&ratio=1&rotation=0&showTitle=false&size=808064&status=error&style=none&taskId=u7f5e741d-e63c-45f7-9a8e-6c48e23979c&title=&width=746)<br />实现步骤：

1. App.js中定义嵌套路由声明
2. Layout组件内部通过 <Outlet/> 指定二级路由出口

- App.js组件中定义路由嵌套关系
```jsx
<Routes>
  <Route path="/"  element={<Layout/>}>
    <Route path="board" element={ <Board/> } />
    <Route path="article" element={ <Article/> } />
  </Route>
   { /* 省略部分  */ }
</Routes>
```

- Layout.js组件中使用 Outlet 组件添加二级路由出口
```jsx
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      layout
      { /* 二级路由的path等于 一级path + 二级path  */ }
      <Link to="/board">board</Link>
      <Link to="/article">article</Link>
      { /* 二级路由出口 */ }
      <Outlet/>
    </div>
  )
}
export default Layout
```

## 7. 默认二级路由
> 场景: 应用首次渲染完毕就需要显示的二级路由
> 实现步骤:
> 1. 给默认二级路由标记index属性
> 2. 把原本的路径path属性去掉

```jsx
<Routes>
  <Route path="/"  element={<Layout/>}>
    <Route index element={ <Board/> } />
    <Route path="article" element={ <Article/> } />
  </Route>
</Routes>
```
```jsx
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      layout
      { /* 默认二级不再具有自己的路径  */ }
      <Link to="/">board</Link>
      <Link to="/article">article</Link>
      { /* 二级路由出口 */ }
      <Outlet/>
    </div>
  )
}
```

## 8. 404路由配置
> 场景：当url的路径在整个路由配置中都找不到对应的path，使用404兜底组件进行渲染

1- 准备一个NotFound组件
```jsx
const NotFound = () => {
  return <div>this is NotFound</div>
}

export default NotFound
```
```jsx
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Board />} />
      <Route path="article" element={<Article />} />
    </Route>
    <Route path="*" element={<NotFound />}></Route>
  </Routes>
</BrowserRouter>
```

## 9. 集中式路由配置
> 场景: 当我们需要路由权限控制点时候, 对路由数组做一些权限的筛选过滤，所谓的集中式路由配置就是用一个数组统一把所有的路由对应关系写好替换 本来的Roues组件
```JSX
import { BrowserRouter, Routes, Route, useRoutes } from 'react-router-dom'

import Layout from './pages/Layout'
import Board from './pages/Board'
import Article from './pages/Article'
import NotFound from './pages/NotFound'

// 1. 准备一个路由数组 数组中定义所有的路由对应关系
const routesList = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        element: <Board />,
        index: true, // index设置为true 变成默认的二级路由
      },
      {
        path: 'article',
        element: <Article />,
      },
    ],
  },
  // 增加n个路由对应关系
  {
    path: '*',
    element: <NotFound />,
  },
]

// 2. 使用useRoutes方法传入routesList生成Routes组件
function WrapperRoutes() {
  let element = useRoutes(routesList)
  return element
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* 3. 替换之前的Routes组件 */}
        <WrapperRoutes />
      </BrowserRouter>
    </div>
  )
}

export default App
```
## 10.路由懒加载
### 1.React.lazy
> - 通过lazy() api来动态import需要懒加载的组件
> - import的组件目前只支持export default的形式导出
> - Suspense来包裹懒加载的组件进行加载，可以设置fallback现实加载中效果
> - React.lazy可以结合Router来对模块进行懒加载

```JSX
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Suspense, lazy } from 'react';
const Home = lazy(() => import('./routes/Home'))
const AnyComponent = lazy(() => import('./routes/AnyComponent'))
 
...
return (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/anyManage" component={AnyComponent}/>
        ...
      </Switch>
    </Suspense>
  </Router>
)
```

### 2.react-loadable
> react-loadable是以组件级别来分割代码的，这意味着，我们不仅可以根据路由按需加载，还可以根据组件按需加载，使用方式和路由分割一样，只用修改组件的引入方式即可
#### 1.安装
```bash
npm i react-loadable
```
#### 2、使用
```JSX
import React from 'react';
import Loadable from 'react-loadable';
	
const LoadableComponent = Loadable({
	loader: () => import('需要加载的异步组件路径'),
	loading(){
	    return 加载过程中显示的内容
	},
});
	
export default ()=><LoadableComponent />
```
### 3、将原本路由组件替换成改异步组件
> 将原本导入的组件换成该组件即可
	
### 4、若原本路由组件使用了路由的属性(props.history等)
> 在换成异步组件的时候,本身要使用withRouter导入路由组件的属性
> 因为现在的路由组件是异步组件

**代码示例:**
```JSX
// 路由懒加载（异步组件）
import Loadable from 'react-loadable';
//通用过场组件
const LoadingComponent = () => {
  return (
    <div>loading</div>
  )
}
...
export default (loader, loading=LoadingComponent) => {
  return Loadable({
    loader,
    loading
  })
}
 
//Route中调用
import { BrowserRouter, Route } from 'react-router-dom'
const loadable from './loadable';
const AnyComponent = loadable(() => import('./AnyComponent'))
const Routes = () => (
  <BrowserRouter>
    <Route path="/home" component={AnyComponent}/>
  </BrowserRouter>
);
export default Routes;
```
**以下是老版中的方法**

### 3.webpack配置中使用lazyload-loader
```JSX
// webpack 配置中
module: {
 rules: [
 {
 test: /.(js|jsx)$/,,
 use: [
 'babel-loader',
 'lazyload-loader'
 ]
},
 
// 业务代码中
// 使用lazy! 前缀 代表需要懒加载的Router
 import Shop from 'lazy!./src/view/Shop';
 // Router 正常使用
 <Route path="/shop" component={Shop} />
```

### 4.import() webpack v2+
> 符合ECMAScript提议的import()语法，该提案与普通 import 语句或 require 函数的类似，但返回一个 Promise 对象

```JSX
function component() {
 return import( /* webpackChunkName: "lodash" */ 'lodash').then(_ => {
 var element = document.createElement('div');
 element.innerHTML = _.join(['Hello', 'webpack'], ' ');
 return element;
 }).catch(error => 'An error occurred while loading the component');
}
// 或者使用async
async function getComponent() {
 var element = document.createElement('div');
 const _ = await import(/* webpackChunkName: "lodash" */ 'lodash');
 element.innerHTML = _.join(['Hello', 'webpack'], ' ');
 return element;
}
```

### 5.requre.ensure webpack v1 v2
```JSX
require.ensure([], function(require){
 var list = require('./list');
 list.show();
，'list');
<!-- Router -->
const Foo = require.ensure([], () => {
 require("Foo");
}, err => {
 console.error("We failed to load chunk: " + err);
}, "chunk-name");
//react-router2 or 3
<Route path="/foo" getComponent={Foo} />
```

# Mobx
## 1. Mobx介绍
> 一个可以和React良好配合的集中状态管理工具，和Redux解决的问题相似，都可以独立组件进行集中状态管理

![image](https://user-images.githubusercontent.com/54365306/199037549-1ed0de99-ae29-41b8-81f2-ccaf6d02910c.png)


## 优势
1. 简单
> 编写无模板的极简代码精准描述你的意图 
2. 轻松实现最优渲染
> 依赖自动追踪，实现最小渲染优化
3. 架构自由
> 可移植, 可测试 无特殊心智负担
## 社区评价
![image](https://user-images.githubusercontent.com/54365306/199037654-9fc6f402-3540-42a0-ba03-1682666f38f2.png)

## 2. 配置开发环境
> Mobx是一个独立的响应式的库，可以独立于任何UI框架存在，但是通常大家习惯把它和React进行绑定使用，用Mobx来做响应式数据建模，React作为UI视图框架渲染内容，我们环境的配置需要三个部分
一个create-react-app创建好的React项目环境
mobx框架本身
一个用来链接mobx和React的中间件
```Bash
# 创建项目
# npx 创建方式
$ npx create-react-app react-mobx 

# vite 创建方式
$ npm create vite react-mobx --template react

# 安装mobx和中间件工具 mobx-react-lite  只能函数组件中使用
$ npm i mobx  mobx-react-lite
```

## 3.基础使用
> 需求: 使用mobx实现一个计数器的案例
![a.png](https://cdn.nlark.com/yuque/0/2022/png/274425/1659257784647-5f1c4d4a-8fe6-45f2-8b76-dace1ab0fdb0.png#clientId=u9cdd7397-35da-4&crop=0&crop=0&crop=1&crop=1&from=drop&id=u17c57939&margin=%5Bobject%20Object%5D&name=a.png&originHeight=747&originWidth=1765&originalType=binary&ratio=1&rotation=0&showTitle=false&size=756869&status=done&style=none&taskId=u0c070e53-8072-41aa-b322-a60609590a7&title=)

### 1. 初始化mobx
> 初始化步骤
> 1. 定义数据状态**state**
> 2. 在构造器中实现数据响应式处理 **makeAutoObservble**
> 3. 定义修改数据的函数**action**
> 4. 实例化store并导出

```javascript
import { makeAutoObservable } from 'mobx'

class CounterStore {
  count = 0 // 定义数据
  constructor() {
    makeAutoObservable(this)  // 响应式处理
  }
  // 定义修改数据的方法
  addCount = () => {
    this.count++
  }
}

const counter = new CounterStore()
export default counter
```

### 2. React使用store
> 实现步骤
> 1. 在组件中导入counterStore实例对象
> 2. 在组件中使用storeStore实例对象中的数据
> 3. 通过事件调用修改数据的方法修改store中的数据
> 4. 让组件响应数据变化


```jsx
// 导入counterStore
import counterStore from './store'
// 导入observer方法
import { observer } from 'mobx-react-lite'
function App() {
  return (
    <div className="App">
      <button onClick={() => counterStore.addCount()}>
        {counterStore.count}
      </button>
    </div>
  )
}
// 包裹组件让视图响应数据变化
export default observer(App)
```

## 4. 计算属性（衍生状态）
> 概念: 有一些状态根据现有的状态计算（衍生）得到，我们把这种状态叫做计算属性, 看下面的例子

![b.png](https://cdn.nlark.com/yuque/0/2022/png/274425/1659258189676-fa84e558-c8b5-4e3e-9d7b-ef87a020af66.png#clientId=u9cdd7397-35da-4&crop=0&crop=0&crop=1&crop=1&from=drop&height=577&id=u9e116896&margin=%5Bobject%20Object%5D&name=b.png&originHeight=770&originWidth=923&originalType=binary&ratio=1&rotation=0&showTitle=false&size=591988&status=done&style=none&taskId=u7bf6a8a4-c07b-41a0-aaf1-aeeb12c9bc5&title=&width=692)

实现步骤

1. 生命一个存在的数据
2. 通过get关键词 定义计算属性
3. 在 makeAutoObservable 方法中标记计算属性

```javascript
import { computed, makeAutoObservable } from 'mobx'

class CounterStore {
  list = [1, 2, 3, 4, 5, 6]
  constructor() {
    makeAutoObservable(this, {
      filterList: computed
    })
  }
  // 修改原数组
  changeList = () => {
    this.list.push(7, 8, 9)
  }
  // 定义计算属性
  get filterList () {
    return this.list.filter(item => item > 4)
  }
}

const counter = new CounterStore()

export default counter
```
```jsx
// 导入counterStore
import counterStore from './store'
// 导入observer方法
import { observer } from 'mobx-react-lite'
function App() {
  return (
    <div className="App">
      {/* 原数组 */}
      {JSON.stringify(counterStore.list)}
      {/* 计算属性 */}
      {JSON.stringify(counterStore.filterList)}
      <button onClick={() => counterStore.changeList()}>change list</button>
    </div>
  )
}
// 包裹组件让视图响应数据变化
export default observer(App)
```

## 5. 异步数据处理
> 测试接口: [http://geek.itheima.net/v1_0/channels](http://geek.itheima.net/v1_0/channels')
> 实现步骤:
> 1. 在mobx中编写异步请求方法 获取数据 存入state中
> 2. 组件中通过 useEffect + 空依赖  触发action函数的执行 

```javascript
// 异步的获取

import { makeAutoObservable } from 'mobx'
import axios from 'axios'

class ChannelStore {
  channelList = []
  constructor() {
    makeAutoObservable(this)
  }
  // 只要调用这个方法 就可以从后端拿到数据并且存入channelList
  setChannelList = async () => {
    const res = await axios.get('http://geek.itheima.net/v1_0/channels')
    this.channelList = res.data.data.channels
  }
}
const channlStore = new ChannelStore()
export default channlStore
```
```jsx
import { useEffect } from 'react'
import { useStore } from './store'
import { observer } from 'mobx-react-lite'
function App() {
  const { channlStore } = useStore()
  // 1. 使用数据渲染组件
  // 2. 触发action函数发送异步请求
  useEffect(() => {
    channlStore.setChannelList()
  }, [])
  return (
    <ul>
      {channlStore.channelList.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  )
}
// 让组件可以响应数据的变化[也就是数据一变组件重新渲染]
export default observer(App)
```

## 6. 模块化
> 场景: 一个项目有很多的业务模块，我们不能把所有的代码都写到一起，这样不好维护，提了提供可维护性，需要引入模块化机制

![无标题-2022-07-27-1257.png](https://cdn.nlark.com/yuque/0/2022/png/274425/1659259142451-e8938c29-be7f-4771-a970-7e4772270031.png#clientId=u9cdd7397-35da-4&crop=0&crop=0&crop=1&crop=1&from=drop&id=ubbeffadb&margin=%5Bobject%20Object%5D&name=%E6%97%A0%E6%A0%87%E9%A2%98-2022-07-27-1257.png&originHeight=985&originWidth=1748&originalType=binary&ratio=1&rotation=0&showTitle=false&size=1495735&status=done&style=none&taskId=u8c022d80-4b2a-4a62-9fab-851e2c9cb84&title=)


**实现步骤**

1. 拆分模块js文件，每个模块中定义自己独立的state/action
2. 在store/index.js中导入拆分之后的模块，进行模块组合
3. 利用React的context的机制导出统一的useStore方法，给业务组件使用

### 1.定义task模块
```javascript
import { makeAutoObservable } from 'mobx'

class TaskStore {
  taskList = []
  constructor() {
    makeAutoObservable(this)
  }
  addTask () {
    this.taskList.push('vue', 'react')
  }
}

const task = new TaskStore()


export default task
```

### 2. 定义counterStore
```javascript
import { makeAutoObservable } from 'mobx'

class CounterStore {
  count = 0
  list = [1, 2, 3, 4, 5, 6]
  constructor() {
    makeAutoObservable(this)
  }
  addCount = () => {
    this.count++
  }
  changeList = () => {
    this.list.push(7, 8, 9)
  }
  get filterList () {
    return this.list.filter(item => item > 4)
  }
}

const counter = new CounterStore()

export default counter
```
### 3.组合模块导出统一方法
```javascript
import React from 'react'

import counter from './counterStore'
import task from './taskStore'


class RootStore {
  constructor() {
    this.counterStore = counter
    this.taskStore = task
  }
}


const rootStore = new RootStore()

// context机制的数据查找链  Provider如果找不到 就找createContext方法执行时传入的参数
const context = React.createContext(rootStore)

const useStore = () => React.useContext(context)
// useStore() =>  rootStore  { counterStore, taskStore }

export { useStore }
```

### 4. 组件使用模块中的数据
```jsx
import { observer } from 'mobx-react-lite'
// 导入方法
import { useStore } from './store'
function App() {
  // 得到store
  const store = useStore()
  return (
    <div className="App">
      <button onClick={() => store.counterStore.addCount()}>
        {store.counterStore.count}
      </button>
    </div>
  )
}
// 包裹组件让视图响应数据变化
export default observer(App)
```

## 7. 多组件共享数据
> 目标：当数据发生变化 所有用到数据的组件都会得到同步的组件的更新
> 实现步骤：在Foo组件和Bar组件中分别使用store中的数据，然后在app组件中进行数据修改，查看Foo组件和Bar组件是否得到更新

![无标题-2022-08-09-1117.png](https://cdn.nlark.com/yuque/0/2022/png/274425/1660015239265-7868127a-b588-4083-b61f-08c9cac18009.png#clientId=u91805b20-013b-4&crop=0&crop=0&crop=1&crop=1&from=drop&id=uba8a72dc&margin=%5Bobject%20Object%5D&name=%E6%97%A0%E6%A0%87%E9%A2%98-2022-08-09-1117.png&originHeight=902&originWidth=1559&originalType=binary&ratio=1&rotation=0&showTitle=false&size=269704&status=done&style=none&taskId=u947caff5-d020-49a3-9a43-09309f5631d&title=)
```jsx
// 用taskStore中的taskList数据
import { useStore } from './store'
import { observer } from 'mobx-react-lite'
const Bar = () => {
  const { taskStore } = useStore()
  return (
    <ul>
      {taskStore.taskList.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  )
}

export default observer(Son)
```
```jsx
// 用taskStore中的taskList数据
import { useStore } from './store'
import { observer } from 'mobx-react-lite'
const Bar = () => {
  const { taskStore } = useStore()
  return (
    <ul>
      {taskStore.taskList.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  )
}

export default observer(Son)
```
```jsx
import Bar from './Bar'
import Foo from './Foo'
import { useStore } from './store'
function App() {
  const { taskStore } = useStore()
  return (
    <div className="App">
      <Bar />
      <button onClick={() => taskStore.setTaskList('angular')}>
        修改taskStore
      </button>
    </div>
  )
}
export default App
```

## 8.基础总结
### 1.初始化mobx的过程是怎样的
> 声明数据 -> 响应式处理 -> 定义action函数 -> 实例化导出
### 2.mobx如何配合react，需要依赖什么包？
> mobx-react-lite 作为链接包（中间包），导出observer方法，包裹组件（只能和函数组件配合）
> 类组件是 mobx-react包
### 3.模块化解决了什么问题？
> 维护性问题
### 4.如何实现mobx的模块化
> 按照功能拆分store模块，根模块中组合子模块，利用context机制依赖注入

## React项目(pc)
> 源码地址：
> 
> Github
> https://gitee.com/react-cp/react-pc-code
> 
> Gitee
> https://gitee.com/alicloud_75/React-pc


## TypeScript
### 01-学习TypeScript
#### 安装起步
##### 全局安装
```sh
$ npm install typescript -g
```
##### 检测是否安装成功
```sh
$ tsc -v
```

#### 基础类型
##### void 和 undefined 和 null 最大的区别
> 与 void 的区别是，undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 string 类型的变量：

```ts
//这样写会报错 void类型不可以分给其他类型
let test: void = undefined
let num2: string = "1"
 
num2 = test
```

```ts
//这样是没问题的
let test: null = null
let num2: string = "1"
 
num2 = test
 
//或者这样的
let test: undefined = undefined
let num2: string = "1"
 
num2 = test
```

### 配置tsconfig.json
> 自动生成tsconfig.json文件
```sh
tsc --init 
```
> 关闭严格模式
```json
{
  "compilerOptions":{
    "strict": true
  }
}
```

## 任意类型
> 用tsc 一直重复编译很麻烦，所以更换成 nodejs 环境执行ts
> 
> 安装 
> npm i @types/node --save-dev （node环境支持的依赖必装）
> npm i ts-node --g
>
> 运行
> ts-node app.ts

**总结**
1. TypeScript 3.0中引入的 unknown 类型也被认为是 top type ，但它更安全。
与 any 一样，所有类型都可以分配给unknown
unknow  unknow类型比any更加严格当你要使用any 的时候可以尝试使用unknow
2. 区别 
  - 1.1 unknow类型不能作为子类型只能作为父类型 any可以作为父类型和子类型
   - unknown类型不能赋值给其他类型
   - unknown可赋值对象只有unknown 和 any
  - 1.2 unknow 是不能调用属性和方法

#### Object、object 以及{} 区别
##### Object
> Object类型是所有Object类的实例的类型。 由以下两个接口来定义：
> Object 接口定义了 Object.prototype 原型对象上的属性；
> ObjectConstructor 接口定义了 Object 类的属性， 如上面提到的 Object.create()。
> 这个类型是跟原型链有关的原型链顶层就是Object，所以值类型和引用类型最终都指向Object，所以他包含所有类型。

#### object
> object 代表所有非值类型的类型，例如 数组 对象 函数等，常用于泛型约束

#### {}
> 看起来很别扭的一个东西 你可以把他理解成new Object 就和我们的第一个Object基本一样 包含所有类型
**tips**
字面量模式是不能修改值的

#### 接口和对象类型
> 在typescript中，我们定义对象的方式要用关键字interface（接口），我的
> 解是使用interface来定义一种约束，让数据的结构满足约束的格式。

##### 基本使用
> 使用接口约束的时候不能多一个属性也不能少一个属性

##### 可选属性 使用?操作符
> 可选属性的含义是该属性可以不存在

##### 任意属性 [propName: string]
> 允许添加新的任意属性
> 需要注意的是，**一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集**
> 一般设置为any类型  [propName: string]: any;

##### 只读属性 readonly
> readonly 只读属性是不允许被赋值的只能读取

##### 添加函数

#### 数组类型
##### 类型[ ]
> (类型加中括号)

##### 数组泛型
> 规则 Array<类型>

##### arguments类数组
```ts
//错误的arguments 是类数组不能这样定义
let arr:number[] = arguments

//ts内置对象IArguments 定义
let arr:IArguments = arguments
```


#### 函数扩展
##### 函数基本类型
> 注意，参数不能多传，也不能少传 必须按照约定的类型来
##### 函数的可选参数(用?)
##### 函数参数的默认值
> 跟js一样直接等号赋值
##### 接口定义函数
```ts
//定义参数 num 和 num2  ：后面定义返回值的类型
interface Add {
    (num:  number, num2: number): number
}
 
const fn: Add = (num: number, num2: number): number => {
    return num + num2
}
fn(5, 5)
 
 
interface User{
    name: string;
    age: number;
}
function getUserInfo(user: User): User {
  return user
}
```

**注意**
> 如果可选参数没穿 就为 undefined

##### 定义剩余参数
```ts
const fn = (array:number[],...items:any[]):any[] => {
  console.log(array,items)
  return items
}
 
let a:number[] = [1,2,3]
 
fn(a,'4','5','6')
```

#### 联合类型 | 交叉类型 | 类型断言
##### 联合类型
> 用“|”

##### 交叉类型 （还可以extends）
> 用“&”

##### 类型断言
> (值 as 类型)　　或　　(<类型>值)  (value as string) 或者 (<string>value)

```ts
interface A {
  run: string
}

interface B {
  build: string
}

let fn1 = (type: A | B): void => {
  // console.log(type.run); //类型“A | B”上不存在属性“run”。类型“B”上不存在属性“run”。

  // 以下两种都可以
  console.log((<A>type).run);

  console.log((type as A).run);
}

fn1({
  build: '123'
}) // undefined 滥用断言导致的

```
**需要注意的是，类型断言只能够「欺骗」TypeScript 编译器，无法避免运行时的错误，反而滥用类型断言可能会导致运行时错误：**
###### 使用any临时断言

```ts
(window as any).abc = 123
//可以使用any临时断言在 any 类型的变量上，访问任何属性都是允许的。
```
##### as const
> 是对字面值的断言，与const直接定义常量是有区别的
> 如果是普通类型跟直接const 声明是一样的

```ts
const names = '小满'
names = 'aa' //无法修改
 
 
let names2 = '小满' as const
names2 = 'aa' //无法修改
```

```ts
// 数组
let a1 = [10, 20] as const;
const a2 = [10, 20];
 
a1.unshift(30); // 错误，此时已经断言字面量为[10, 20],数据无法做任何修改
a2.unshift(30); // 通过，没有修改指针
```

### 类型断言是不具影响力的
```ts

function toBoolean(something: any): boolean {
    return something as boolean;
}
 
toBoolean(1);
// 返回值为 1
//
```

#### 内置对象
> JavaScript 中有很多内置对象，它们可以直接在 TypeScript 中当做定义好了的类型。
##### ECMAScript 的内置对象
> Boolean、Number、string、RegExp、Date、Error
```ts
let b: Boolean = new Boolean(1)
console.log(b)
let n: Number = new Number(true)
console.log(n)
let s: String = new String('今天找到工作了吗')
console.log(s)
let d: Date = new Date()
console.log(d)
let r: RegExp = /^1/
console.log(r)
let e: Error = new Error("error!")
console.log(e)
```
##### DOM 和 BOM 的内置对象
> Document、HTMLElement、Event、NodeList 等
```ts
let body: HTMLElement = document.body;
let allDiv: NodeList = document.querySelectorAll('div');
//读取div 这种需要类型断言 或者加个判断应为读不到返回null
let div:HTMLElement = document.querySelector('div') as HTMLDivElement
document.addEventListener('click', function (e: MouseEvent) {
    
});
//dom元素的映射表
interface HTMLElementTagNameMap {
    "a": HTMLAnchorElement;
    "abbr": HTMLElement;
    "address": HTMLElement;
    "applet": HTMLAppletElement;
    "area": HTMLAreaElement;
    "article": HTMLElement;
    "aside": HTMLElement;
    "audio": HTMLAudioElement;
    "b": HTMLElement;
    "base": HTMLBaseElement;
    "bdi": HTMLElement;
    "bdo": HTMLElement;
    "blockquote": HTMLQuoteElement;
    "body": HTMLBodyElement;
    "br": HTMLBRElement;
    "button": HTMLButtonElement;
    "canvas": HTMLCanvasElement;
    "caption": HTMLTableCaptionElement;
    "cite": HTMLElement;
    "code": HTMLElement;
    "col": HTMLTableColElement;
    "colgroup": HTMLTableColElement;
    "data": HTMLDataElement;
    "datalist": HTMLDataListElement;
    "dd": HTMLElement;
    "del": HTMLModElement;
    "details": HTMLDetailsElement;
    "dfn": HTMLElement;
    "dialog": HTMLDialogElement;
    "dir": HTMLDirectoryElement;
    "div": HTMLDivElement;
    "dl": HTMLDListElement;
    "dt": HTMLElement;
    "em": HTMLElement;
    "embed": HTMLEmbedElement;
    "fieldset": HTMLFieldSetElement;
    "figcaption": HTMLElement;
    "figure": HTMLElement;
    "font": HTMLFontElement;
    "footer": HTMLElement;
    "form": HTMLFormElement;
    "frame": HTMLFrameElement;
    "frameset": HTMLFrameSetElement;
    "h1": HTMLHeadingElement;
    "h2": HTMLHeadingElement;
    "h3": HTMLHeadingElement;
    "h4": HTMLHeadingElement;
    "h5": HTMLHeadingElement;
    "h6": HTMLHeadingElement;
    "head": HTMLHeadElement;
    "header": HTMLElement;
    "hgroup": HTMLElement;
    "hr": HTMLHRElement;
    "html": HTMLHtmlElement;
    "i": HTMLElement;
    "iframe": HTMLIFrameElement;
    "img": HTMLImageElement;
    "input": HTMLInputElement;
    "ins": HTMLModElement;
    "kbd": HTMLElement;
    "label": HTMLLabelElement;
    "legend": HTMLLegendElement;
    "li": HTMLLIElement;
    "link": HTMLLinkElement;
    "main": HTMLElement;
    "map": HTMLMapElement;
    "mark": HTMLElement;
    "marquee": HTMLMarqueeElement;
    "menu": HTMLMenuElement;
    "meta": HTMLMetaElement;
    "meter": HTMLMeterElement;
    "nav": HTMLElement;
    "noscript": HTMLElement;
    "object": HTMLObjectElement;
    "ol": HTMLOListElement;
    "optgroup": HTMLOptGroupElement;
    "option": HTMLOptionElement;
    "output": HTMLOutputElement;
    "p": HTMLParagraphElement;
    "param": HTMLParamElement;
    "picture": HTMLPictureElement;
    "pre": HTMLPreElement;
    "progress": HTMLProgressElement;
    "q": HTMLQuoteElement;
    "rp": HTMLElement;
    "rt": HTMLElement;
    "ruby": HTMLElement;
    "s": HTMLElement;
    "samp": HTMLElement;
    "script": HTMLScriptElement;
    "section": HTMLElement;
    "select": HTMLSelectElement;
    "slot": HTMLSlotElement;
    "small": HTMLElement;
    "source": HTMLSourceElement;
    "span": HTMLSpanElement;
    "strong": HTMLElement;
    "style": HTMLStyleElement;
    "sub": HTMLElement;
    "summary": HTMLElement;
    "sup": HTMLElement;
    "table": HTMLTableElement;
    "tbody": HTMLTableSectionElement;
    "td": HTMLTableDataCellElement;
    "template": HTMLTemplateElement;
    "textarea": HTMLTextAreaElement;
    "tfoot": HTMLTableSectionElement;
    "th": HTMLTableHeaderCellElement;
    "thead": HTMLTableSectionElement;
    "time": HTMLTimeElement;
    "title": HTMLTitleElement;
    "tr": HTMLTableRowElement;
    "track": HTMLTrackElement;
    "u": HTMLElement;
    "ul": HTMLUListElement;
    "var": HTMLElement;
    "video": HTMLVideoElement;
    "wbr": HTMLElement;
}
```
##### 定义Promise
```ts
function promise():Promise<number>{
   return new Promise<number>((resolve,reject)=>{
       resolve(1)
   })
}
 
promise().then(res=>{
    console.log(res)
})
```
当你在使用一些常用的方法的时候，TypeScript 实际上已经帮你做了很多类型判断的工作了

而他们的定义文件，则在 
 [TypeScript核心库的定义文件](https://github.com/Microsoft/TypeScript/tree/master/src/lib) 核心库的定义文件中

#### Class类
> ES6提供了更接近传统语言的写法，引入了Class（类）这个概念，作为对象的模板。通过class关键字，可以定义类。基本上，ES6的class
> 以看作只是一个语法糖，它的绝大部分功能，ES5都可以做到，新的class写法只是让对象原型的写法更加清晰、更像面向对象编程的语法
> 已。上面的代码用ES6的“类”改写，就是下面这样。

##### 定义类
```ts
class Person {
  // ts里面还需要再定义一遍
  name: string
  // 如果了定义了变量不用 也会报错 通常是给个默认值 或者 进行赋值
  age: number = 0
  sub: boolean
  constructor(name: string, age: number, sub: boolean) {
    this.name = name;
    this.age = age;
    this.sub = sub;
  }
```
##### 类的修饰符
> 使用public 修饰符 可以让你定义的变量 内部访问 也可以外部访问 如果不写默认就是public
> 使用private 修饰符 代表定义的变量私有的只能在内部访问 不能在外部访问
> 使用protected 修饰符 代表定义的变量私有的只能在内部和继承的子类中访问 不能在外部访问
```ts
/**
 * 类的修饰符 public private protected (默认public)
 * public     公用类 外部可直接访问 （var）
 * private    私有类 只能内部进行访问 （let）
 * protected  受保护类 只能内部和子类中访问
 */
class Person {
  // ts里面还需要再定义一遍
  public name: string
  // 如果了定义了变量不用 也会报错 通常是给个默认值 或者 进行赋值
  private age: number = 0
  protected sub: boolean
  ...
}

class Man extends Person {
  constructor() {
    super('阴', 22, false)
    this.sub // 子类可以访问到
  }
  create() {
    console.log(this.sub)
  }
}

let p = new Person('阴', 22, false)
// p.age //属性“age”为私有属性，只能在类“Person”中访问。
// p.sub //属性“sub”受保护，只能在类“Person”及其子类中访问。
```

##### 静态属性和静态方法
> 我们用static 定义的属性/方法 不可以通过this 去访问 只能通过类名去调用
> 如果两个函数都是static 静态的是可以通过this互相调用
```ts
class Person {
  static aaa: symbol = Symbol('aaa')
  constructor(name: string, age: number, sub: boolean) {
    ...

    this.aaa   //属性“aaa”在类型“Person”上不存在。
    Person.aaa // 这样是可以的

    this.run()   // 这里面掉不了 run函数
    Person.run() //这样是可以的
  }

  // 静态函数
  static run() {
    // 再静态函数中 this 只能访问到 static 属性
    // this.aaa
    this.dev()
    console.log(this.aaa, this.name, '5555');
    return 'bbb'
  }

  static dev() {
    this.aaa
    // 两个静态函数是可以互相调用的
    this.run()
    return 'dev'
  }
}

// static 不需要进行new 可以通过类名进行调用
console.log(Person.aaa, Person.run());
```

##### interface 定义类
> 使用关键字 implements   后面跟interface的名字多个用逗号隔开 继承还是用extends


```ts
interface PersonClass {
    get(type: boolean): boolean
}
 
interface PersonClass2{
    set():void,
    asd:string
}
 
class A {
    name: string
    constructor() {
        this.name = "123"
    }
}
 
class Person extends A implements PersonClass,PersonClass2 {
    asd: string
    constructor() {
        super()
        this.asd = '123'
    }
    get(type:boolean) {
        return type
    }
    set () {
 
    }
}
```

#### 抽象类
> 应用场景如果你写的类实例化之后毫无用处此时我可以把他定义为抽象类
> 或者你也可以把他作为一个基类-> 通过继承一个派生类去实现基类的一些方法
> 抽象方法就是只有方法的定义，没有方法体，方法体需要在子类中进行实现。
> **抽象类就是将众多类中具有共同部分的功能抽离出来，单独创建一个类作为其他派生类的基类使用。他们不允许被实例化，定义抽象类使用abstract关键字**
> 我们看例子
> 下面这段代码会报错抽象类无法被实例化

```ts
abstract class A {
   public name:string
   
}
 
new A()
```

> 例子2
> 我们在A类定义了 getName 抽象方法但为实现
> 我们B类实现了A定义的抽象方法 如不实现就不报错 我们定义的抽象方法必须在派生类实现

```ts
abstract class A {
   name: string
   constructor(name: string) {
      this.name = name;
   }
   print(): string {
      return this.name
   }
 
   abstract getName(): string
}
 
class B extends A {
   constructor() {
      super('小满')
   }
   getName(): string {
      return this.name
   }
}
 
let b = new B();
 
console.log(b.getName());
```
**Tips:** 
**派生类：子类;基类：父类** 
**实例化是指在面向对象的编程中，把用类创建对象的过程称为实例化。是将一个抽象的概念类，具体到该类实物的过程。实例化过程中一般由类名 对象名 = new 类名（参数1，参数2...参数n）构成。** 

#### 元组
> 如果需要一个固定大小的不同类型值的集合，我们需要使用元组。 
**元组就是数组的变种**
> 元组（Tuple）是固定数量的不同类型的元素的组合。
> 元组与集合的不同之处在于，元组中的元素类型可以是不同的，而且数量固定。元组的好处在于可以把多个元素作为一个单元传递。如果一个方法需要返回多个值，可以把这多个值作
> 元组返回，而不需要创建额外的类来表示。
```ts
let arr:[number,string] = [1,'string']
 
 
let arr2: readonly [number,boolean,string,undefined] = [1,true,'sring',undefined]
```

当赋值或访问一个已知索引的元素时，会得到正确的类型：
```ts
let arr:[number,string] = [1,'string']
arr[0].length //error
arr[1].length //success
 
//数字是没有length 的
```

##### 越界元素
```ts
let arr:[number,string] = [1,'string']
 
arr.push(true)//error
```

**应用场景**
**例如定义execl返回的数据**
```ts
let excel: [string, string, number, string][] = [
    ['title', 'name', 1, '123'],
    ['title', 'name', 1, '123'],
    ['title', 'name', 1, '123'],
    ['title', 'name', 1, '123'],
    ['title', 'name', 1, '123'],
]
```

#### 枚举类型
> 在javaScript中是没有枚举的概念的TS帮我们定义了枚举这个类型
> 使用枚举 通过enum关键字定义我们的枚举
##### 1. 数字枚举
###### 普通使用
> 例如 红绿蓝 Red = 0 Green = 1 Blue= 2 分别代表红色0 绿色为1 蓝色为2
```ts
enum Types{
   Red,
   Green,
   BLue
}
```

> 这样写就可以实现应为ts定义的枚举中的每一个组员默认都是从0开始的 
```ts
enum Types{
   Red = 0,
   Green = 1,
   BLue = 2
}
//默认就是从0开始的 可以不写值
```
###### 增长枚举
```ts
enum Types{
   Red = 1,
   Green,
   BLue
}
```
>如上，我们定义了一个数字枚举， Red使用初始化为 1。 其余的成员会从 1开始自动增长。 换句话说， Type.Red的值为 1， Green为 2， Blue为 3。

##### 2.字符串枚举
> 字符串枚举的概念很简单。 在一个字符串枚举里，每个成员都必须用字符串字面量，或另外一个字符串枚举成员进行初始化。
```ts
enum Types{
   Red = 'red',
   Green = 'green',
   BLue = 'blue'
}
```
>由于字符串枚举没有自增长的行为，字符串枚举可以很好的序列化。 换句话说，如果你正在调试并且必须要读一个数字枚举的运行时的值，这个值通常是很难读的 - 它并不能表达有用的信息，字符串枚举允许你提供一个运行时有意义的并且可读的值，独立于枚举成员的名字。

##### 3.异构枚举
> 枚举可以混合字符串和数字成员
```ts
enum Types{
   No = "No",
   Yes = 1,
}
```
##### 4.接口枚举
> 定义一个枚举Types 定义一个接口A 他有一个属性red 值为Types.yyds
> 声明对象的时候要遵循这个规则
```ts
   enum Types {
      yyds,
      dddd
   }
   interface A {
      red:Types.yyds
   }
 
   let obj:A = {
      red:Types.yyds
   }
```

##### 5.const枚举
> let  和 var 都是不允许的声明只能使用const
> 大多数情况下，枚举是十分有效的方案。 然而在某些情况下需求很严格。 为了避免在额外生成的代码上的开销和额外的非直接的对枚举成员的访问，我们可以使用 const枚举。 常枚举通过在枚举上使用 const修饰符来定义
> const 声明的枚举会被编译成常量
> 普通声明的枚举编译完后是个对象
```ts
const enum Types{
   No = "No",
   Yes = 1,
}
```
##### 6.反向映射
> 它包含了正向映射（ name -> value）和反向映射（ value -> name）
> 要注意的是 不会为字符串枚举成员生成反向映射。
```ts
enum Enum {
   fall
}
let a = Enum.fall;
console.log(a); //0
let nameOfA = Enum[a]; 
console.log(nameOfA); //fall
```

#### 类型推论|类型别名
##### 类型推论
> 1. TypeScript 会在没有明确的指定类型的时候推测出一个类型，这就是类型推论
>    不能够在赋值给别的类型
> 2. 如果你声明变量没有定义类型也没有赋值这时候TS会推断成any类型可以进行任何操作

##### 类型别名
> type 关键字（可以给一个类型定义一个名字）多用于符合类型
###### 1. 定义类型别名
```ts
type str = string
let s:str = "我是小满"
console.log(s);
```
###### 2. 定义函数别名
```ts
type str = () => string
let s: str = () => "我是小满"
console.log(s);
```
##### 3.定义联合类型别名
```ts
type str = string | number
let s: str = 123
let s2: str = '123'
console.log(s,s2);
```
##### 4.定义值的别名
```ts
type value = boolean | 0 | '213'
let s:value = true
//变量s的值  只能是上面value定义的值
```

#### 14.never类型
> TypeScript 将使用 never 类型来表示不应该存在的状态(很抽象是不是)
```ts
// 返回never的函数必须存在无法达到的终点
 
// 因为必定抛出异常，所以 error 将不会有返回值
function error(message: string): never {
    throw new Error(message);
}
 
// 因为存在死循环，所以 loop 将不会有返回值
function loop(): never {
    while (true) {
    }
}
```
##### never 与 void 的差异
```ts
    //void类型只是没有返回值 但本身不会出错
    function Void():void {
        console.log();
    }
 
    //只会抛出异常没有返回值
    function Never():never {
    throw new Error('aaa')
    }
```

##### never 类型的一个应用场景
```ts
interface A {
    type: "foo"
}
 
interface B {
    type: "bar"
}
type All = A | B ;
function handleValue(val: All) {
    switch (val.type) {
        case 'foo':
            break;
        case 'bar':
            break
        default:
            //兜底逻辑 一般是不会进入这儿如果进来了就是程序异常了
            
            const exhaustiveCheck:never = val;
            break
    }
}
```
比如新来了一个同事他新增了一个C接口，我们必须手动找到所有 switch 代码并处理，否则将有可能引入 BUG 。

> 而且这将是一个“隐蔽型”的BUG，如果回归面不够广，很难发现此类BUG。

那 TS 有没有办法帮助我们在类型检查阶段发现这个问题呢？
```ts
interface A {
    type: "foo"
}
 
interface B {
    type: "bar"
}
interface C {
    type: "bizz"
}
type All = A | B | C;
function handleValue(val: All) {
    switch (val.type) {
        case 'foo':
            break;
        case 'bar':
            break
        default:
            //兜底逻辑 一般是不会进入这儿如果进来了就是程序异常了
 
            const exhaustiveCheck: never = val;
            break
    }
}
```
> 由于任何类型都不能赋值给 never 类型的变量，所以当存在进入 default 分支的可能性时，TS的类型检查会及时帮我们发现这个问题

#### symbol类型
[Symbols · TypeScript中文网 · TypeScript——JavaScript的超集 ts官网](https://www.tslang.cn/docs/handbook/symbols.html)
**Symbol**
**自ECMAScript 2015起，symbol成为了一种新的原生类型，就像number和string一样。**
> symbol类型的值是通过Symbol构造函数创建的。
> 可以传递参做为唯一标识 只支持 string 和 number类型的参数
```ts
let sym1 = Symbol();
let sym2 = Symbol("key"); // 可选的字符串key
```

##### Symbol的值是唯一的
```ts
const s1 = Symbol()
const s2 = Symbol()
// s1 === s2 =>false
```

##### 用作对象属性的键
```ts
let sym = Symbol();
 
let obj = {
    [sym]: "value"
};
 
console.log(obj[sym]); // "value"
```

##### 使用symbol定义的属性，是不能通过如下方式遍历拿到的
```ts
const symbol1 = Symbol('666')
const symbol2 = Symbol('777')
const obj1= {
   [symbol1]: '小满',
   [symbol2]: '二蛋',
   age: 19,
   sex: '女'
}
// 1 for in 遍历
for (const key in obj1) {
   // 注意在console看key,是不是没有遍历到symbol1
   console.log(key)
}
// 2 Object.keys 遍历
Object.keys(obj1)
console.log(Object.keys(obj1))
// 3 getOwnPropertyNames
console.log(Object.getOwnPropertyNames(obj1))
// 4 JSON.stringfy
console.log(JSON.stringify(obj1))
```

##### 使用symbol定义的属性，可以通过如下方式遍历拿到的
```ts
// 1 拿到具体的symbol 属性,对象中有几个就会拿到几个
Object.getOwnPropertySymbols(obj1)
console.log(Object.getOwnPropertySymbols(obj1))
// 2 es6 的 Reflect 拿到对象的所有属性
Reflect.ownKeys(obj1)
console.log(Reflect.ownKeys(obj1))
```

##### Symbol.iterator 迭代器 和 生成器 for of
> 支持遍历大部分类型迭代器 arr nodeList argumetns set map 等
```ts
var arr = [1,2,3,4];
let iterator = arr[Symbol.iterator]();
 
console.log(iterator.next());  //{ value: 1, done: false }
console.log(iterator.next());  //{ value: 2, done: false }
console.log(iterator.next());  //{ value: 3, done: false }
console.log(iterator.next());  //{ value: 4, done: false }
console.log(iterator.next());  //{ value: undefined, done: true }
```

**测试用例**
```ts
interface Item {
    age: number,
    name: string
}
 
const array: Array<Item> = [{ age: 123, name: "1" }, { age: 123, name: "2" }, { age: 123, name: "3" }]
 
type mapTypes = string | number
const map:Map<mapTypes,mapTypes> = new Map()
 
map.set('1','王爷')
map.set('2','陆北')
 
const obj = {
    aaa:123,
    bbb:456
}
 
let set:Set<number> = new Set([1,2,3,4,5,6])
// let it:Iterator<Item> = array[Symbol.iterator]()
const gen = (erg:any): void => {
    let it: Iterator<any> = erg[Symbol.iterator]()
    let next:any= { done: false }
    while (!next.done) {
        next =  it.next()
        if (!next.done) {
            console.log(next.value)
        }
    }
}
gen(array)
```

> 以下为这些symbols的列表：

**Symbol.hasInstance**
> 方法，会被instanceof运算符调用。构造器对象用来识别一个对象是否是其实例。

**Symbol.isConcatSpreadable**
> 布尔值，表示当在一个对象上调用Array.prototype.concat时，这个对象的数组元素是否可展开。

**Symbol.iterator**
> 方法，被for-of语句调用。返回对象的默认迭代器。

**Symbol.match**
> 方法，被String.prototype.match调用。正则表达式用来匹配字符串。

**Symbol.replace**
> 方法，被String.prototype.replace调用。正则表达式用来替换字符串中匹配的子串。

**Symbol.search**
> 方法，被String.prototype.search调用。正则表达式返回被匹配部分在字符串中的索引。

**Symbol.species**
> 函数值，为一个构造函数。用来创建派生对象。

**Symbol.split**
> 方法，被String.prototype.split调用。正则表达式来用分割字符串。

**Symbol.toPrimitive**
> 方法，被ToPrimitive抽象操作调用。把对象转换为相应的原始值。

**Symbol.toStringTag**
> 方法，被内置方法Object.prototype.toString调用。返回创建对象时默认的字符串描述。

Symbol.unscopables
对象，它自己拥有的属性会被with作用域排除在外。

## 泛型
**泛型在TypeScript 是很重要的东西 例如vue3 是用ts编写的 里面用到了非常多的泛型**
### 函数泛型
> 我写了两个函数一个是数字类型的函数，另一个是字符串类型的函数,其实就是类型不同，
> 实现的功能是一样的，这时候我们就可以使用泛型来优化

```ts
function num (a:number,b:number) : Array<number> {
    return [a ,b];
}
num(1,2)
function str (a:string,b:string) : Array<string> {
    return [a ,b];
}
str('独孤','求败')
```

###### 泛型优化 (变量类型变化)
> 语法为函数名字后面跟一个<参数名> 参数名可以随便写 例如我这儿写了T
> 当我们使用这个函数的时候把参数的类型传进去就可以了 （也就是动态类型）

> 简而言之
> 定义这个函数时，我不决定这些参数的类型，而是让调用者告知我这里的参数是什么类型

```ts
function Add<T>(a: T, b: T): Array<T>  {
    return [a,b]
}
 
Add<number>(1,2)
Add<string>('1','2')
```
###### 多个类型的泛型定义
> 我们也可以使用不同的泛型参数名，只要在数量上和使用方式上能对应上就可以。
```ts
function Sub<T,U>(a:T,b:U):Array<T|U> {
    const params:Array<T|U> = [a,b]
    return params
}
 
 
Sub<Boolean,number>(false,1)
```

###### 定义泛型接口
> 声明接口的时候 在名字后面加一个<参数>
> 使用的时候传递类型

```ts
interface MyInter<T> {
   (arg: T): T
}
 
function fn<T>(arg: T): T {
   return arg
}
 
let result: MyInter<number> = fn
 
result(123)
```

###### 对象字面量泛型
```ts
let foo: { <T>(arg: T): T }
 
foo = function <T>(arg:T):T {
   return arg
}
 
foo(123)
```

##### 泛型约束
> 我们期望在一个泛型的变量上面，获取其length参数，但是，有的数据类型是没有length属性的
```ts
function getLegnth<T>(arg:T) {
  return arg.length
}
```

> 这时候我们就可以使用泛型约束
> 于是，我们就得对使用的泛型进行约束，我们约束其为具有length属性的类型，这里我们会用到interface,代码如下
```ts
interface Len {
   length:number
}
 
function getLegnth<T extends Len>(arg:T) {
  return arg.length
}
 
getLegnth<string>('123')
```

##### 使用keyof 约束对象
> 其中使用了TS泛型和泛型约束。
> 首先定义了T类型并使用extends关键字继承object类型的子类型，
> 然后使用keyof操作符获取T类型的所有键，
> 它的返回 类型是联合 类型，
> 最后利用extends关键字约束 K类型必须为keyof T联合类型的子类型
```ts
function prop<T, K extends keyof T>(obj: T, key: K) {
   return obj[key]
}
 
 
let o = { a: 1, b: 2, c: 3 }
 
prop(o, 'a') 
prop(o, 'd') //此时就会报错发现找不到
```
##### 泛型类
> 声明方法跟函数类似名称后面定义<类型>
> 使用的时候确定类型`new Sub<number>()`
```ts
class Sub<T>{
   attr: T[] = [];
   add (a:T):T[] {
      return [a]
   }
}
 
let s = new Sub<number>()
s.attr = [1,2,3]
s.add(123)
 
let str = new Sub<string>()
str.attr = ['1','2','3']
str.add('123')
```

#### tsconfig.json配置文件
> 创建一个空文件夹，进行配置ts环境
> 1. 创建index.ts 文件
```sh
$ echo ''> index.ts
```
> 2. 创建tsconfig.json 文件
```sh
$ tsc --int
```
> 3. 创建index2.ts文件
```sh
$ echo ''> index2.ts
```
> 4. 随便在index.ts和index2.ts中写点东西，然后编译成对应的js文件
```sh
$ tsc
```
> 5. 在tsconfig.json 添加include字段，表示只想编译这个文件，且删除刚刚编译好的两个js文件
> exclude 表示不想编译这个文件
```sh
$ del index.js

$ del index2.js

$ tsc
```

##### 配置详解
```json
"compilerOptions": {
  "incremental": true, // TS编译器在第一次编译之后会生成一个存储编译信息的文件，第二次编译会在第一次的基础上进行增量编译，可以提高编译的速度
  "tsBuildInfoFile": "./buildFile", // 增量编译文件的存储位置
  "diagnostics": true, // 打印诊断信息 
  "target": "ES5", // 目标语言的版本
  "module": "CommonJS", // 生成代码的模板标准
  "outFile": "./app.js", // 将多个相互依赖的文件生成一个文件，可以用在AMD模块中，即开启时应设置"module": "AMD",
  "lib": ["DOM", "ES2015", "ScriptHost", "ES2019.Array"], // TS需要引用的库，即声明文件，es5 默认引用dom、es5、scripthost,如需要使用es的高级版本特性，通常都需要配置，如es8的数组新特性需要引入"ES2019.Array",
  "allowJS": true, // 允许编译器编译JS，JSX文件
  "checkJs": true, // 允许在JS文件中报错，通常与allowJS一起使用
  "outDir": "./dist", // 指定输出目录
  "rootDir": "./", // 指定输出文件目录(用于输出)，用于控制输出目录结构
  "declaration": true, // 生成声明文件，开启后会自动生成声明文件
  "declarationDir": "./file", // 指定生成声明文件存放目录
  "emitDeclarationOnly": true, // 只生成声明文件，而不会生成js文件
  "sourceMap": true, // 生成目标文件的sourceMap文件
  "inlineSourceMap": true, // 生成目标文件的inline SourceMap，inline SourceMap会包含在生成的js文件中
  "declarationMap": true, // 为声明文件生成sourceMap
  "typeRoots": [], // 声明文件目录，默认时node_modules/@types
  "types": [], // 加载的声明文件包
  "removeComments":true, // 删除注释 
  "noEmit": true, // 不输出文件,即编译后不会生成任何js文件
  "noEmitOnError": true, // 发送错误时不输出任何文件
  "noEmitHelpers": true, // 不生成helper函数，减小体积，需要额外安装，常配合importHelpers一起使用
  "importHelpers": true, // 通过tslib引入helper函数，文件必须是模块
  "downlevelIteration": true, // 降级遍历器实现，如果目标源是es3/5，那么遍历器会有降级的实现
  "strict": true, // 开启所有严格的类型检查
  "alwaysStrict": true, // 在代码中注入'use strict'
  "noImplicitAny": true, // 不允许隐式的any类型
  "strictNullChecks": true, // 不允许把null、undefined赋值给其他类型的变量
  "strictFunctionTypes": true, // 不允许函数参数双向协变
  "strictPropertyInitialization": true, // 类的实例属性必须初始化
  "strictBindCallApply": true, // 严格的bind/call/apply检查
  "noImplicitThis": true, // 不允许this有隐式的any类型
  "noUnusedLocals": true, // 检查只声明、未使用的局部变量(只提示不报错)
  "noUnusedParameters": true, // 检查未使用的函数参数(只提示不报错)
  "noFallthroughCasesInSwitch": true, // 防止switch语句贯穿(即如果没有break语句后面不会执行)
  "noImplicitReturns": true, //每个分支都会有返回值
  "esModuleInterop": true, // 允许export=导出，由import from 导入
  "allowUmdGlobalAccess": true, // 允许在模块中全局变量的方式访问umd模块
  "moduleResolution": "node", // 模块解析策略，ts默认用node的解析策略，即相对的方式导入
  "baseUrl": "./", // 解析非相对模块的基地址，默认是当前目录
  "paths": { // 路径映射，相对于baseUrl
    // 如使用jq时不想使用默认版本，而需要手动指定版本，可进行如下配置
    "jquery": ["node_modules/jquery/dist/jquery.min.js"]
  },
  "rootDirs": ["src","out"], // 将多个目录放在一个虚拟目录下，用于运行时，即编译后引入文件的位置可能发生变化，这也设置可以虚拟src和out在同一个目录下，不用再去改变路径也不会报错
  "listEmittedFiles": true, // 打印输出文件
  "listFiles": true// 打印编译的文件(包括引用的声明文件)
}
 
// 指定一个匹配列表（属于自动指定该路径下的所有ts相关文件）
"include": [
   "src/**/*"
],
// 指定一个排除列表（include的反向操作）
 "exclude": [
   "demo.ts"
],
// 指定哪些文件使用该配置（属于手动一个个指定文件）
 "files": [
   "demo.ts"
]
```

##### 介绍几个常用的
###### 1. include
**指定编译文件默认是编译当前目录下所有的ts文件**
###### 2. exclude
**指定排除的文件**
###### 3. target
**指定编译js 的版本例如es5  es6**
###### 4. allowJS
**是否允许编译js文件**
###### 5. removeComments
**是否在编译过程中删除文件中的注释**
###### 6. rootDir
**编译文件的目录**
###### 7. outDir
**输出的目录**
###### 8. sourceMap
**代码源文件**
###### 9. strict
**严格模式**
###### 10. module
**默认common.js  可选es6模式 amd  umd 等**

#### namespace命名空间
> 我们在工作中无法避免全局变量造成的污染，TypeScript提供了namespace 避免这个问题出现
> - 内部模块，主要用于组织代码，避免命名冲突。
> - 命名空间内的类默认私有
> - 通过 export 暴露
> - 通过 namespace 关键字定义
**TypeScript与ECMAScript 2015一样，任何包含顶级import或者export的文件都被当成一个模块。**
**相反地，如果一个文件不带有顶级的import或者export声明，那么它的内容被视为全局可见的（因此对模块也是可见的）**

##### 基本使用
> 命名空间中通过export将想要暴露的部分导出(如果不用export 导出是无法读取其值的)
> 不能用ts-node 进行编译 他不认识namespace
```ts
namespace a {
    export const Time: number = 1000
    export const fn = <T>(arg: T): T => {
        return arg
    }
    fn(Time)
}
 
 
namespace b {
     export const Time: number = 1000
     export const fn = <T>(arg: T): T => {
        return arg
    }
    fn(Time)
}
 
a.Time
b.Time
```

##### 嵌套命名空间
```ts
namespace a {
    export namespace b {
        export class Vue {
            parameters: string
            constructor(parameters: string) {
                this.parameters = parameters
            }
        }
    }
}
 
let v = a.b.Vue
 
new v('1')
```

##### 抽离命名空间
> a.ts
```ts
export namespace V {
    export const a = 1
}
``` 
> b.ts
```ts
import {V} from '../observer/index'
 
console.log(V);  //{a:1}
```

##### 简化命名空间
```ts
namespace A  {
    export namespace B {
        export const C = 1
    }
}
 
import X = A.B.C
 
console.log(X);
```

##### 合并命名空间
> 重名的命名空间会合并
```ts
namespace S {
  export const s = 4
}

namespace S {
  export const m = 8
}

// 相当于
// namespace S {
//   export const s = 4
//   export const m = 8
// }

// S.m
// S.s

console.log(S); //{ s: 4, m: 8 }
```

##### 三斜线指令
> 三斜线指令是包含单个XML标签的单行注释。 注释的内容会做为编译器指令使用。
> 三斜线指令仅可放在包含它的文件的最顶端。 一个三斜线指令的前面只能出现单行或多行注释，这包括其它的三斜线指令。 如果它们出现在一个语句或声明之后，那么它们会被当做普通的单行注释，并且不具有特殊的涵义。

**`/// <reference path="..." />`指令是三斜线指令中最常见的一种。 它用于声明文件间的 依赖。**
> 三斜线引用告诉编译器在编译过程中要引入的额外的文件。
> 你也可以把它理解能import，它可以告诉编译器在编译过程中要引入的额外的文件

> 例如a.ts
```ts
namespace A {
    export const fn = () => 'a'
}
```

> b.ts
```ts
namespace A {
    export const fn2 = () => 'b'
}
```
> index.ts
> 引入之后直接可以使用变量A
```ts
///<reference path="./index2.ts" />
///<reference path="./index3.ts" />
 
 
console.log(A);
```

##### 声明文件引入
> 例如，把 `/// <reference types="node" />`引入到声明文件，表明这个文件使用了 `@types/node/index.d.ts`里面声明的名字； 并且，这个包需要在编译阶段与声明文件一起被包含进来。
> 仅当在你需要写一个d.ts文件时才使用这个指令。

**注意事项：**
> 如果你在配置文件 配置了noResolve 或者自身调用自身文件会报错

#### 声明文件d.ts
##### 声明文件 declare  
> 当使用第三方库时，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能。

```ts
declare var 声明全局变量
declare function 声明全局方法
declare class 声明全局类
declare enum 声明全局枚举类型
declare namespace 声明（含有子属性的）全局对象
interface 和 type 声明全局类型
/// <reference /> 三斜线指令
```

例如我们有一个express 和 axios
发现express 报错了
让我们去下载他的声明文件

`npm install @types/node -D`

那为什么axios 没有报错

我们可以去`node_modules` 下面去找`axios` 的`package json`

发现axios已经指定了声明文件 所以没有报错可以直接用
通过语法declare 暴露我们声明的axios 对象
**`declare  const axios: AxiosStatic;`**

如果有一些第三方包确实没有声明文件我们可以自己去定义
名称.d.ts 创建一个文件去声明
例如express.d.ts
**`declare  const express: ()=> any;`**
关于这些第三发的声明文件包都收录到了 [npm js](https://www.npmjs.com/~types?activeTab=packages/])

#### Mixins混入
> TypeScript 混入 Mixins 其实vue也有mixins这个东西 你可以把他看作为合并
##### 1. 对象混入
> **可以使用es6的Object.assign 合并多个对象**

此时 people 会被推断成一个交差类型 Name & Age & sex;

```ts
interface Name {
    name: string
}
interface Age {
    age: number
}
interface Sex {
    sex: number
}
 
let people1: Name = { name: "小满" }
let people2: Age = { age: 20 }
let people3: Sex = { sex: 1 }
 
const people = Object.assign(people1,people2,people3)
```

##### 2. 类的混入
> 首先声明两个mixins类 （严格模式要关闭不然编译不过）
```ts
class A {
    type: boolean = false;
    changeType() {
        this.type = !this.type
    }
}
 
 
class B {
    name: string = '张三';
    getName(): string {
        return this.name;
    }
}
```

> 下面创建一个类，结合了这两个mixins
> **首先应该注意到的是，没使用extends而是使用implements。 把类当成了接口**
> 我们可以这么做来达到目的，为将要mixin进来的属性方法创建出占位属性。 这告诉编译器这些成员在运行时是可用的。 这样就能使用mixin带来的便利，虽说需要提前定义一些占位属性

```ts
class C implements A,B{
    type:boolean
    changeType:()=>void;
    name: string;
    getName:()=> string
}
```

> 最后，创建这个帮助函数，帮我们做混入操作。 它会遍历mixins上的所有属性，并复制到目标上去，把之前的占位属性替换成真正的实现代码

**Object.getOwnPropertyNames()可以获取对象自身的属性，除去他继承来的属性，**
**对它所有的属性遍历，它是一个数组，遍历一下它所有的属性名**
```ts
Mixins(C, [A, B])
function Mixins(curCls: any, itemCls: any[]) {
    itemCls.forEach(item => {
        Object.getOwnPropertyNames(item.prototype).forEach(name => {
            curCls.prototype[name] = item.prototype[name]
        })
    })
}
```

#### 装饰器Decorator
> **Decorator 装饰器是一项实验性特性，在未来的版本中可能会发生改变**
> 它们不仅增加了代码的可读性，清晰地表达了意图，而且提供一种方便的手段，增加或修改类的功能
> 若要启用实验性的装饰器特性，你必须在命令行或tsconfig.json里启用编译器选项
```json
{
  "compilerOptions": {
    "experimentalDecorators": true,
  }
}
```

##### 装饰器
> 装饰器是一种特殊**类型的声明**，它能够被附加到`类声明`，`方法`，`访问符`，`属性或参数`上。

###### 1.首先定义一个类
```ts
class A {
    constructor() {
 
    }
}
```

###### 2.定义一个`类装饰器`函数 他会把ClassA的构造函数传入你的watcher函数当做第一个参数
```ts
const watcher: ClassDecorator = (target: Function) => {
    target.prototype.getParams = <T>(params: T):T => {
        return params
    }
}
```
###### 3.使用的时候 直接通过@函数名使用
```ts
@watcher
class A {
    constructor() {
 
    }
}
```
###### 4.验证
```ts
const a = new A();
console.log((a as any).getParams('123'));
```

##### 装饰器工厂
> 其实也就是一个高阶函数 外层的函数接受值 里层的函数最终接受类的构造函数
```ts
const watcher = (name: string): ClassDecorator => {
    return (target: Function) => {
        target.prototype.getParams = <T>(params: T): T => {
            return params
        }
        target.prototype.getOptions = (): string => {
            return name
        }
    }
}
 
@watcher('name')
class A {
    constructor() {
 
    }
}
 
const a = new A();
console.log((a as any).getParams('123'));
```

##### 装饰器组合
> 就是可以使用多个装饰器
```ts
const watcher = (name: string): ClassDecorator => {
    return (target: Function) => {
        target.prototype.getParams = <T>(params: T): T => {
            return params
        }
        target.prototype.getOptions = (): string => {
            return name
        }
    }
}
const watcher2 = (name: string): ClassDecorator => {
    return (target: Function) => {
        target.prototype.getNames = ():string => {
            return name
        }
    }
}
 
@watcher2('name2')
@watcher('name')
class A {
    constructor() {
 
    }
}
 
 
const a = new A();
console.log((a as any).getOptions());
console.log((a as any).getNames());
```

##### 方法装饰器
> 返回三个参数
> 1. 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
> 2. 成员的名字。
> 3. 成员的属性描述符。

> 返回参数
```ts
[
  {},
  'setParasm',
  {
    value: [Function: setParasm],
    writable: true,
    enumerable: false,
    configurable: true
  }
]
```

```ts
const met:MethodDecorator = (...args) => {
    console.log(args);
}
 
class A {
    constructor() {
 
    }
    @met
    getName ():string {
        return '小满'
    }
}
 
 
const a = new A();
```

##### 属性装饰器
> 返回两个参数
> 1. 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
> 2. 属性的名字。

> 返回参数
```ts
[ {}, 'name', undefined ]
```

```ts
const met:PropertyDecorator = (...args) => {
    console.log(args);
}
 
class A {
    @met
    name:string
    constructor() {
 
    }
   
}
 
 
const a = new A();
```

##### 参数装饰器
> 返回三个参数
> 1. 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
> 2. 成员的名字。
> 3. 参数在函数参数列表中的索引。

> 返回参数
```ts
[ {}, 'setParasm', 0 ]
```

```ts
const met:ParameterDecorator = (...args) => {
    console.log(args);
}
 
class A {
    constructor() {
 
    }
    setParasm (@met name:string = '213') {
 
    }
}
 
 
const a = new A();
```

#### Rollup构建TS项目
##### 安装依赖
> 1. 全局安装rollup npm install rollup-g
> 2. 安装TypeScript   npm install typescript -D
> 3. 安装TypeScript 转换器 npm install rollup-plugin-typescript2 -D
> 4. 安装代码压缩插件 npm install rollup-plugin-terser -D
> 5. 安装rollupweb服务 npm install rollup-plugin-serve -D
> 6. 安装热更新 npm install rollup-plugin-livereload -D
> 7. 引入外部依赖 npm install rollup-plugin-node-resolve -D
> 8. 安装配置环境变量用来区分本地和生产  npm install cross-env -D
> 9. 替换环境变量给浏览器使用 npm install rollup-plugin-replace -D

**用`rollup`打包时因为`webpack`打包体积太大，而`rollup`打包体积较小**
##### 配置json文件

```sh
$ npm init -y
```

```json
{
  "name": "rollupTs",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "cross-env NODE_ENV=development  rollup -c -w",
    "build":"cross-env NODE_ENV=produaction  rollup -c"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "cross-env": "^7.0.3",
    "rollup-plugin-livereload": "^2.0.5",
    "rollup-plugin-node-resolve": "^5.2.0",
    "rollup-plugin-replace": "^2.2.0",
    "rollup-plugin-serve": "^1.1.0",
    "rollup-plugin-terser": "^7.0.2",
    "rollup-plugin-typescript2": "^0.31.1",
    "typescript": "^4.5.5"
  }
}
```

##### 配置rollup文件
```js
console.log(process.env);
import ts from 'rollup-plugin-typescript2'
import path from 'path'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import { terser } from 'rollup-plugin-terser'
import resolve from 'rollup-plugin-node-resolve'
import repacle from 'rollup-plugin-replace'
 
const isDev = () => {
    return process.env.NODE_ENV === 'development'
}
export default {
    input: "./src/main.ts",
    output: {
        file: path.resolve(__dirname, './lib/index.js'),
        format: "umd",
        sourcemap: true
    },
 
    plugins: [
        ts(),
        terser({
            compress: {
                drop_console: !isDev()
            }
        }),
        repacle({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        resolve(['.js', '.ts']),
        isDev() && livereload(),
        isDev() && serve({
            open: true,
            openPage: "/public/index.html"
        })
    ]
}
```

##### 配置tsconfig.json
```json
{
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig.json to read more about this file */
 
    /* Projects */
    // "incremental": true,                              /* Enable incremental compilation */
    // "composite": true,                                /* Enable constraints that allow a TypeScript project to be used with project references. */
    // "tsBuildInfoFile": "./",                          /* Specify the folder for .tsbuildinfo incremental compilation files. */
    // "disableSourceOfProjectReferenceRedirect": true,  /* Disable preferring source files instead of declaration files when referencing composite projects */
    // "disableSolutionSearching": true,                 /* Opt a project out of multi-project reference checking when editing. */
    // "disableReferencedProjectLoad": true,             /* Reduce the number of projects loaded automatically by TypeScript. */
 
    /* Language and Environment */
    "target": "es5",                                  /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */
    // "lib": [],                                        /* Specify a set of bundled library declaration files that describe the target runtime environment. */
    // "jsx": "preserve",                                /* Specify what JSX code is generated. */
    // "experimentalDecorators": true,                   /* Enable experimental support for TC39 stage 2 draft decorators. */
    // "emitDecoratorMetadata": true,                    /* Emit design-type metadata for decorated declarations in source files. */
    // "jsxFactory": "",                                 /* Specify the JSX factory function used when targeting React JSX emit, e.g. 'React.createElement' or 'h' */
    // "jsxFragmentFactory": "",                         /* Specify the JSX Fragment reference used for fragments when targeting React JSX emit e.g. 'React.Fragment' or 'Fragment'. */
    // "jsxImportSource": "",                            /* Specify module specifier used to import the JSX factory functions when using `jsx: react-jsx*`.` */
    // "reactNamespace": "",                             /* Specify the object invoked for `createElement`. This only applies when targeting `react` JSX emit. */
    // "noLib": true,                                    /* Disable including any library files, including the default lib.d.ts. */
    // "useDefineForClassFields": true,                  /* Emit ECMAScript-standard-compliant class fields. */
 
    /* Modules */
    "module": "ES2015",                                /* Specify what module code is generated. */
    // "rootDir": "./",                                  /* Specify the root folder within your source files. */
    // "moduleResolution": "node",                       /* Specify how TypeScript looks up a file from a given module specifier. */
    // "baseUrl": "./",                                  /* Specify the base directory to resolve non-relative module names. */
    // "paths": {},                                      /* Specify a set of entries that re-map imports to additional lookup locations. */
    // "rootDirs": [],                                   /* Allow multiple folders to be treated as one when resolving modules. */
    // "typeRoots": [],                                  /* Specify multiple folders that act like `./node_modules/@types`. */
    // "types": [],                                      /* Specify type package names to be included without being referenced in a source file. */
    // "allowUmdGlobalAccess": true,                     /* Allow accessing UMD globals from modules. */
    // "resolveJsonModule": true,                        /* Enable importing .json files */
    // "noResolve": true,                                /* Disallow `import`s, `require`s or `<reference>`s from expanding the number of files TypeScript should add to a project. */
 
    /* JavaScript Support */
    // "allowJs": true,                                  /* Allow JavaScript files to be a part of your program. Use the `checkJS` option to get errors from these files. */
    // "checkJs": true,                                  /* Enable error reporting in type-checked JavaScript files. */
    // "maxNodeModuleJsDepth": 1,                        /* Specify the maximum folder depth used for checking JavaScript files from `node_modules`. Only applicable with `allowJs`. */
 
    /* Emit */
    // "declaration": true,                              /* Generate .d.ts files from TypeScript and JavaScript files in your project. */
    // "declarationMap": true,                           /* Create sourcemaps for d.ts files. */
    // "emitDeclarationOnly": true,                      /* Only output d.ts files and not JavaScript files. */
      "sourceMap": true,                                /* Create source map files for emitted JavaScript files. */
    // "outFile": "./",                                  /* Specify a file that bundles all outputs into one JavaScript file. If `declaration` is true, also designates a file that bundles all .d.ts output. */
    // "outDir": "./",                                   /* Specify an output folder for all emitted files. */
    // "removeComments": true,                           /* Disable emitting comments. */
    // "noEmit": true,                                   /* Disable emitting files from a compilation. */
    // "importHelpers": true,                            /* Allow importing helper functions from tslib once per project, instead of including them per-file. */
    // "importsNotUsedAsValues": "remove",               /* Specify emit/checking behavior for imports that are only used for types */
    // "downlevelIteration": true,                       /* Emit more compliant, but verbose and less performant JavaScript for iteration. */
    // "sourceRoot": "",                                 /* Specify the root path for debuggers to find the reference source code. */
    // "mapRoot": "",                                    /* Specify the location where debugger should locate map files instead of generated locations. */
    // "inlineSourceMap": true,                          /* Include sourcemap files inside the emitted JavaScript. */
    // "inlineSources": true,                            /* Include source code in the sourcemaps inside the emitted JavaScript. */
    // "emitBOM": true,                                  /* Emit a UTF-8 Byte Order Mark (BOM) in the beginning of output files. */
    // "newLine": "crlf",                                /* Set the newline character for emitting files. */
    // "stripInternal": true,                            /* Disable emitting declarations that have `@internal` in their JSDoc comments. */
    // "noEmitHelpers": true,                            /* Disable generating custom helper functions like `__extends` in compiled output. */
    // "noEmitOnError": true,                            /* Disable emitting files if any type checking errors are reported. */
    // "preserveConstEnums": true,                       /* Disable erasing `const enum` declarations in generated code. */
    // "declarationDir": "./",                           /* Specify the output directory for generated declaration files. */
    // "preserveValueImports": true,                     /* Preserve unused imported values in the JavaScript output that would otherwise be removed. */
 
    /* Interop Constraints */
    // "isolatedModules": true,                          /* Ensure that each file can be safely transpiled without relying on other imports. */
    // "allowSyntheticDefaultImports": true,             /* Allow 'import x from y' when a module doesn't have a default export. */
    "esModuleInterop": true,                             /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables `allowSyntheticDefaultImports` for type compatibility. */
    // "preserveSymlinks": true,                         /* Disable resolving symlinks to their realpath. This correlates to the same flag in node. */
    "forceConsistentCasingInFileNames": true,            /* Ensure that casing is correct in imports. */
 
    /* Type Checking */
    "strict": true,                                      /* Enable all strict type-checking options. */
    // "noImplicitAny": true,                            /* Enable error reporting for expressions and declarations with an implied `any` type.. */
    // "strictNullChecks": true,                         /* When type checking, take into account `null` and `undefined`. */
    // "strictFunctionTypes": true,                      /* When assigning functions, check to ensure parameters and the return values are subtype-compatible. */
    // "strictBindCallApply": true,                      /* Check that the arguments for `bind`, `call`, and `apply` methods match the original function. */
    // "strictPropertyInitialization": true,             /* Check for class properties that are declared but not set in the constructor. */
    // "noImplicitThis": true,                           /* Enable error reporting when `this` is given the type `any`. */
    // "useUnknownInCatchVariables": true,               /* Type catch clause variables as 'unknown' instead of 'any'. */
    // "alwaysStrict": true,                             /* Ensure 'use strict' is always emitted. */
    // "noUnusedLocals": true,                           /* Enable error reporting when a local variables aren't read. */
    // "noUnusedParameters": true,                       /* Raise an error when a function parameter isn't read */
    // "exactOptionalPropertyTypes": true,               /* Interpret optional property types as written, rather than adding 'undefined'. */
    // "noImplicitReturns": true,                        /* Enable error reporting for codepaths that do not explicitly return in a function. */
    // "noFallthroughCasesInSwitch": true,               /* Enable error reporting for fallthrough cases in switch statements. */
    // "noUncheckedIndexedAccess": true,                 /* Include 'undefined' in index signature results */
    // "noImplicitOverride": true,                       /* Ensure overriding members in derived classes are marked with an override modifier. */
    // "noPropertyAccessFromIndexSignature": true,       /* Enforces using indexed accessors for keys declared using an indexed type */
    // "allowUnusedLabels": true,                        /* Disable error reporting for unused labels. */
    // "allowUnreachableCode": true,                     /* Disable error reporting for unreachable code. */
 
    /* Completeness */
    // "skipDefaultLibCheck": true,                      /* Skip type checking .d.ts files that are included with TypeScript. */
    "skipLibCheck": true                                 /* Skip type checking all .d.ts files. */
  }
}
```

#### webpack构建TS项目
##### 安装依赖
> 安装webpack   npm install webpack -D
> webpack4以上需要 npm install  webpack-cli -D,否则不需要
> 编译TS  npm install ts-loader -D
> TS环境 npm install typescript -D
> 热更新服务 npm install  webpack-dev-server -D,自带浏览器环境变量的
> HTML模板 npm install html-webpack-plugin -D

##### 配置json文件

```sh
$ npm init -y
```

```json
{
  "name": "study",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "webpack-dev-server",
    "build": "webpack"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "html-webpack-plugin": "^5.5.0",
    "ts-loader": "^9.4.2",
    "typescript": "^4.9.4",
    "webpack": "^5.75.0",
    "webpack-cli": "^5.0.1",
    "webpack-dev-server": "^4.11.1"
  }
}
```

##### 配置文件 webpack.config.js
```js
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: "./src/index.ts",
    mode: "development",
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "index.js"
    },
    stats: "none",
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader"
            }
        ]
    },
    devServer: {
        port: 1988,
        proxy: {}
    },
    plugins: [
        new htmlWebpackPlugin({
            template: "./public/index.html"
        })
    ]
}
```

### 实战TS编写发布订阅模式
#### 概述
**什么是发布订阅模式，其实小伙伴已经用到了发布订阅模式例如addEventListener，Vue evnetBus 都属于发布订阅模式**
> 简单来说就是 你要和 大傻 二傻 三傻打球，大傻带球，二傻带水，三傻带球衣。全都准备完成后开始打球。

##### 思维导图
首先 需要定义三个角色 发布者 订阅者 调度者
![typora.jpg](https://img-blog.csdnimg.cn/056aa1574a9542ae9cdf44bf790cea71.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5bCP5ruhenM=,size_20,color_FFFFFF,t_70,g_se,x_16)

#### 具体代码
1. on订阅/监听
2. emit 发布/注册
3. once 只执行一次
4. off解除绑定

```ts
interface EventFace {
    on: (name: string, callback: Function) => void,
    emit: (name: string, ...args: Array<any>) => void,
    off: (name: string, fn: Function) => void,
    once: (name: string, fn: Function) => void
}
 
interface List {
    [key: string]: Array<Function>,
}
class Dispatch implements EventFace {
    list: List
    constructor() {
        this.list = {}
    }
    on(name: string, callback: Function) {
        const callbackList: Array<Function> = this.list[name] || [];
        callbackList.push(callback)
        this.list[name] = callbackList
    }
    emit(name: string, ...args: Array<any>) {
        let evnetName = this.list[name]
        if (evnetName) {
            evnetName.forEach(fn => {
                fn.apply(this, args)
            })
        } else {
            console.error('该事件未监听');
        }
    }
    off(name: string, fn: Function) {
        let evnetName = this.list[name]
        if (evnetName && fn) {
            let index = evnetName.findIndex(fns => fns === fn)
            evnetName.splice(index, 1)
        } else {
            console.error('该事件未监听');
        }
    }
    once(name: string, fn: Function) {
        let decor = (...args: Array<any>) => {
            fn.apply(this, args)
            this.off(name, decor)
        }
        this.on(name, decor)
    }
}
const o = new Dispatch()
 
 
o.on('abc', (...arg: Array<any>) => {
    console.log(arg, 1);
})
 
o.once('abc', (...arg: Array<any>) => {
    console.log(arg, 'once');
})
// let fn = (...arg: Array<any>) => {
//     console.log(arg, 2);
// }
// o.on('abc', fn)
// o.on('ddd', (aaaa: string) => {
//     console.log(aaaa);
// })
//o.off('abc', fn)
 
o.emit('abc', 1, true, '小满')
 
o.emit('abc', 2, true, '小满')
 
// o.emit('ddd', 'addddddddd')
```

### TS进阶用法proxy & Reflect
#### 学习proxy对象代理
> Proxy 对象用于创建一个对象的代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）

#### 1. target
> 要使用 Proxy 包装的目标对象（可以是任何类型的对象，包括原生数组，函数，甚至另一个代理）。

#### 2. handler
> 一个通常以函数作为属性的对象，各属性中的函数分别定义了在执行各种操作时代理 p 的行为。

##### handler.get() 本次使用的get
> 属性读取操作的捕捉器。
##### handler.set() 本次使用的set
> 属性设置操作的捕捉器。

#### Reflect
> 与大多数全局对象不同Reflect并非一个构造函数，所以不能通过new运算符对其进行调用，或者将Reflect对象作为一个函数来调用。Reflect的所有属性和方法都是静态的（就像Math对象）

#### Reflect.get(target, name, receiver) 
> Reflect.get方法查找并返回target对象的name属性，如果没有该属性返回undefined

#### Reflect.set(target, name,value, receiver) 
> Reflect.set方法设置target对象的name属性等于value。

```ts
type Person = {
    name: string,
    age: number,
    text: string
}
 
 
const proxy = (object: any, key: any) => {
    return new Proxy(object, {
        get(target, prop, receiver) {
            console.log(`get key======>${key}`);
            return Reflect.get(target, prop, receiver)
        },
 
        set(target, prop, value, receiver) {
            console.log(`set key======>${key}`);
 
            return Reflect.set(target, prop, value, receiver)
        }
    })
}
 
const logAccess = (object: Person, key: 'name' | 'age' | 'text') => {
    return proxy(object, key)
}
 
let man: Person = logAccess({
    name: "小满",
    age: 20,
    text: "我的很小"
}, 'age')
 
man.age  = 30
 
console.log(man);
```

#### 使用泛型+keyof优化
```ts
type Person = {
    name: string,
    age: number,
    text: string
}
 
 
const proxy = (object: any, key: any) => {
    return new Proxy(object, {
        get(target, prop, receiver) {
            console.log(`get key======>${key}`);
            return Reflect.get(target, prop, receiver)
        },
 
        set(target, prop, value, receiver) {
            console.log(`set key======>${key}`);
 
            return Reflect.set(target, prop, value, receiver)
        }
    })
}
 
 
const logAccess = <T>(object: T, key: keyof T): T => {
    return proxy(object, key)
}
 
let man: Person = logAccess({
    name: "小满",
    age: 20,
    text: "我的很小"
}, 'age')
 
 
let man2 = logAccess({
    id:1,
    name:"小满2"
}, 'name')
 
man.age = 30
 
console.log(man);
```

## Redux
### Redux介绍
> Redux是React中使用广泛的集中状态管理工具  类比vuex之于vue 同类的工具还有mobx等


![image.png](https://cdn.nlark.com/yuque/0/2022/png/274425/1658971615411-797bcdbe-6afc-44f7-b6b7-251639b7bff8.png#averageHue=%23ececec&clientId=u26950247-f034-4&crop=0&crop=0&crop=1&crop=1&errorMessage=unknown%20error&from=paste&height=403&id=u6af4c53b&margin=%5Bobject%20Object%5D&name=image.png&originHeight=805&originWidth=1428&originalType=binary&ratio=1&rotation=0&showTitle=false&size=325303&status=error&style=none&taskId=ufdc92111-f43d-4350-863b-932b4a73ab7&title=&width=714)
**为什么要使用Redux？**

1. 独立于组件，无视组件之间的层级关系，简化通信问题
2. 单项数据流清晰，易于定位bug
3. 调试工具配套良好，方便调试
### Redux快速体验
#### 1. Redux数据流架构
> Redux的难点是理解它对于数据修改的规则, 下图动态展示了在整个数据的修改中，数据的流向

![无标题-2022-07-27-1257.png](https://cdn.nlark.com/yuque/0/2022/png/274425/1659005485363-cb78240a-c99b-4f19-a7d9-35c91ccbb6ea.png#averageHue=%23f8f7f6&clientId=u26950247-f034-4&crop=0&crop=0&crop=1&crop=1&errorMessage=unknown%20error&from=drop&id=uddcb2d99&margin=%5Bobject%20Object%5D&name=%E6%97%A0%E6%A0%87%E9%A2%98-2022-07-27-1257.png&originHeight=1027&originWidth=1814&originalType=binary&ratio=1&rotation=0&showTitle=false&size=835987&status=error&style=none&taskId=ueed86167-5e6f-46cd-bdd0-37f8f2244b3&title=)
为了职责清晰，Redux代码被分为三个核心的概念，我们学redux，其实就是学这三个核心概念之间的配合，三个概念分别是:

1. state:  一个对象 存放着我们管理的数据
2. action:  一个对象 用来描述你想怎么改数据
3. reducer:  一个函数 根据action的描述更新state
#### 2. 纯Redux实现计数器
> 核心步骤
> 1. 创建reducer函数 在内部定义好action和state的定义关系
> 2. 调用Redux的createStore方法传入定义好的reducer函数生成store实例
> 3. 通过store实例身上的subscribe方法监控数据是否变化
> 4. 点击按钮 通过专门的dispatch函数 提交action对象 实现数据更新

```html
<button id="decrement">-</button>
<span id="count">0</span>
<button id="increment">+</button>

<script src="https://unpkg.com/redux@latest/dist/redux.min.js"></script>

<script>
  // 定义reducer函数 
  // 内部主要的工作是根据不同的action 返回不同的state
  function counterReducer (state = { count: 0 }, action) {
    switch (action.type) {
      case 'INCREMENT':
        return { count: state.count + 1 }
      case 'DECREMENT':
        return { count: state.count - 1 }
      default:
        return state
    }
  }
  // 使用reducer函数生成store实例
  const store = Redux.createStore(counterReducer)
  
  // 订阅数据变化
  store.subscribe(() => {
    console.log(store.getState())
    document.getElementById('count').innerText = store.getState().count
    
  })
  // 增
  const inBtn = document.getElementById('increment')
  inBtn.addEventListener('click', () => {
    store.dispatch({
      type: 'INCREMENT'
    })
  })
  // 减
  const dBtn = document.getElementById('decrement')
  dBtn.addEventListener('click', () => {
    store.dispatch({
      type: 'DECREMENT'
    })
  })
</script>
```
### Redux与React
> Redux虽然是一个框架无关可以独立运行的插件，但是社区通常还是把它与React绑定在一起使用，以一个计数器案例体验一下Redux + React 的基础使用

#### 1. 开发环境准备
> 使用create-react-app创建react基础项目，并安装Redux相关工具

```bash
# 创建项目
$ yarn create vite react-redux --template react


# 安装redux配套工具
$ yarn add  @reduxjs/toolkit react-redux

# 启动项目
$ yarn dev
```
目录核心结构
```
src
  - store
    - modules  // 模块store
    - index.js // 组合模块的入口文件
  - App.js
```
#### 2. 创建counterStore
> 创建store的的核心步骤分为两步
> 1. 使用toolkit的**createSlice**方法创建一个独立的子模块
> 2. 使用**configureStore**语法组合子模块

1- 创建子模块
```javascript
import { createSlice } from '@reduxjs/toolkit'

const counter = createSlice({
  // 模块名称独一无二
  name: 'counter',
  // 初始数据
  initialState: {
    count: 1
  },
  // 修改数据的同步方法
  reducers: {
    add (state) {
      state.count++
    }
  }
})

const { add } = counter.actions
const reducer = counter.reducer

// 导出修改数据的函数
export { add }
// 导出reducer
export default reducer
```
2- 组合子模块
```javascript
import { configureStore } from '@reduxjs/toolkit'

import counterStore from './counterStore'

export default configureStore({
  reducer: {
    // 注册子模块
    counterStore
  }
})
```
#### 3. 为React提供Redux store
> 要想让所有的组件都有资格访问store中的数据，需要我们在入口文件中，渲染根组件的位置通过Provider提供store数据

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// 导入store
import store from './store'
// 导入store提供组件Provider
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  // 提供store数据
  <Provider store={store}>
    <App />
  </Provider>
)
```
#### 4. 组件使用store中的数据
> 组件使用store中的数据需要借助一个hook方法，叫做useSelector
> useSelector(state => state.模块名)  方法的返回值为一个对象，对象中包含store子模块中的所有数据

```jsx
import { useSelector } from 'react-redux'

function App () {
  // 使用数据
  const { count } = useSelector(state => state.counterStore)
  
  return (
    <div className="App">
      {count}
      <button onClick={clickHandler}>+</button>
    </div>
  )
}

export default App
```

#### 5. 组件修改store中的数据
> 修改store中的数据有俩个核心步骤
> 1. 使用counterStore模块中导出的add方法创建action对象
> 2. 通过dispatch函数以action作为参数传入完成数据更新

```jsx
import { useSelector, useDispatch } from 'react-redux'
import { add } from './store/counterStore'

function App () {
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
```

#### 6. 组件修改数据并传参
> 上一小节通过dispatch函数提交action修改了数据，如果在提交的时候需要传参怎么做呢

1- 修改数据的方法中补充第二个参数action
```javascript
import { createSlice } from "@reduxjs/toolkit"
const counterStore = createSlice({
  name: 'counter', // 独一无二不重复的名字语义化
  // 定义初始化的数据
  initialState: {
    taskList: ['react']
  },
  reducers: {
    // action为一个对象 对象中有一个固定的属性叫做payload 为传递过来的参数
    addTaskList (state, action) {
      state.taskList.push(action.payload)
    }
  }
})

// 生成修改数据的方法导出
const { addTaskList } = counterStore.actions
export { addTaskList }
// 生成reducer 导出 供index.js做组合模块
const reducer = counterStore.reducer

export default reducer
```
2- dispatch的时候传入实参
```jsx
<button onClick={() => dispatch(addTaskList('vue'))}>addList</button>
```
#### 7. Redux异步处理
> 测试接口地址：  [http://geek.itheima.net/v1_0/channels](http://geek.itheima.net/v1_0/channels')

```javascript
import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const channelStore = createSlice({
  name: 'task',
  initialState: {
    channels: []
  },
  reducers: {
    setChannels (state, action) {
      state.channels = action.payload
    }
  }
})


// 创建异步
const { setChannels } = channelStore.actions
const url = 'http://geek.itheima.net/v1_0/channels'
// 封装一个函数 在函数中return一个新函数 在新函数中封装异步
// 得到数据之后通过dispatch函数 触发修改
const fetchChannelList = () => {
  return async (dispatch) => {
    const res = await axios.get(url)
    dispatch(setChannels(res.data.data.channels))
  }
}

export { fetchChannelList }

const reducer = channelStore.reducer
export default reducer
```
```jsx
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchChannelList } from './store/channelStore'

function App () {
  // 使用数据
  const { channels } = useSelector(state => state.channelStore)
  useEffect(() => {
    const action = fetchTaskList()
    dispatch(action)
  }, [dispatch])

  return (
    <div className="App">
      <ul>
        {channels.map(task => <li key={task.id}>{task.name}</li>)}
      </ul>
    </div>
  )
}

export default App
```

### Todos综合案例
![image.png](https://cdn.nlark.com/yuque/0/2022/png/274425/1659260715631-cd90add7-861f-45b8-940e-469fcaddd0e2.png#averageHue=%23f6f6f6&clientId=u85ea2a98-4aa8-4&crop=0&crop=0&crop=1&crop=1&errorMessage=unknown%20error&from=paste&height=471&id=u1e2817a0&margin=%5Bobject%20Object%5D&name=image.png&originHeight=942&originWidth=1842&originalType=binary&ratio=1&rotation=0&showTitle=false&size=92055&status=error&style=none&taskId=u4087243b-5971-4ddf-87a6-9826e9ec975&title=&width=921)
#### 1. 准备开发环境
```bash
# 克隆项目到本地
$ git clone https://gitee.com/react-course-series/react-redux.git

# 安装所有依赖

$ yarn 
# or 
$ npm i
```
#### 2. 渲染列表
> 1. 在组件中通过核心方法 useSelector方法使用数据
> 2. 使用map方法进行列表遍历

```jsx
// 导入useSelector方法
import { useSelector } from 'react-redux'

// 从store中获取list数据
const { list } = useSelector(state => state.taskStore)


// 渲染列表
<ul className="todo-list">
  {list.map((task) => (
    <li key={task.id} className={task.done ? 'completed todo' : 'todo'}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={task.done}
          onChange={(e) => singleCheck(task.id, e)}
        />
        <label> {task.title} </label>
        <button
          className="destroy"
          onClick={() => delTask(task.id)}></button>
      </div>
    </li>
  ))}
</ul>
```
#### 3. 实现删除
> 实现步骤：
> 1. 在store的reducers选项中定义修改数据的方法 然后导出
> 2. 在组件中通过dispatch函数触发方法的执行并传入id参数

```javascript
reducers:{
  // 删除的方法
   delTask (state, action) {
      state.list = state.list.filter(task => task.id !== action.payload)
   }
}

// 导出删除action函数
// 导出action函数
const { delTask } = taskStore.actions
export { delTask }
```
```jsx
// 导入生成dispatch方法的hook
import { useDispatch } from 'react-redux'

// 得到dispatch方法
const dispatch = useDispatch()

// 通过dispatch函数调用action并传入id
<button
  className="destroy"
  onClick={() => dispatch(delTask(task.id))}>
</button>
```
#### 4. 切换单选状态
> 实现步骤：
> 1. 在reducers选项中创建切换状态的函数，内部通过传入的id找到要修改的项 进行取反
> 2. 组件中通过dispatch函数触发并传入id

```javascript
reducers:{
  toggleTask (state, action) {
    const item = state.list.find(task => task.id === action.payload)
    item.done = !item.done
  }
}

// 解构导出
const { toggleTask } = taskStore.actions

// 导出action函数
export { toggleTask }
```
```jsx
<input
  className="toggle"
  type="checkbox"
  checked={task.done}
  onChange={() => dispatch(toggleTask(task.id))}
/>
```
#### 5. 切换全选状态
> 实现思路：
> 1. 全选其实就是遍历数组中的所有项把每一项的done字段都改成true
> 2. 反选其实就是遍历数组中的所有项把每一项的done字段都改成false
> 3. 总之，done字段的值始终和当前全选框的状态决定
> 
实现步骤：
> 1. 在store中的reducers函数中定义修改数据的action函数控制done字段的变化
> 2. 导出相应的action函数 供组件使用
> 3. 组件中通过 checked属性控制是否全选的UI显示，在change事件中触发action

```javascript
reducers:{
  // 全选
  allCheck(state, action){
    state.list.forEach(item=>item.done = action.payload)
  }
}

// 导出action函数
const { allCheck } = taskStore.actions
export { allCheck }
```

```jsx
<input
  id="toggle-all"
  className="toggle-all"
  type="checkbox"
  checked={list.every((task) => task.done)}
  onChange={(e) => dispatch(allCheck(e.target.checked))}
/>
```
#### 6. 新增实现
> 要求: 输入框中输入内容，用户在回车时可以实现添加功能
> 实现思路和步骤
> 1. 在redux中定义新增的方法 addTask
> 2. 在组件中通过受控的方式 记录输入框中的数据
> 3. keyUp事件中判断当前是否点击的是enter[keyCode为13]  如果是通过dispatch执行修改


```javascript
// 新增: 按照list中item的对象结构 传入一个新的对象 push到数组中
reducer:{
   addTask (state, action) {
      state.taskList.push(action.payload)
   }
}
```
```jsx
// 1. 受控的方式存入用户输入数据  
// 2.keyUp 判断点击的是enter dispatch触发修改数据的函数
const [keyword, setKeyword] = useState('')
const onChange = (e) => {
  setKeyword(e.target.value)
}
const onKeyUp = (e) => {
  if (e.keyCode === 13) {
    dispatch(
      addTask({
        id: 3,
        name: keyword,
        isDone: false,
      })
    )
    setKeyword('')
  }
}

<input
  className="new-todo"
  autoFocus
  autoComplete="off"
  placeholder="What needs to be done?"
  value={keyword}
  onChange={onChange}
  onKeyUp={onKeyUp}
/>
```

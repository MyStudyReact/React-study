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

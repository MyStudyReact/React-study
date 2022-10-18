# 学习React
> 源码地址：https://gitee.com/react-cp/react-pc-code

> React基础讲义: https://www.yuque.com/fechaichai/qeamqf/xbai87

> React和Mobx讲义: https://www.yuque.com/fechaichai/qeamqf/apomum

> ReactPc项目讲义: https://www.yuque.com/fechaichai/tzzlh1

## React基础
### 环境初始化
#### 使用脚手架创建项目
```sh
$ npx create-react-app react-stydy
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

### React组件基础
> 主要分成 函数组件和类组件两种
**函数组件和类组件的区别**
> 有没有状态--(组件内部可以控制的自己的属性)
- 函数组件没有状态，也叫无状态组件（比如只有模板插槽，props传递）
  - 负责静态结构的展示
- class类组件有状态，也叫有状态组件
  - 提供状态，提供交互

#### 函数组件
`目标任务：`能够独立使用函数完成react组件的创建和渲染
**概念**
> 使用 JS 的函数（或箭头函数）创建的组件，就叫做函数组件
**约定说明**
1. 组件的名称必须首字母大写，react内部会根据这个来判断是组件还是普通的HTML标签
2. 函数组件必须有返回值，表示该组件的 UI 结构；如果不需要渲染任何内容，则返回 null
3. 组件就像 HTML 标签一样可以被渲染到页面中。组件表示的是一段结构内容，对于函数组件来说，渲染的内容是函数的返回值就是对应的内容
4. 使用函数名称作为组件标签名称，可以成对出现也可以自闭合

#### 类组件
`目标任务:`能够独立完成类组件的创建和渲染
**概念**
> 使用 ES6 的 class 创建的组件，叫做类（class）组件
**约定说明**
1. **类名称也必须以大写字母开头,且为驼峰**
2. 类组件应该继承 React.Component 父类，从而使用父类中提供的方法或属性
3. 类组件必须提供 render 方法render 方法必须有返回值，表示该组件的 UI 结构

#### 函数组件的事件绑定
`目标任务:`能够独立绑定任何事件并能获取到事件对象e
##### 1. 如何绑定事件
- 语法
on + 事件名称 = { 事件处理程序 } ，比如：`<div onClick={ onClick }></div> `
- 注意点
react事件采用驼峰命名法，比如：onMouseEnter、onFocus
##### 2. 获取事件对象
> 获取事件对象e只需要在 事件的回调函数中 补充一个形参e即可拿到
##### 3. 传递额外参数
> 解决思路: 改造事件绑定为箭头函数 在箭头函数中完成参数的传递

#### 类组件的事件绑定
> - 整体的套路都是一致的 和函数组件没有太多不同
> - 唯一需要注意的 因为处于class 类环境下 所以定义事件回调函数 以及 绑定它写法上有不同
> - 定义的时候: class Fields语法 (写在定义的class里面)
> - 使用的时候: 需要借助this关键词获取
**特别注意**
> 之所以要采取class Fields写法是为了保证this的指向正确 永远指向当前的组件实例
> 不需要用const let去定义，直接写事件名

#### 组件状态
`目标任务:`能够为组件添加状态和修改状态的值
> 一个前提：在React hook出来之前，函数式组件是没有自己的状态的，所以我们统一通过类组件来讲解

![image](https://user-images.githubusercontent.com/54365306/196343150-e91ca8ed-bcfb-4705-b6dc-7ac07a1ff3b7.png)

##### 1. 初始化状态
- 通过class的实例属性state来初始化 
- state的值是一个对象结构，表示一个组件可以有多个数据状态
##### 2. 读取状态
- 通过this.state来获取状态 
##### 3. 修改状态
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


#### React的状态不可变
`目标任务:`能够理解不可变的意义并且知道在实际开发中如何修改状态
> 概念：不要直接修改状态的值，而是基于当前状态创建新的状态值
> 类似于微信小程序修改值 https://blog.csdn.net/weihaifeng163/article/details/122696014

#### 表单处理
`目标任务:`能够使用受控组件的方式获取文本框的值

**使用React处理表单元素，一般有俩种方式：**
1. 受控组件 （推荐使用）
2. 非受控组件 （了解）
##### 1. 受控表单组件
> 什么是受控组件？  input框自己的状态被React组件状态控制
> React组件的状态的地方是在state中，input表单元素也有自己的状态是在value中，React将state与表单元素的值（value）绑定到一起，由state的值来控制表单元素的值，从而保证单一数据源特性
**实现步骤**
以获取文本框的值为例，受控组件的使用步骤如下：
1. 在组件的state中声明一个组件的状态数据
2. 将状态数据设置为input标签元素的value属性的值
3. 为input添加change事件，在事件处理程序中，通过事件对象e获取到当前文本框的值（即用户当前输入的值）
4. 调用setState方法，将文本框的值作为state状态的最新值
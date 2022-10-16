# 学习React
## React基础
### 环境初始化
#### 使用脚手架创建项目
```sh
$ npx create-react-app react-stydy
```
> 说明
> 1. npx create-react-app 是固定命令，`create-react-app`是React脚手架固定的名称
> 2. react-stydy 表示项目名称，可以自定义，保持语义
> 3. npx命令会帮助我们临时安装create-react-app包，然后初始化项目完成之后会自动删掉，所以不需要全局安装create-react-app

### JSX基础
#### JSX中使用js表达式
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

#### JSX列表渲染
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


#### JSX样式控制
**特别注意**
> 类名不用class 用的是className
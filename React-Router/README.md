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

## 4. 编程式导航
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
**路由传参**![image.png](https://cdn.nlark.com/yuque/0/2022/png/274425/1659242510791-9cd4d107-f2fc-47ff-87dc-af9418940ae9.png#clientId=uef430495-3869-4&crop=0&crop=0&crop=1&crop=1&errorMessage=unknown%20error&from=paste&id=u771d1d6e&margin=%5Bobject%20Object%5D&name=image.png&originHeight=186&originWidth=639&originalType=binary&ratio=1&rotation=0&showTitle=false&size=16426&status=error&style=none&taskId=u3d8d8118-1b96-46ce-b826-4ac129a479f&title=)
**路由取参**![image.png](https://cdn.nlark.com/yuque/0/2022/png/274425/1659242531089-90eb0bbb-1aa8-4bcf-89dd-5332c6d49ab2.png#clientId=uef430495-3869-4&crop=0&crop=0&crop=1&crop=1&errorMessage=unknown%20error&from=paste&id=u95a2584a&margin=%5Bobject%20Object%5D&name=image.png&originHeight=222&originWidth=640&originalType=binary&ratio=1&rotation=0&showTitle=false&size=21488&status=error&style=none&taskId=u4c83abf4-e892-40cb-83ef-cadf42459cb&title=)


### 2. params传参
**路由传参**![image.png](https://cdn.nlark.com/yuque/0/2022/png/274425/1659242608059-40cce1de-3700-422d-b4ef-b4ada61c4152.png#clientId=uef430495-3869-4&crop=0&crop=0&crop=1&crop=1&errorMessage=unknown%20error&from=paste&id=u647c4d42&margin=%5Bobject%20Object%5D&name=image.png&originHeight=186&originWidth=640&originalType=binary&ratio=1&rotation=0&showTitle=false&size=14036&status=error&style=none&taskId=u15d870aa-e3d9-4a27-8e31-a76577c86fd&title=)

**路由取参**![image.png](https://cdn.nlark.com/yuque/0/2022/png/274425/1659242647823-818d12d4-1be8-4e2a-bbe6-2bcf8ddd614c.png#clientId=uef430495-3869-4&crop=0&crop=0&crop=1&crop=1&errorMessage=unknown%20error&from=paste&id=u5a55485a&margin=%5Bobject%20Object%5D&name=image.png&originHeight=222&originWidth=640&originalType=binary&ratio=1&rotation=0&showTitle=false&size=17807&status=error&style=none&taskId=ucf1c097d-4c38-42ec-b1b1-e7320f53d50&title=)

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
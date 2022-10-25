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

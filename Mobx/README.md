# Mobx
## 1. 配置开发环境
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
$ npm i  mobx  mobx-react-lite
```

## todoMVC

> 运用json-server 模拟接口

案例仓库地址：[https://gitee.com/react-course-series/react-todo-mvc](https://gitee.com/react-course-series/react-todo-mvc)<br />1- 克隆项目到本地 
```bash
$ git clone  https://gitee.com/react-course-series/react-todo-mvc.git
```
2- 安装必要依赖 
```bash
$ npm i
```
3- 开启mock接口服务，**保持窗口不关闭**  ！！！！！ 
```bash
# 启动mock服务
$ npm run mock-serve
```
 <br />**4- 另起一个bash窗口**开启前端服务 
```bash
$ npm run start
```
 <br />5- 切换到todo-test分支 
```bash
$ git checkout todo-test
```
 <br />**接口文档  **

| 接口作用 | 接口地址                                                                          | 接口方法 | 接口参数               |
| -------- | --------------------------------------------------------------------------------- | -------- | ---------------------- |
| 获取列表 | [http://localhost:3001/data](http://localhost:3001/data)                          | GET      | 无                     |
| 删除     | [http://localhost:3001/data/:id](http://localhost:3001/data/:id)                  | DELETE   | id                     |
| 搜索     | [http://localhost:3001/data/?name=keyword](http://localhost:3001/data/?q=keyword) | GET      | name（以name字段搜索） |

**实现功能**

| 功能         | 核心思路                             |
| ------------ | ------------------------------------ |
| 表格数据渲染 | 组件使用                             |
| 删除功能     | 获取当前id  调用接口                 |
| 搜索功能     | 用的依旧是列表接口，多传一个name参数 |
| 清除搜索功能 | 清空搜索参数  重新获取列表           |
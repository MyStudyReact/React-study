// React:框架的和核心包
// ReactDom:专门做渲染相关的包
import React from 'react';
import ReactDOM from 'react-dom/client';

//应用的全局样式文件
import './index.css';

// 引入的根组件
import App from './App';

// 渲染根组件App 到  id为'Root'的dom节点上
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // React18 严格模式节点需要去掉
  // 会影响 useEffct的执行时机  会检测额外的副作用 所以每一个useEffct 都会执行两次


  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);

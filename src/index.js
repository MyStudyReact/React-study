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
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

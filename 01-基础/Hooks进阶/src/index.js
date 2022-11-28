import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Context from './context'

// context 如果要传递的数据，只需要在整个应用初始化的时候传递一次就可以
// 静态的
// 就可以选择在当前文件里做数据提供

// 如果这个Context需要传递数据并且将来还需要在对数据做修改，底层组件也需要跟着一起变
// 动态的
// 那么就只写在app.js里面，那里面好进行操作

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // <React.StrictMode>
  <Context.Provider value={100}>
    <App />
  </Context.Provider>
  // </React.StrictMode>
)
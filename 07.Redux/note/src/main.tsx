import ReactDOM from 'react-dom/client'
import App from './App'

// 导入store
import store from './store'
// 导入store提供组件的Provider
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  // 提供store
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>
)

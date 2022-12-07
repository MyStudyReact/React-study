import { configureStore } from "@reduxjs/toolkit";

import counterStore from './modules/counterStore'

export default configureStore({
  reducer: {
    // 注册子模块
    counterStore,
  }
})
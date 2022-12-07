import { configureStore } from "@reduxjs/toolkit";

import counterStore from './modules/counterStore'

const store = configureStore({
  reducer: {
    // 注册子模块
    counterStore,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
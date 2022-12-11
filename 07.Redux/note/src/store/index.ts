import { configureStore } from "@reduxjs/toolkit";

import counterStore from './modules/counterStore'
import channelStore from './modules/channelStore'

const store = configureStore({
  reducer: {
    // 注册子模块
    counterStore,
    channelStore,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
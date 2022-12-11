import { configureStore } from '@reduxjs/toolkit'

import taskStore from './modules/taskStore'

export default configureStore({
  reducer: {
    taskStore
  }
})
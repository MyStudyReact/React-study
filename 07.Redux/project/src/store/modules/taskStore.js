import { createSlice } from '@reduxjs/toolkit'

const taskStore = createSlice({
  name: 'taskStore',
  initialState: {
    list: [
      {
        id: 1,
        title: '学习react',
        done: true
      },
      {
        id: 2,
        title: '搞定redux',
        done: false
      }
    ]
  },
  reducers: {
    // 删除方法
    delTask (state, action) {
      state.list = state.list.filter(task => task.id !== action.payload)
    },
    // 单选状态
    singleCheck (state, action) {
      const item = state.list.find(task => task.id === action.payload)
      item.done = !item.done
    }
  }
})

const { delTask, singleCheck } = taskStore.actions
export { delTask, singleCheck }

export default taskStore.reducer

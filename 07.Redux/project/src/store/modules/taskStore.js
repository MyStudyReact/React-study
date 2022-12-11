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

  }
})

export default taskStore.reducer

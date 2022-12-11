import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { AppDispatch } from '../index'

const channelStore = createSlice({
  name: 'task',
  initialState: {
    channels: [],
  },
  reducers: {
    setChannels(state, action) {
      state.channels = action.payload
    }
  },
})

// 创建异步
const { setChannels } = channelStore.actions
const url = 'http://geek.itheima.net/v1_0/channels'
// 封装一个函数 在函数中return 一个新的函数 在新函数中封装异步
// 得到数据之后通过dispatch函数 触发修改
const fetchChannelList = () => {
  return async (dispatch: AppDispatch) => {
    const res = await axios.get(url)
    dispatch(setChannels(res.data.data.channels))
  }
}

export { fetchChannelList }

const reducers = channelStore.reducer
export default reducers
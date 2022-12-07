/**
 * 创建store的的核心步骤分为两步
 * 1. 使用toolkit的createSlice方法创建一个独立的子模块
 * 2. 使用configureStore语法组合子模块
 */

import { createSlice } from '@reduxjs/toolkit'
import { CounterState } from '../../types/root.d'

const initialState: CounterState = {
  count: 1,
}

const counter = createSlice({
  // 模块名称独一无二
  name: 'counter',
  // 初始数据
  initialState,
  // 修改数据的同步方法
  reducers: {
    add(state) {
      state.count++
    },
  }
})

const { add } = counter.actions
const reducer = counter.reducer

// 导出修改数据的函数
export { add }
// 导出reducer
export default reducer
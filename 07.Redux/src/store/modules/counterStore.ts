/**
 * 创建store的的核心步骤分为两步
 * 1. 使用toolkit的createSlice方法创建一个独立的子模块
 * 2. 使用configureStore语法组合子模块
 */

import { createSlice } from '@reduxjs/toolkit'
import { CounterState } from '../../types/root.d'

const initialState: CounterState = {
  count: 1,
  taskList: ['react']
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
    // action为一个对象 对象中有一个固定的属性叫做payload 为传递过来的参数
    addTaskList(state, action) {
      state.taskList.push(action.payload)
    }
  }
})

const { add, addTaskList } = counter.actions
const reducer = counter.reducer

// 导出修改数据的函数
export { add, addTaskList }
// 导出reducer
export default reducer
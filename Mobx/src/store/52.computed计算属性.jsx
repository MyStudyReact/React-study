// 编写第一个mobx store小案例

import { makeAutoObservable } from 'mobx'

class CounterStore {
  count = 0

  // 1.定义一个原始数据 list
  list = [1, 2, 3, 4, 5, 6]

  constructor() {
    makeAutoObservable(this)
  }

  // 2.定义计算属性
  get filterList () {
    return this.list.filter(item => item > 2)
  }

  // 方法修改list
  addList = () => {
    this.list.push(7, 8, 9)
  }

  addCount = () => {
    this.count++
  }
}


const counterStore = new CounterStore()
export { counterStore }
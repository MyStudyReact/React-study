// 组合子模块
// 封装统一导出的供业务使用的方法

import { CounterStore } from './counter.Store'
import { ListStore } from './list.Store'


// 1.声明一个rootStore
class RootStore {
  constructor() {
    // 对模块进行实例化操作
    /**
     * 将来实例化根store的时候，
     * 根store有两个属性 分别是counterStore 和 listStore
     * 然后各自对应的值 就是我们导入的子模块实例对象
     */
    this.counterStore = new CounterStore()
    this.ListStore = new ListStore()

  }
}

// 实例化操作
// 使用react context机制 完成统一方法封装
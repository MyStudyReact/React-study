import { makeAutoObservable } from 'mobx'

import axios from 'axios'

class ListStore {
  list = ['react', 'vue']
  channelList = []

  constructor() {
    makeAutoObservable(this)
  }

  // 只要调用这个方法 就可以从后端拿到数据并且存入channelList
  setChannelList = async () => {
    const res = await axios.get('http://geek.itheima.net/v1_0/channels')
    this.channelList = res.data.data.channels
  }

  addList = () => {
    this.list.push('angular')
  }
}

export { ListStore }
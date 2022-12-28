interface Evenet {
  on: (name: string, fn: Function) => void;
  emit: (name: string, ...args: Array<any>) => void;
  off: (name: string, fn: Function) => void;
  once: (name: string, fn: Function) => void;
}

interface List {
  [key: string]: Array<Function>
}

class Dispatch implements Evenet {
  list: List
  constructor() {
    this.list = {}
  }

  on(name: string, fn: Function) {
    const callback = this.list[name] || []
    callback.push(fn)
    this.list[name] = callback

  }

  emit(name: string, ...args: Array<any>) {
    let eventName = this.list[name]
    if (eventName) {
      eventName.forEach(fn => {
        fn.apply(this, args)
      })
    } else {
      console.error(`名称错误${name}`)
    }
  }

  off(name: string, fn: Function) {
    let eventName = this.list[name]
    if (eventName && fn) {
      // 函数进行比较 删除
      let index = eventName.findIndex(fns => fns === fn)
      eventName.splice(index, 1)
    } else {
      console.error(`名称错误${name}`)
    }
  }

  once(name: string, fn: Function) {
    // 只调用一次 临时函数 调用订阅$on和派发$emit各一次
    let de = (...args: Array<any>) => {
      fn.apply(this, args)
      this.off(name, de)
    }
    this.on(name, de)
  }
}

const o = new Dispatch()

o.on('post', (...args: Array<any>) => {
  console.log(args, 1);

})

o.once('post', (...args: Array<any>) => {
  console.log(args, 'once');
})

// const fn = (...args: Array<any>) => {
//   console.log(args, 2);
// }

// o.on('post', fn)

// o.off('post', fn)

o.emit('post', 1, false, { name: '小刘' })

o.emit('post', 2, false, { name: '小刘' })



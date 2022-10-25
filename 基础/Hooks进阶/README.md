# Hooks进阶
## useState - 回调函数的参数
`本节任务:`能够理解useState回调函数作为参数的使用场景

**使用场景**
参数只会在组件的初始渲染中起作用，后续渲染时会被忽略。如果初始 state 需要通过计算才能获得，则可以传入一个函数，在函数中计算并返回初始的 state，此函数只在初始渲染时被调用

**语法**
```JSX
const [name, setName] = useState(()=>{   
  // 编写计算逻辑    return '计算之后的初始值'
})
```

**语法规则**
1. 回调函数return出去的值将作为 name 的初始值
2. 回调函数中的逻辑只会在组件初始化的时候执行一次

**语法选择**
1. 如果就是初始化一个普通的数据 直接使用 useState(普通数据) 即可
2. 如果要初始化的数据无法直接得到需要通过计算才能获取到，使用useState(()=>{})

## useEffect - 发送网络请求
`本节任务:`能够掌握使用useEffect hook发送网络请求
**使用场景**
> 如何在useEffect中发送网络请求，并且封装同步 async await操作
**语法要求**
> 不可以直接在useEffect的回调函数外层直接包裹 await ，因为**useEffect是一个同步函数**
```JavaScript
useEffect(async ()=>{    
    const res = await axios.get('http://geek.itheima.net/v1_0/channels')   
    console.log(res)
},[])
```
**正确写法**
> 在内部单独定义一个函数，然后把这个函数包装成同步
```JSX
useEffect(()=>{   
    async function fetchData(){      
       const res = await axios.get('http://geek.itheima.net/v1_0/channels')                            console.log(res)   
    } 
},[])
```

## useRef
`本节任务:`能够掌握使用useRef获取真实dom或组件实例的方法
**使用场景**
> 在函数组件中获取真实的dom元素对象或者是组件对象
## 使用步骤 ##
1. 导入 useRef 函数
2. 执行 useRef 函数并传入null，返回值为一个对象 内部有一个current属性存放拿到的dom对象（组件实例）
通过ref 绑定 要获取的元素或者组件
3. 函数组件由于没有实例，不能使用ref获取，如果想获取组件实例，必须是类组件

## seContext
`本节任务:`能够掌握hooks下的context使用方式

**实现步骤**
1. 使用createContext 创建Context对象
2. 在顶层组件通过Provider 提供数据
3. 在底层组件通过useContext函数获取数据


# React Hook 入门到精通（ useState | useReduce、useEffect、useContext、useRef、useCallback | useMemo ）

**Hook 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。**
## useState | useReduce 的使用
```JSX
import React, { useState, useReducer } from 'react'
 
// 创建reduce
const ageReduce = (state, action) => {
  switch (action.type) {
    case 'add':
      return state + 1
    case 'minus':
      return state - 1
    default:
      return state
  }
}
 
const StateReduce = function () {
  // 基础数据类型推荐使用useState Number、String、Boolean
  const [count, setCount] = useState(0)
 
  // 复杂类型推荐使用useReduce 如 Object、Array  对应的属性更容易操作
  const [age, ageDispatch] = useReducer(ageReduce, 0)
 
  const addCount = () => {
    // 第一更新种方式
    // setCount(count + 1)
 
    // 第二种更新方式
    setCount(count => count + 1)
  }
 
  /**
   * @type 操作类型
   */
  const setAge = type => {
    ageDispatch({ type })
  }
 
  return (
    <div>
      <div>count：{count}</div>
      <button onClick={addCount}>addCount</button>
      <div>age：{age}</div>
      <button onClick={setAge.bind(this, 'add')}>addAge</button>
      <button onClick={setAge.bind(this, 'minus')}>minusAge</button>
    </div>
  )
}
 
export default StateReduce
```

## useEffect 的使用
**你可以把 useEffect Hook 看做 componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合。**
```JSX
import React, { useState, useEffect } from 'react'
 
const Effect = function () {
  const [count, setCount] = useState(0)
  const [other, setOther] = useState(10)
 
  //不传第二个参数时每次更新都会执行
  useEffect(() => {
    console.log('每次更新都会执行，相当于didmount、didUpdate')
  })
 
  //第二个参数为某个属性时当属性改变执行
  useEffect(() => {
    console.log('Count改变时我出发----count改变了')
  }, [count])
 
  useEffect(() => {
    console.log('Other改变时我出发----other改变了')
  }, [other])
 
  //第二个参数为[]空数组时相当于是初始化执行一次
  useEffect(() => {
    console.log('只在初始化时候执行，相当于didMount')
  }, [])
 
  //返回值相当于销毁 也可用于关闭页面的监听订阅和定时器
  useEffect(() => {
    return () => {
      console.log('我销毁了！-------------------')
    }
  }, [])
 
  const handleClick = () => {
    setCount(count + 2)
  }
 
  const handleOtherClick = () => {
    setOther(other + 1)
  }
 
  return (
    <div>
      <div>Count：{count}</div>
      <button onClick={handleClick}>操作触发Count</button>
      <div>Other：{other}</div>
      <button onClick={handleOtherClick}>操作触发Other</button>
    </div>
  )
}
 
export default Effect
```

## useContext 的使用
```JSX
import React, { Component, createContext, useContext } from 'react'
 
const AppContext = createContext()
 
export default function Context() {
  return (
    <AppContext.Provider
      value={{
        context: '测试数据',
        location: '我来自父组件的context',
      }}
    >
      <Foo />
      <Bar />
      <Baz />
    </AppContext.Provider>
  )
}
 
 
/**
 * 类组件的调用方法:
 * @Foo 原始的标签调用方式 使用 AppContext.Consumer 通过返回值拿到。
 * @Bar 使用static接收 是标签的简化版更方便操作。
 * 函数组件的使用:
 * @Baz 函数hook方法或比较简洁清爽。
*/
 
class Foo extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {value => (
          <div>
            类组件标签获取方法：{value.context}、{value.location}
          </div>
        )}
      </AppContext.Consumer>
    )
  }
}
 
class Bar extends Component {
  static contextType = AppContext
  render() {
    const { context, location } = this.context
    return (
      <div>
        类组件通过static获取：{context}、{location}
      </div>
    )
  }
}
 
function Baz() {
  const { context, location } = useContext(AppContext)
  return (
    <div>
      useContext函数获取：{context}、{location}
    </div>
  )
}
```

## useRef 的使用
```JSX
import React, { Component, createRef, useRef, forwardRef } from 'react'
 
export default function Ref () {
  const inputRef = useRef()
 
  // 父组件的ref 子组件绑定 forwardRef 就能获取子组件的Ref
  const focusInput = () => {
    console.log(inputRef.current)
    inputRef.current.focus()
  }
  return (
    <div>
      <Foo />
      <CreateRefFoo />
      <FooFunc ref={inputRef} />
      <button onClick={focusInput}>父组件聚焦useRef</button>
    </div>
  )
}
/**
 * 类组件获取ref
 * @Foo 类组件获取ref
 * @CreateRefFoo 通过 createRef 来获取
 * @FooFunc 函数组件获取ref
 * @forwardRef 转发Ref
 */
class Foo extends Component {
  refInput = input => {
    this.inputRef = input
  }
 
  focusInput = () => {
    this.inputRef.focus()
  }
 
  render() {
    return (
      <div>
        <input ref={this.refInput} />
        <button onClick={this.focusInput}>聚焦Component</button>
      </div>
    )
  }
}
 
class CreateRefFoo extends Component {
  inputRef = createRef()
 
  focusInput = () => {
    this.inputRef.current.focus()
  }
 
  render() {
    return (
      <div>
        <input ref={this.inputRef} />
        <button onClick={this.focusInput}>聚焦Component-createRef</button>
      </div>
    )
  }
}
 
//forwardRef 转发Ref
const FooFunc = forwardRef((props,inputRef) =>{
    // const inputRef = useRef()
  
    const focusInput = () => {
      inputRef.current.focus()
    }
    return (
      <div>
        <input ref={inputRef} />
        <button onClick={focusInput}>聚焦useRef</button>
      </div>
    )
  }
)
```

## useCallback | useMemo 的使用和区别
```JSX
import React, { useState, useCallback, useMemo, PureComponent, memo } from 'react'
 
/**
 * 作用区别 @PureComponent === @memo 用于组件的优化使用
 * @useCallback @useMemo 区别在于返回值上 用于固定值或者固定函数引用传给子组件 都可用于初次渲染
 * useCallback(fn, deps) 相当于 useMemo(() => fn, deps)。
 * @useCallback 返回一个函数方法
 * @useMemo 返回一个函数执行完成的值
 */  
 
const List = memo(props => {
  console.log('renderList')
  return (
    <div>
      {props.count}
      <url>{props.render}</url>
    </div>
  )
})
 
class FooList extends PureComponent {
  render() {
    console.log('renderFooList')
    return <div>{this.props.count}</div>
  }
}
 
const CallbackMemo = props => {
  const [range, setRange] = useState({ min: 0, max: 1000 })
  const [count, setCount] = useState(0)
 
 
  // const render = useCallback(() => {
  //   let list = []
  //   for (let i = 0; i < range.max; i++) {
  //     list.push(<li key={i}>{i}</li>)
  //   }
  //   return list
  // }, [range])
  const render = useMemo(() => {
    let list = []
    for (let i = 0; i < range.max; i++) {
      list.push(<li key={i}>{i}</li>)
    }
    return list
  }, [range])
 
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>setCount</button>
      <button onClick={() => setRange(range => ({ ...range, max: range.max + 1 }))}>
        setRange
      </button>
      <List count={1} render={render} />
      <FooList count={1} />
    </div>
  )
}
 
export default CallbackMemo
```
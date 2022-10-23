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
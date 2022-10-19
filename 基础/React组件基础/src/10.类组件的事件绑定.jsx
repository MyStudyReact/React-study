
import React from "react"
// 函数组件的创建和渲染
//创建
const clickFun = (e, msg) => {
  // 阻止默认行为
  e.preventDefault()
  // 传递自定义参数
  console.log('函数组件中的事件被触发了', msg)
}

/**
 * 如何传递自定义参数？
 * 1.只需要一个额外参数 (只需改成箭头函数)
 * {clickFun}  ---> {() => clickFun()}
 * 
 * 2.既需要事件对象e,又需要额外的参数
 * {() => clickFun()}  ---> {(e) => clickFun(e,'自定义参数')}
 */
function Hello () {
  return (
    <div >
      <a href="http://baidu.com" onClick={(e) => clickFun(e, 'hhh')}>百度</a>
    </div>
  )
}

// 类组件的创建和渲染
//创建

/**
 * 类组件中的事件绑定
 * 整体的套路都是一致的 和函数组件没有太多不同
 * 唯一需要注意的 因为处于class 类环境下 所以定义事件回调函数 以及 绑定它写法上有不同
 * 定义的时候: class Fields语法  
 * 使用的时候: 需要借助this关键词获取
 */
class HelloComponent extends React.Component {
  // class Fields
  // 写组件里面是实例，需要加this获取上下文 （标准写法,箭头函数避免this指向问题）
  clickHandler = (msg) => {
    // 这里的this指向的是正确的当前的组件实例对象 
    // 可以非常方便的通过this关键词拿到组件实例身上的其他属性或者方法
    console.log('类组件中的事件被触发了', this, msg)
  }
  render () {
    return (
      <div>
        <div onClick={() => this.clickHandler('xxx1')}>this is class Component</div>

        <div onClick={() => clickHandler('xxx2')}>this is class Component</div>
      </div>
    )
  }
}

// 注意事项: 之所以要采取class Fields写法是为了保证this的指向正确 永远指向当前的组件实例

// 事件绑定函数（标准写法）
const clickHandler = (msg) => {
  // 这里的this 不指向当前的组件实例对象  undefined 存在this丢失问题
  console.log('类组件中的事件被触发了', this, msg)
}

function App () {
  return (
    <div>
      {/* 渲染hello组件 */}
      <Hello></Hello>
      {/* 渲染类组件 */}
      <HelloComponent></HelloComponent>
    </div>
  )
}

export default App

# React组件进阶

## children属性
`目标任务:`掌握props中children属性的用法

**children属性是什么**
> 表示该组件的子节点，只要组件内部有子节点，props中就有该属性
**children可以是什么**
1. 普通文本
2. 普通标签元素
3. 函数 / 对象
4. JSX

`目的`：高阶组件（高阶函数）

## props校验-场景和使用
`目标任务:`掌握组件props的校验写法，增加组件的健壮性

>对于组件来说，props是由外部传入的，我们其实无法保证组件使用者传入了什么格式的数据，如果传入的数据格式不对，就有可能会导致组件内部错误，有一个点很关键 - 组件的使用者可能报错了也不知道为什么，看下面的例子


面对这样的问题，如何解决？ **props校验**

**实现步骤**
1. 安装属性校验包：`npm i prop-types`
2. 导入`prop-types` 包
3. 使用 `组件名.propTypes = {}` 给组件添加校验规则

**核心代码**
```JSX
import PropTypes from 'prop-types'

const List = props => {
  const arr = props.colors
  const lis = arr.map((item, index) => <li key={index}>{item.name}</li>)
  return <ul>{lis}</ul>
}

List.propTypes = {
  colors: PropTypes.array
}
```
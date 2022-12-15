# 01-学习TypeScript
## 安装起步
### 全局安装
```sh
$ npm install typescript -g
```
### 检测是否安装成功
```sh
$ tsc -v
```

## 基础类型
### void 和 undefined 和 null 最大的区别
> 与 void 的区别是，undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 string 类型的变量：

```ts
//这样写会报错 void类型不可以分给其他类型
let test: void = undefined
let num2: string = "1"
 
num2 = test
```

```ts
//这样是没问题的
let test: null = null
let num2: string = "1"
 
num2 = test
 
//或者这样的
let test: undefined = undefined
let num2: string = "1"
 
num2 = test
```

### 配置tsconfig.json
> 自动生成tsconfig.json文件
```sh
tsc --init 
```
> 关闭严格模式
```json
{
  "compilerOptions":{
    "strict": true
  }
}
```

## 任意类型
> 用tsc 一直重复编译很麻烦，所以更换成 nodejs 环境执行ts
> 
> 安装 
> npm i @types/node --save-dev （node环境支持的依赖必装）
> npm i ts-node --g
>
> 运行
> ts-node app.ts

**总结**
1. TypeScript 3.0中引入的 unknown 类型也被认为是 top type ，但它更安全。
与 any 一样，所有类型都可以分配给unknown
unknow  unknow类型比any更加严格当你要使用any 的时候可以尝试使用unknow
2. 区别 
  - 1.1 unknow类型不能作为子类型只能作为父类型 any可以作为父类型和子类型
   - unknown类型不能赋值给其他类型
   - unknown可赋值对象只有unknown 和 any
  - 1.2 unknow 是不能调用属性和方法

## Object、object 以及{} 区别
### Object
> Object类型是所有Object类的实例的类型。 由以下两个接口来定义：
> Object 接口定义了 Object.prototype 原型对象上的属性；
> ObjectConstructor 接口定义了 Object 类的属性， 如上面提到的 Object.create()。
> 这个类型是跟原型链有关的原型链顶层就是Object，所以值类型和引用类型最终都指向Object，所以他包含所有类型。

## object
> object 代表所有非值类型的类型，例如 数组 对象 函数等，常用于泛型约束

## {}
> 看起来很别扭的一个东西 你可以把他理解成new Object 就和我们的第一个Object基本一样 包含所有类型
**tips**
字面量模式是不能修改值的
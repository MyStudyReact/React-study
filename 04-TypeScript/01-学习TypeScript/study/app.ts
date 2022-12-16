/**
 * 联合类型
 */
let phone: number | string = '123'

//需求：后端返回 0 1 判断为 false true
let fn = function (type: number | boolean): boolean {
  return !!type
}

let result = fn(1)
// console.log(result);


/**
 * 交叉类型 和 extends类似
 */
interface Person {
  name: string,
  age: number
}

// interface Man {
//   sex: number,
// }

interface Man extends Person {
  sex: number,
}

// const yin = (man: Person & Man): void => {
const yin = (man: Man): void => {
  // console.log(man);
}

yin({
  name: "星期五",
  age: 12444,
  sex: 1
})

/**
 * 断言
 */
let yang = function (num: number | string): void {
  // console.log(num.length); //类型“string | number”上不存在属性“length”。类型“number”上不存在属性“length”。

  console.log((num as string).length);
}

yang('123456') // 6
yang(123456)   // undefined 滥用断言导致的


interface A {
  run: string
}

interface B {
  build: string
}

let fn1 = (type: A | B): void => {
  // console.log(type.run); //类型“A | B”上不存在属性“run”。类型“B”上不存在属性“run”。

  // 以下两种都可以
  console.log((<A>type).run);

  console.log((type as A).run);
}

fn1({
  build: '123'
}) // undefined 滥用断言导致的

// window.abc = 123 //类型“Window & typeof globalThis”上不存在属性“abc”。
// (window as any).abc = 123 


const fn2 = (type: any): boolean => {
  return type as boolean
}

console.log(fn2(1)); //1  只是欺骗以下typescript

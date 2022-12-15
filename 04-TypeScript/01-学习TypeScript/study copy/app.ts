interface A {
  name: string
}
//重名interface  可以合并
interface A {
  age: number
}

//使用接口约束的时候不能多一个属性也不能少一个属性
let obj: A = {
  name: '嗷嗷叫',
  age: 10
}

console.log({ obj });

// 可选择操作符 代表不必填
interface Person {
  readonly name: string; //readonly 表示 只读属性
  age?: number;
  cb(): number;
  [propName: string]: any, // 任意类型字段
  // [propName: string]: string | number; // | 表示联合类型

}

let person: Person = {
  name: '张三',
  abc: 466,
  // ghghh: 'reportError',
  cb: (): number => 123
}

// p.name = '123' //无法为“name”赋值，因为它是只读属性。

/**
 * 组合使用
 * 
 * extends 继承
 */
interface B {
  name: string
}

interface C extends B {
  age: number
}

let p: C = {
  name: '张三',
  age: 666
}

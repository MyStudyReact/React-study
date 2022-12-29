type Person = {
  name: string,
  age: number,
  text: string
}

/**
 * readonly跟const定义数据又有点雷同，就是一旦定义了值，就不允许你进行修改
 * 
 * Partial和Readonly一对比 只是? 替换成了 readonly
 * 
 * keyof 指的是 将每个key转成联合类型
 * type key = 'name' | 'age' | 'text'
 * 
 * in 是表示遍历这个key的
 * 
 * P就是遍历完的item,取名为P
 * 
 * T[P]索引取值的方式获取value
 */

// type Par<T> = {
//   [P in keyof T]?: T[P];
// };

type R<T> = {
  readonly [P in keyof T]: T[P];
};

type man = Readonly<Person>

/**
 * keyof any 指的是
 * type key = string | number | symbol
 * 
 * keyof T 指的是 任何类型
 * 
 * 做到了约束 对象的key 同时约束了 value
 */

type Re<K extends keyof any, T> = {
  [P in K]: T;
};

// 字符串例子
type K = "A" | "B" | "C"

type B = Record<K, Person>
// type B = {
//   A: Person;
//   B: Person;
//   C: Person;
// }

let obj: B = {
  A: { name: 'hhhh', age: 22, text: '6666' },
  B: { name: 'hhhh', age: 22, text: '6666' },
  C: { name: 'hhhh', age: 22, text: '6666' },
}

// 数字例子
type K1 = 1 | 2 | 3

type B1 = Record<K1, Person>
// type B1 = {
//   1: Person;
//   2: Person;
//   3: Person;
// }

let obj1: B1 = {
  1: { name: 'hhhh', age: 22, text: '6666' },
  2: { name: 'hhhh', age: 22, text: '6666' },
  3: { name: 'hhhh', age: 22, text: '6666' },
}



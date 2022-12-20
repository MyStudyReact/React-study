// const fn = (type) => {
//   if (type === 'red') {
//     return 0
//   }
//   if (type === 'greeen') {
//     return 1
//   }
//   if (type === 'blue') {
//     return 2
//   }
// }

// let obj = {
//   red:0,
//   green:1,
//   blue:2
// }



// 默认是0开始
enum Color {
  red,
  green,
  blue
}

/**
 * 数字枚举
 */
// 增长枚举
enum ColorNum1 {
  red = 1,
  green,
  blue,
}

// 自定义枚举
enum ColorNum2 {
  red = 1,
  green = 5,
  blue = 6,
}

/**
 * 字符串枚举
 * 
 * 如果其中一个不去定义是有问题的 枚举成员必须具有初始化表达式。
 */
enum ColorStr1 {
  red = 'red',
  // green, //枚举成员必须具有初始化表达式。
  green = 'green',
  blue = 'blue',
}

/**
 * 异构枚举
 * 
 * 不到万不得已不去穿插类型
 * 
 * 如果中间没有默认值，且上面类型为字符串就有问题  枚举成员必须具有初始化表达式。
 */
enum Types {
  aaa,
  no = 'no',
  // bbb, //枚举成员必须具有初始化表达式。
  yes = 1,
}
console.log(Types.yes, Types.no);


/**
 * 接口枚举
 */
interface A {
  red: Types.yes
}

let obj: A = {
  // red:1,
  red: Types.yes,
}

/**
 * const枚举
 * 
 *  var/let 不行
 * 只能 const
 * 
 * 不用const 编译的是对象
 * 用const 编译的是对应的值
 * 有点像解构
 */
enum Types1 {
  success,
  fail,
}

let code: number = 0
if (code === Types1.success) {

}

const enum Types2 {
  success,
  fail,
}

let code1: number = 0
if (code1 === Types2.success) {

}

/**
 * 反向映射
 * 
 * 字符串是不可以的
 */
enum Types3 {
  success = 456,
  error = '777',
}
let success: number = Types3.success

// 这就是他的反向映射
let key = Types3[success]

console.log(`value----${success}`, `key-----${key}`);


let error: string = Types3.error

// 这就是他的反向映射
let key1 = Types3[error]

console.log(`value----${error}`, `key-----${key1}`);

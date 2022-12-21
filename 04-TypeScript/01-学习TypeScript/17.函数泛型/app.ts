// function num(a: number, b: number): Array<number> {
//   return [a, b]
// }

// num(1, 2)

// function str(a: string, b: string): Array<string> {
//   return [a, b]
// }

// str('害', '健康')

/**
 * 泛型(变量类型变化)
 * 
 * 语法为函数名字后面跟一个<参数名> 参数名可以随便写 例如我这儿写了T
 * 当我们使用这个函数的时候把参数的类型传进去就可以了 （也就是动态类型）
 * 
 * 简而言之
 * 定义这个函数时，我不决定这些参数的类型，而是让调用者告知我这里的参数是什么类型
 */
function add<T>(a: T, b: T): Array<T> {
  return [a, b]
}

// add<number>(1, 2)
// add<string>('1', '2')

// 简写 ----》 触发类型推论
add(1, 2)
add('1', '2')


/**
 * 多个类型的泛型定义
 * 
 * @param a 
 * @param b 
 * @returns arr
 */
function sub<T, U>(a: T, b: U): Array<T | U> {
  let arr: Array<T | U> = [a, b]
  return arr
}

// sub<number, boolean>(1, false)
// 简写
sub(1, false)

/**
 * 泛型约束
 */

interface Len {
  length: number
}
// function getLength<T>(arg: T) {
//   return arg.length //类型“T”上不存在属性“length”。
// }
function getLength<T extends Len>(arg: T) {
  return arg.length
}

// getLength(1) //类型“number”的参数不能赋给类型“Len”的参数。
getLength('12344')
// getLength(false) //类型“boolean”的参数不能赋给类型“Len”的参数。
getLength([1, 2, 3])

/**
 * 元组：一个任意类型并且长度有限的数组
 */
let arr: [string, number] = ['hhh', 123]

// arr[1].length //类型“number”上不存在属性“length”。
console.log(arr[0].length, arr[1]);

// 越界元组
// arr.push(true) //类型“boolean”的参数不能赋给类型“string | number”的参数。
arr.push('true')


let excel: [string, string, number][] = [
  ['title', 'name', 1]
]

/**
 * Object 表示包含所有的类型，可以等于任何类型
 * 
 * object 除了原始类型/基础类型都支持
 * 
 * {} 相当于new Object 跟Object 一样的
 * 但是不能使用点属性（调用属性和方法）进行修改的
 */

// Object
let n: Object = 123
let s: Object = '123'
let b: Object = false
let a: Object = []
let o: Object = { age: 1 }
let f: Object = () => 123
// o.age = 2
// o.name = 'lucy'


// object
let n1: object = 123                 // 错误的    原始类型/ 基础类型
let s1: object = '123'               // 错误的    原始类型/ 基础类型
let b1: object = false               // 错误的    原始类型/ 基础类型
let a1: object = []                  // 正确的    引用类型
let o1: object = { age: 1 }         // 正确的    引用类型
let f1: object = () => 123           // 正确的    引用类型
// o1.age = 2  
// o1.name = 'lucy'


// {} ----> new Object 跟第一个一样包含所有类型
let n2: {} = 123
let s2: {} = '123'
let b2: {} = false
let a2: {} = []
let o2: {} = { age: 1 }
let f2: {} = () => 123
// o2.age = 2
// o2.name = 'lucy'

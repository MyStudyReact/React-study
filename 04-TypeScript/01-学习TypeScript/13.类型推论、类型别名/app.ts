// 类型推论
// let str= "小满"
// str = 456

let a //any类型
a = []
a = {}

// 类型别名
type s = string | number
let str: s = "达不刘"

let num: s = 1

// let b:s = true //不能将类型“boolean”分配给类型“s”。

type cb = () => string
const fn: cb = () => '达不刘'

// 值的类型别名
type T = 'off' | 'on'
let str1: T = 'off'

// 只能是 'off' | 'on'
// let str2: T = 23231 //不能将类型“23231”分配给类型“T”。

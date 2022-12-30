/**
 * infer 
 * 
 * 定义一个类型 
 * 如果是数组类型 就返回 数组元素的类型
 * 
 * 否则 就传入什么类型 就返回什么类型
 */
type TYPE<T> = T extends Array<any> ? T[number] : T


type A = TYPE<(string | number)[]> //type A = string | number

type B = TYPE<boolean> //type B = boolean



/**
 * infer 方式简写
 * 
 * U不是一个泛型，只是一个占位符，会去读取Array里面的类型
 */

type TYPE1<T> = T extends Array<infer U> ? U : T

type A1 = TYPE<(string | number)[]> //type A = string | number

type B1 = TYPE<boolean> //type B = boolean

type T1 = [string, number]
type uni1 = TYPE1<T1> //type uni1 = string | number


// 定义元素类型
type TYPE2<T> = T extends Array<infer U> ? U : never

type T2 = [string, number]
type uni2 = TYPE1<never> //type uni2 = never
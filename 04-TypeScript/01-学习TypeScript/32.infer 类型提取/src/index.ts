/**
 * infer 
 * 
 * 定义一个类型 
 * 如果是数组类型 就返回 数组元素的类型
 * 
 * 否则 就传入什么类型 就返回什么类型
 */

/**
 * one,two,three 名字可以自定义
 */
type Arr = ['a', 'b', 'c']

type Frist1<T extends any[]> = T extends [infer one, infer two, infer three] ? one : []
type Frist2<T extends any[]> = T extends [infer one, infer two, infer three] ? two : []
type Frist3<T extends any[]> = T extends [infer one, infer two, infer three] ? three : []

type a = Frist1<Arr> //type a = "a"
type b = Frist2<Arr> //type b = "b
type c = Frist3<Arr> //type c = "c

/**
 * 1.提取头部元素
 */
type Frist4<T extends any[]> = T extends [infer one, ...any[]] ? one : []
type a4 = Frist4<Arr> //type a4 = "a"

/**
 * 2.提取尾部元素
 */
type Last<T extends any[]> = T extends [...any[], infer three] ? three : []
type c5 = Last<Arr> //type c5 = "c

/**
 * 3.剔除第一个元素 Shift
 * 
 * 思路：infer把剩余元素声明成一个变量 直接返回
 * 
 * 注意必须加第二个参数，否则返回的是全部
 */

type shift<T extends any[]> = T extends [unknown, ...infer Rest] ? Rest : []
type shiftC = shift<Arr> //type popC = ["b", "c"]

/**
 * 4.剔除尾部元素 pop
 */
type pop<T extends any[]> = T extends [...infer Rest, unknown] ? Rest : []
type popC = pop<Arr> //type popC = ["a", "b"]




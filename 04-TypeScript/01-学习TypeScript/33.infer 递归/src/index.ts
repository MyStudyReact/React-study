/**
 * infer 
 * 
 * 定义一个类型 
 * 如果是数组类型 就返回 数组元素的类型
 * 
 * 否则 就传入什么类型 就返回什么类型
 */


/**
 * infer 递归
 * 实现 Arra 到 Arrb
 * 
 * 思路：把Arra第一个放到Arrb最后一个，再进行递归
 */
type Arra = [1, 2, 3, 4]

type Arrb = [4, 3, 2, 1]

type ReverArr<T extends any[]> = T extends [infer Frist, ...infer rest] ? [...ReverArr<rest>, Frist] : T

type Arrc = ReverArr<Arra> //type Arrc = [4, 3, 2,
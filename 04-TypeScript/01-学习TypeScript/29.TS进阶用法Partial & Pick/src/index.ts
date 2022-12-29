type Person = {
  name: string,
  age: number,
  text: string
}

/**
 * Partial 直接变成可选操作符
 * 
 * keyof 指的是
 * type key = 'name' | 'age' | 'text'
 * 
 * in 是表示遍历这个key的
 * 
 * P就是遍历完的item,取名为P
 */

// ts Partial 内置定义
type Par<T> = {
  [P in keyof T]?: T[P];
};

type p = Partial<Person>


/**
 * 比如页面展示用的表单声明类型和实际跳转所需要的跳转的表单数据不完全一样，就可以用pick选一些需要的类型声明出来
 * 
 * keyof 指的是
 * type key = 'name' | 'age' | 'text'
 * 
 * extends 表示
 * 约束只能是这几个key值
 */
type key = 'name' | 'age' | 'text'

type Pi<T, K extends keyof T> = {
  [P in K]: T[P];
};

// type p1 = Pick<Person, 'age'>
type p1 = Pick<Person, 'age' | 'name'>
// type p1 = Pick<Person, keyof Person>

// type p1 = Pick<Person, 'aaa'> //类型“"aaa"”不满足约束“keyof Person”。


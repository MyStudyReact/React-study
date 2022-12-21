/**
 * keyof (keyof操作符获取T类型的所有键)
 * @param obj 
 * @param key 
 * @returns 
 * 
 * 其中使用了TS泛型和泛型约束。
 * 先定义了T类型并使用extends关键字继承object类型的子类型，
 * 然后使用  keyof操作符获取T类型的所有键，
 * 它的返回 类型是联合 类型，
 * 最后利用extends关键字约束 K类型必须为keyof T联合类型的子类型
 */
// function prop<T>(obj: T, key: string) {
//   return obj[key];
// }

function prop<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

let o = { a: 1, b: 2, c: 3 }

prop(o, 'a')

// 这个情况没有提示 为了避免不存在的key传过去 
// prop(o, 'd') //类型“"d"”的参数不能赋给类型“"a" | "b" | "c"”的参数。


/**
 * 泛型类 （喝泛型函数差不多）
 */
class Sub<T>{
  attr: T[] = [];
  add(a: T): T[] {
    return [a]
  }
}

let s = new Sub<number>();
s.attr = [1, 2, 3]
s.add(123)

let str = new Sub<string>();
str.attr = ['1', '2', '3']
str.add('123')

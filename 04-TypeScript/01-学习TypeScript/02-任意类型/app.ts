/**any类型 */
// let anys: any = '这才第二集'
// anys = 123
// anys = {}
// anys = []
// anys = Symbol('123')
// console.log(anys);

/**
 * unknow
 * 
 * 弊端 就失去了TS类型检测的作用
 */
// let u: unknown = { a: 123 }
// console.log(u.a); //“u”的类型为“未知”。
// let u: unknown = { a: () => 123 }
// console.log(u.a());//“u”的类型为“未知”。


/**
 * unknow 类型被认为是 top type ，比 any类型更安全
 * unknown 类型 是不能调用属性和方法
 * unknown 类型 可赋值对象只有unknown 和 any
 */
// 区别一 unknown 类型 是不能调用属性和方法
// let a: any = { a: 123 }
// console.log(a.a);

// 区别二
let strAny: any = '我没阳'
let strAny1: string = '我阳了'

strAny1 = strAny
// console.log({ strAny1, strAny });

//这样写会报错unknow类型不能作为子类型只能作为父类型 any可以作为父类型和子类型
let strUnknown: unknown = '你没阳'

// let strUnknown1: string = '你阳了' //不能将类型“unknown”分配给类型“string”。


//unknown可赋值对象只有unknown 和 any
let strUnknown1: unknown = '你阳了'
let strUnknown2: any = '你阳了'


strUnknown1 = strUnknown
strUnknown2 = strUnknown

console.log({ strUnknown, strUnknown1 });


/**
 * Symbol类型是唯一的值，内存存储的位置是不一样的
 * 
 * 不建议穿对象 toString 就是"[object Object]"
 * 
 * 一般穿字符串和数字
 * 
 * 使用场景：对象的键值比较多
 */
let s = Symbol("平安")
let s1 = Symbol("平安")
let n = Symbol(123)

//使用场景：对象的键值比较多
let obj = {
  [n]: "value",             // symbol
  [s]: "健康",              // symbol
  name: '小刘',
  message: '退退退 病毒'
}


/**以下方式都是取不到Symbol的值 */
// 1. for in 进行遍历
for (const key in obj) {
  if (Object.prototype.hasOwnProperty.call(obj, key)) {
    // const element = obj[key];

    // 不会遍历symbol类型的 只会遍历普通的
    // console.log(key, '==========key');
    //name ==========key
    //message ==========key
  }
}

// 2. Object.keys(obj)
// 不会遍历symbol类型的 只会遍历普通的
// console.log(Object.keys(obj), '======Object.keys(obj)'); //[ 'name', 'message' ] ======Object.keys(obj)

// 3. Object.getOwnPropertyNames(obj)
// 不会遍历symbol类型的 只会遍历普通的
// console.log(Object.getOwnPropertyNames(obj), '=====Object.getOwnPropertyNames(obj)'); // [ 'name', 'message' ] =====Object.getOwnPropertyNames(obj)

// 4. JSON.stringify(obj)
// 不会遍历symbol类型的 只会遍历普通的
// console.log(JSON.stringify(obj), '====JSON.stringify(obj)'); //{"name":"小刘","message":"退退退 病毒"} ====JSON.stringify(obj)

/**可以获取到Symbol的值 */
// 1.Object.getOwnPropertySymbols
// 这个方法只能获取到symbol的值
// console.log(Object.getOwnPropertySymbols(obj), '====Object.getOwnPropertySymbols'); // [ Symbol(123), Symbol(平安) ] ====Object.getOwnPropertySymbols

// 2.es6的Reflect 拿到对象的所有属性
console.log(Reflect.ownKeys(obj), '====Reflect.ownKeys(obj)'); // [ 'name', 'message', Symbol(123), Symbol(平安) ] ====Reflect.ownKeys(obj)




// console.log({ s, s1, n });
// console.log(s === s1);
// console.log(obj, obj[n]);



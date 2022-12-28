/**
 * Proxy和Reflect是vue3实现响应式的基础
 * 
 * Reflec 
 * let obj = {name:"小李"}         //undefine
 * Reflect.get(obj,'name')         //'小李'
 * Reflect.set(obj,'name','aaa')   //true
 * obj                             // {name: 'aaa'}
 */
type Person = {
  name: string,
  age: number,
  text: string,
}

const proxy = (object: any, key: any) => {
  //Proxy 第一个参数是一个对象，第二个参数是一个操作符
  return new Proxy(object, {
    /**
     * @param target      是穿的这个对象
     * @param prop        是穿的key值
     * @param receiver    跟target值一样，防止上下文错误
     */
    get(target, prop, receiver) {
      console.log('=====================>get', prop);

      return Reflect.get(target, prop, receiver)
    },
    /**
     * @param target      是穿的这个对象
     * @param prop        是穿的key值
     * @param value       设置的值
     * @param receiver    跟target值一样，防止上下文错误
     */
    set(target, prop, value, receiver) {
      console.log('=====================>set', prop);

      return Reflect.set(target, prop, value, receiver)
    }
  })
}

// 认证监听函数
// const logAccess =(object: Person, key: "name" | "age" | "text") => {
//   return proxy(object, key)
// }
const logAccess = <T>(object: T, key: keyof T): T => {
  return proxy(object, key)
}


// 自己尝试用keyof
// function logAccess<Person, K extends keyof Person>(object: Person, key: K) {
//   return proxy(object, key)
// }

let man: Person = logAccess({
  name: '小李',
  age: 22,
  text: '66666'
}, 'name')

// man.age = 30
man.age
console.log(man);


let man2 = logAccess({
  name: "小刘",
  id: 1,
}, "id")

man2.name
console.log(man2);
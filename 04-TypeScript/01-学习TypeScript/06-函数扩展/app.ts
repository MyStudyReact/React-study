interface User {
  name: string,
  age?: number
}

// const fn = function (name: string, age: number = 30): string {   // 设置有默认值
// const fn = function (name: string, age?: number): string {       // 可选值
// return name + age
const fn = function (user: User): string {          // interface约束类型
  return user.name + user.age
}

// const a = fn('张三', 10000)
// const a = fn('张三', 10000, true) //应有 2 个参数，但获得 3 个。

/**
 * age 有默认值 为默认值
 * 
 * age 可选值的时候 为undefined
 */
// const a = fn('张三')

const a = fn({ // interface约束类型
  name: '张三'
})



console.log(a);


/**
 * 函数重载 
 * 重载是方法名字相同，而参数不同，与返回值无关（返回类型可以相同也可以不同）。
 * 如果参数类型不同，则参数类型应设置为 any。
 * 参数数量不同你可以将不同的参数设置为可选。
 * 
 * 记忆方法：将函数的声明和实现分开，多个声明，一个实现
 */
function fn1(params: number): void
function fn1(params: string, params2: number): void
function fn1(params: any, params2?: any): any {
  return params + ' ' + params2
}

const a1 = fn1(1)
console.log(a1);

const a2 = fn1('1', 1)
console.log(a2);

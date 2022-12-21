/**
 * 迭代器
 * 
 * Iterator
 */

/**arr */
// console.log([]);

/**nodeList */
// console.log(document.querySelectorAll('div')); //NodeList(1762)

/**arguments */
// function a(){
//   console.log(arguments); //Arguments(3)
// }
// a(1,2,3)


/**set */
// console.log(new Set()); // Set(0)

/**map */
// console.log(new Map()); // Map(0)

let arr: Array<number> = [4, 5, 6]
// Symbol.iterator是一个函数
let it: Iterator<number> = arr[Symbol.iterator]()
/**
 * 表示从头开始遍历，掉一次遍历一次，再掉一次遍历下一次
 * done false 表示还有这个值，true 表示没有这个值
 */
// console.log(it.next());   // { value: 4, done: false }
// console.log(it.next());   // { value: 5, done: false }
// console.log(it.next());   // { value: 6, done: false }
// console.log(it.next());   // { value: undefined, done: true }

/**
 * 测试用例
 */
let arr1: Array<number> = [4, 5, 6]

let set1: Set<number> = new Set([1, 2, 3])

type mapKeys = string | number
let map1: Map<mapKeys, mapKeys> = new Map()
map1.set('1', '健康')
map1.set('2', '平安')

// 如果是对象 是不支持的 会报错
let obj = {
  name: 1
}

function gen(erg: any) {
  let it: Iterator<any> = erg[Symbol.iterator]()

  let next: any = { done: false }

  while (!next.done) {
    next = it.next()

    if (!next.done) {
      console.log(next, '=======next');
    }
  }
}

// gen(arr1)
// map(set1)
gen(map1)
// gen(obj) // 如果是对象 是不支持的 会报错 他里面没有Iterator函数


/**
 * 生成器
 * 
 */
// for (const item of arr1) {
//   console.log(item, '=====item');
// }
// for (const item of set1) {
//   console.log(item, '=====item');
// }
for (const item of map1) {
  console.log(item, '=====item');
}

// for (const item of obj) { // 如果是对象 是不支持的 会报错 他里面没有Iterator函数
//   console.log(item, '=====item');
// }

// for of =====> 获取的是值
// for in =====> 获取的是键
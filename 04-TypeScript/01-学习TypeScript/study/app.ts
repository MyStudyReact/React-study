let arrN: number[] = [1, 2, 3]                  // 数字类型数组
let arrS: string[] = ['1', '2', '3']            // 字符串类型数组
let arrB: boolean[] = [true, false]             // 布尔类型数组
let arrAny: any[] = [1, '2', true, {}, []]      // 任意类型的数组

// 二位或者三维数组
let arrTwo: number[][] = [[], [], []]
let arrThree: number[][][] = [[[]], [[]], [[]]]


/**
 * 泛型定义 规则 Array<类型>
 */
let arrN11: Array<number> = [1, 2, 3]                  // 数字类型数组
let arrS1: Array<string> = ['1', '2', '3']            // 字符串类型数组
let arrB1: Array<boolean> = [true, false]             // 布尔类型数组
let arrAny1: Array<any> = [1, '2', true, {}, []]      // 任意类型的数组

// 二位或者三维数组
let arrTwo1: Array<Array<any>> = [[], [], []]
let arrThree1: Array<Array<Array<any>>> = [[[]], [[]], [[]]]

/**
 * 类数组
 */
function Arr(...args: any): void {
  console.log(arguments);
  // let arr:number[] = arguments //类型“IArguments”缺少类型“number[]”的以下属性: pop, push, concat, join 及其他 27 项。
  let arr: IArguments = arguments
}

// interface IArguments {
//   [index: number]: any;
//   length: number;
//   callee: Function;
// }

Arr(4, 5, 6)

// 用接口定义类数组
interface ArrString {
  //数字索引签名:通过定义接口用来约束数组
  //[index: number] 表示键名为数字
  [index: number]: string
}

let arr: ArrString = ['1', '2', '3']

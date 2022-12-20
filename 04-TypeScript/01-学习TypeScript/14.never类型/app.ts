/**
 * TypeScript 将使用 never 类型来表示不应该存在的状态
 */
// 声明基本类型
type bbb = string & number

// 声明函数
function error(message: string): never {
  throw new Error(message)
}

error('123')

function loop(): never { //死循环
  while (true) {

  }
}

interface A {
  type: "达不溜不头疼"
}

interface B {
  type: "达不溜退烧"
}

interface C {
  type: "退退退！！！疫情"
}

type All = A | B | C
function type(val: All) {
  switch (val.type) {
    case '达不溜不头疼':
      break;
    case '达不溜退烧':
      break;
    case '退退退！！！疫情':
      break;
    //兜底逻辑 一般是不会进入这儿如果进来了就是程序异常了
    default:
      const check: never = val //不能将类型“C”分配给类型“never”。
      break;
  }
}
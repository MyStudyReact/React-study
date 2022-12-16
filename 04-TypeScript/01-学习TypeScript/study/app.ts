/**
 * 抽象类
 * 1. 不能被实例化
 * 2. 
 */
abstract class A {
  name: string
  constructor(name: string) {
    this.name = name
  }

  setName(name: string) {
    this.name = name
  }

  // abstract getName(){ //方法“getName”不能具有实现，因为它标记为抽象。
  //   return 123
  // }
  abstract getName(): string
}

// new A() //无法创建抽象类的实例。

class B extends A {
  constructor() {
    // 子调用父
    super('你好')
  }
  getName(): string {
    return this.name
  }
}

let b = new B()
// 父类的所有都可以用（除了私有的）
b.setName('不好')
console.log(b.getName());

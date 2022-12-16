/**
 * 类的修饰符 public private protected (默认public)
 * public     公用类 外部可直接访问 （var）
 * private    私有类 只能内部进行访问 （let）
 * protected  受保护类 只能内部和子类中访问
 * 
 * 
 * static     静态类
 */
class Person {
  // ts里面还需要再定义一遍
  public name: string
  // 如果了定义了变量不用 也会报错 通常是给个默认值 或者 进行赋值
  private age: number = 0
  protected sub: boolean
  static aaa: symbol = Symbol('aaa')
  constructor(name: string, age: number, sub: boolean) {
    this.name = name;
    this.age = age;
    this.sub = sub;

    // this.aaa   //属性“aaa”在类型“Person”上不存在。
    // Person.aaa // 这样是可以的

    // this.run()   // 这里面掉不了 run函数
    // Person.run() //这样是可以的
  }

  // 静态函数
  static run() {
    // 再静态函数中 this 只能访问到 static 属性
    // this.aaa
    this.dev()
    console.log(this.aaa, this.name, '5555');
    return 'bbb'
  }

  static dev() {
    this.aaa
    // 两个静态函数是可以互相调用的
    this.run()
    return 'dev'
  }
}

class Man extends Person {
  constructor() {
    super('阴', 22, false)
    this.sub // 子类可以访问到
  }
  create() {
    console.log(this.sub)
  }
}

let p = new Person('阴', 22, false)
// p.age //属性“age”为私有属性，只能在类“Person”中访问。
// p.sub //属性“sub”受保护，只能在类“Person”及其子类中访问。


// static 不需要进行new 可以通过类名进行调用
console.log(Person.aaa, Person.run());


/**
 * interface 定义 类
 */

interface Person1 {
  run(type: boolean): boolean
}

interface H {
  set(): void
}

class A {
  params: string
  constructor(params) {
    this.params = params;
  }
}

class Man1 extends A implements Person1, H {
  run(type: boolean): boolean {
    return type
  }

  set() {

  }
}

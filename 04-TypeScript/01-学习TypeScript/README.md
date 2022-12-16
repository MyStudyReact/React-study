# 01-学习TypeScript
## 安装起步
### 全局安装
```sh
$ npm install typescript -g
```
### 检测是否安装成功
```sh
$ tsc -v
```

## 基础类型
### void 和 undefined 和 null 最大的区别
> 与 void 的区别是，undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 string 类型的变量：

```ts
//这样写会报错 void类型不可以分给其他类型
let test: void = undefined
let num2: string = "1"
 
num2 = test
```

```ts
//这样是没问题的
let test: null = null
let num2: string = "1"
 
num2 = test
 
//或者这样的
let test: undefined = undefined
let num2: string = "1"
 
num2 = test
```

### 配置tsconfig.json
> 自动生成tsconfig.json文件
```sh
tsc --init 
```
> 关闭严格模式
```json
{
  "compilerOptions":{
    "strict": true
  }
}
```

## 任意类型
> 用tsc 一直重复编译很麻烦，所以更换成 nodejs 环境执行ts
> 
> 安装 
> npm i @types/node --save-dev （node环境支持的依赖必装）
> npm i ts-node --g
>
> 运行
> ts-node app.ts

**总结**
1. TypeScript 3.0中引入的 unknown 类型也被认为是 top type ，但它更安全。
与 any 一样，所有类型都可以分配给unknown
unknow  unknow类型比any更加严格当你要使用any 的时候可以尝试使用unknow
2. 区别 
  - 1.1 unknow类型不能作为子类型只能作为父类型 any可以作为父类型和子类型
   - unknown类型不能赋值给其他类型
   - unknown可赋值对象只有unknown 和 any
  - 1.2 unknow 是不能调用属性和方法

## Object、object 以及{} 区别
### Object
> Object类型是所有Object类的实例的类型。 由以下两个接口来定义：
> Object 接口定义了 Object.prototype 原型对象上的属性；
> ObjectConstructor 接口定义了 Object 类的属性， 如上面提到的 Object.create()。
> 这个类型是跟原型链有关的原型链顶层就是Object，所以值类型和引用类型最终都指向Object，所以他包含所有类型。

## object
> object 代表所有非值类型的类型，例如 数组 对象 函数等，常用于泛型约束

## {}
> 看起来很别扭的一个东西 你可以把他理解成new Object 就和我们的第一个Object基本一样 包含所有类型
**tips**
字面量模式是不能修改值的

## 接口和对象类型
> 在typescript中，我们定义对象的方式要用关键字interface（接口），我的
> 解是使用interface来定义一种约束，让数据的结构满足约束的格式。

### 基本使用
> 使用接口约束的时候不能多一个属性也不能少一个属性

### 可选属性 使用?操作符
> 可选属性的含义是该属性可以不存在

### 任意属性 [propName: string]
> 允许添加新的任意属性
> 需要注意的是，**一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集**
> 一般设置为any类型  [propName: string]: any;

### 只读属性 readonly
> readonly 只读属性是不允许被赋值的只能读取

### 添加函数

## 数组类型
### 类型[ ]
> (类型加中括号)

### 数组泛型
> 规则 Array<类型>

### arguments类数组
```ts
//错误的arguments 是类数组不能这样定义
let arr:number[] = arguments

//ts内置对象IArguments 定义
let arr:IArguments = arguments
```


## 函数扩展
### 函数基本类型
> 注意，参数不能多传，也不能少传 必须按照约定的类型来
### 函数的可选参数(用?)
### 函数参数的默认值
> 跟js一样直接等号赋值
### 接口定义函数
```ts
//定义参数 num 和 num2  ：后面定义返回值的类型
interface Add {
    (num:  number, num2: number): number
}
 
const fn: Add = (num: number, num2: number): number => {
    return num + num2
}
fn(5, 5)
 
 
interface User{
    name: string;
    age: number;
}
function getUserInfo(user: User): User {
  return user
}
```

**注意**
> 如果可选参数没穿 就为 undefined

### 定义剩余参数
```ts
const fn = (array:number[],...items:any[]):any[] => {
  console.log(array,items)
  return items
}
 
let a:number[] = [1,2,3]
 
fn(a,'4','5','6')
```

## 联合类型 | 交叉类型 | 类型断言
### 联合类型
> 用“|”

### 交叉类型 （还可以extends）
> 用“&”

### 类型断言
> (值 as 类型)　　或　　(<类型>值)  (value as string) 或者 (<string>value)

```ts
interface A {
  run: string
}

interface B {
  build: string
}

let fn1 = (type: A | B): void => {
  // console.log(type.run); //类型“A | B”上不存在属性“run”。类型“B”上不存在属性“run”。

  // 以下两种都可以
  console.log((<A>type).run);

  console.log((type as A).run);
}

fn1({
  build: '123'
}) // undefined 滥用断言导致的

```
**需要注意的是，类型断言只能够「欺骗」TypeScript 编译器，无法避免运行时的错误，反而滥用类型断言可能会导致运行时错误：**
#### 使用any临时断言

```ts
(window as any).abc = 123
//可以使用any临时断言在 any 类型的变量上，访问任何属性都是允许的。
```
### as const
> 是对字面值的断言，与const直接定义常量是有区别的
> 如果是普通类型跟直接const 声明是一样的

```ts
const names = '小满'
names = 'aa' //无法修改
 
 
let names2 = '小满' as const
names2 = 'aa' //无法修改
```

```ts
// 数组
let a1 = [10, 20] as const;
const a2 = [10, 20];
 
a1.unshift(30); // 错误，此时已经断言字面量为[10, 20],数据无法做任何修改
a2.unshift(30); // 通过，没有修改指针
```

### 类型断言是不具影响力的
```ts

function toBoolean(something: any): boolean {
    return something as boolean;
}
 
toBoolean(1);
// 返回值为 1
//
```

## 内置对象
> JavaScript 中有很多内置对象，它们可以直接在 TypeScript 中当做定义好了的类型。
### ECMAScript 的内置对象
> Boolean、Number、string、RegExp、Date、Error
```ts
let b: Boolean = new Boolean(1)
console.log(b)
let n: Number = new Number(true)
console.log(n)
let s: String = new String('今天找到工作了吗')
console.log(s)
let d: Date = new Date()
console.log(d)
let r: RegExp = /^1/
console.log(r)
let e: Error = new Error("error!")
console.log(e)
```
### DOM 和 BOM 的内置对象
> Document、HTMLElement、Event、NodeList 等
```ts
let body: HTMLElement = document.body;
let allDiv: NodeList = document.querySelectorAll('div');
//读取div 这种需要类型断言 或者加个判断应为读不到返回null
let div:HTMLElement = document.querySelector('div') as HTMLDivElement
document.addEventListener('click', function (e: MouseEvent) {
    
});
//dom元素的映射表
interface HTMLElementTagNameMap {
    "a": HTMLAnchorElement;
    "abbr": HTMLElement;
    "address": HTMLElement;
    "applet": HTMLAppletElement;
    "area": HTMLAreaElement;
    "article": HTMLElement;
    "aside": HTMLElement;
    "audio": HTMLAudioElement;
    "b": HTMLElement;
    "base": HTMLBaseElement;
    "bdi": HTMLElement;
    "bdo": HTMLElement;
    "blockquote": HTMLQuoteElement;
    "body": HTMLBodyElement;
    "br": HTMLBRElement;
    "button": HTMLButtonElement;
    "canvas": HTMLCanvasElement;
    "caption": HTMLTableCaptionElement;
    "cite": HTMLElement;
    "code": HTMLElement;
    "col": HTMLTableColElement;
    "colgroup": HTMLTableColElement;
    "data": HTMLDataElement;
    "datalist": HTMLDataListElement;
    "dd": HTMLElement;
    "del": HTMLModElement;
    "details": HTMLDetailsElement;
    "dfn": HTMLElement;
    "dialog": HTMLDialogElement;
    "dir": HTMLDirectoryElement;
    "div": HTMLDivElement;
    "dl": HTMLDListElement;
    "dt": HTMLElement;
    "em": HTMLElement;
    "embed": HTMLEmbedElement;
    "fieldset": HTMLFieldSetElement;
    "figcaption": HTMLElement;
    "figure": HTMLElement;
    "font": HTMLFontElement;
    "footer": HTMLElement;
    "form": HTMLFormElement;
    "frame": HTMLFrameElement;
    "frameset": HTMLFrameSetElement;
    "h1": HTMLHeadingElement;
    "h2": HTMLHeadingElement;
    "h3": HTMLHeadingElement;
    "h4": HTMLHeadingElement;
    "h5": HTMLHeadingElement;
    "h6": HTMLHeadingElement;
    "head": HTMLHeadElement;
    "header": HTMLElement;
    "hgroup": HTMLElement;
    "hr": HTMLHRElement;
    "html": HTMLHtmlElement;
    "i": HTMLElement;
    "iframe": HTMLIFrameElement;
    "img": HTMLImageElement;
    "input": HTMLInputElement;
    "ins": HTMLModElement;
    "kbd": HTMLElement;
    "label": HTMLLabelElement;
    "legend": HTMLLegendElement;
    "li": HTMLLIElement;
    "link": HTMLLinkElement;
    "main": HTMLElement;
    "map": HTMLMapElement;
    "mark": HTMLElement;
    "marquee": HTMLMarqueeElement;
    "menu": HTMLMenuElement;
    "meta": HTMLMetaElement;
    "meter": HTMLMeterElement;
    "nav": HTMLElement;
    "noscript": HTMLElement;
    "object": HTMLObjectElement;
    "ol": HTMLOListElement;
    "optgroup": HTMLOptGroupElement;
    "option": HTMLOptionElement;
    "output": HTMLOutputElement;
    "p": HTMLParagraphElement;
    "param": HTMLParamElement;
    "picture": HTMLPictureElement;
    "pre": HTMLPreElement;
    "progress": HTMLProgressElement;
    "q": HTMLQuoteElement;
    "rp": HTMLElement;
    "rt": HTMLElement;
    "ruby": HTMLElement;
    "s": HTMLElement;
    "samp": HTMLElement;
    "script": HTMLScriptElement;
    "section": HTMLElement;
    "select": HTMLSelectElement;
    "slot": HTMLSlotElement;
    "small": HTMLElement;
    "source": HTMLSourceElement;
    "span": HTMLSpanElement;
    "strong": HTMLElement;
    "style": HTMLStyleElement;
    "sub": HTMLElement;
    "summary": HTMLElement;
    "sup": HTMLElement;
    "table": HTMLTableElement;
    "tbody": HTMLTableSectionElement;
    "td": HTMLTableDataCellElement;
    "template": HTMLTemplateElement;
    "textarea": HTMLTextAreaElement;
    "tfoot": HTMLTableSectionElement;
    "th": HTMLTableHeaderCellElement;
    "thead": HTMLTableSectionElement;
    "time": HTMLTimeElement;
    "title": HTMLTitleElement;
    "tr": HTMLTableRowElement;
    "track": HTMLTrackElement;
    "u": HTMLElement;
    "ul": HTMLUListElement;
    "var": HTMLElement;
    "video": HTMLVideoElement;
    "wbr": HTMLElement;
}
```
### 定义Promise
```ts
function promise():Promise<number>{
   return new Promise<number>((resolve,reject)=>{
       resolve(1)
   })
}
 
promise().then(res=>{
    console.log(res)
})
```
当你在使用一些常用的方法的时候，TypeScript 实际上已经帮你做了很多类型判断的工作了

而他们的定义文件，则在 
 [TypeScript核心库的定义文件](https://github.com/Microsoft/TypeScript/tree/master/src/lib) 核心库的定义文件中

## Class类
> ES6提供了更接近传统语言的写法，引入了Class（类）这个概念，作为对象的模板。通过class关键字，可以定义类。基本上，ES6的class
> 以看作只是一个语法糖，它的绝大部分功能，ES5都可以做到，新的class写法只是让对象原型的写法更加清晰、更像面向对象编程的语法
> 已。上面的代码用ES6的“类”改写，就是下面这样。

### 定义类
```ts
class Person {
  // ts里面还需要再定义一遍
  name: string
  // 如果了定义了变量不用 也会报错 通常是给个默认值 或者 进行赋值
  age: number = 0
  sub: boolean
  constructor(name: string, age: number, sub: boolean) {
    this.name = name;
    this.age = age;
    this.sub = sub;
  }
```
### 类的修饰符
> 使用public 修饰符 可以让你定义的变量 内部访问 也可以外部访问 如果不写默认就是public
> 使用private 修饰符 代表定义的变量私有的只能在内部访问 不能在外部访问
> 使用protected 修饰符 代表定义的变量私有的只能在内部和继承的子类中访问 不能在外部访问
```ts
/**
 * 类的修饰符 public private protected (默认public)
 * public     公用类 外部可直接访问 （var）
 * private    私有类 只能内部进行访问 （let）
 * protected  受保护类 只能内部和子类中访问
 */
class Person {
  // ts里面还需要再定义一遍
  public name: string
  // 如果了定义了变量不用 也会报错 通常是给个默认值 或者 进行赋值
  private age: number = 0
  protected sub: boolean
  ...
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
```

### 静态属性和静态方法
> 我们用static 定义的属性/方法 不可以通过this 去访问 只能通过类名去调用
> 如果两个函数都是static 静态的是可以通过this互相调用
```ts
class Person {
  static aaa: symbol = Symbol('aaa')
  constructor(name: string, age: number, sub: boolean) {
    ...

    this.aaa   //属性“aaa”在类型“Person”上不存在。
    Person.aaa // 这样是可以的

    this.run()   // 这里面掉不了 run函数
    Person.run() //这样是可以的
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

// static 不需要进行new 可以通过类名进行调用
console.log(Person.aaa, Person.run());
```

### interface 定义类
> 使用关键字 implements   后面跟interface的名字多个用逗号隔开 继承还是用extends


```ts
interface PersonClass {
    get(type: boolean): boolean
}
 
interface PersonClass2{
    set():void,
    asd:string
}
 
class A {
    name: string
    constructor() {
        this.name = "123"
    }
}
 
class Person extends A implements PersonClass,PersonClass2 {
    asd: string
    constructor() {
        super()
        this.asd = '123'
    }
    get(type:boolean) {
        return type
    }
    set () {
 
    }
}
```

### 抽象类
> 应用场景如果你写的类实例化之后毫无用处此时我可以把他定义为抽象类
> 或者你也可以把他作为一个基类-> 通过继承一个派生类去实现基类的一些方法
> 抽象方法就是只有方法的定义，没有方法体，方法体需要在子类中进行实现。
> **抽象类就是将众多类中具有共同部分的功能抽离出来，单独创建一个类作为其他派生类的基类使用。他们不允许被实例化，定义抽象类使用abstract关键字**
> 我们看例子
> 下面这段代码会报错抽象类无法被实例化

```ts
abstract class A {
   public name:string
   
}
 
new A()
```

> 例子2
> 我们在A类定义了 getName 抽象方法但为实现
> 我们B类实现了A定义的抽象方法 如不实现就不报错 我们定义的抽象方法必须在派生类实现

```ts
abstract class A {
   name: string
   constructor(name: string) {
      this.name = name;
   }
   print(): string {
      return this.name
   }
 
   abstract getName(): string
}
 
class B extends A {
   constructor() {
      super('小满')
   }
   getName(): string {
      return this.name
   }
}
 
let b = new B();
 
console.log(b.getName());
```
**Tips:** 
**派生类：子类;基类：父类** 
**实例化是指在面向对象的编程中，把用类创建对象的过程称为实例化。是将一个抽象的概念类，具体到该类实物的过程。实例化过程中一般由类名 对象名 = new 类名（参数1，参数2...参数n）构成。** 
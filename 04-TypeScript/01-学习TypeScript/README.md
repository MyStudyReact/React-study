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

## 抽象类
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

## 元组
> 如果需要一个固定大小的不同类型值的集合，我们需要使用元组。 
**元组就是数组的变种**
> 元组（Tuple）是固定数量的不同类型的元素的组合。
> 元组与集合的不同之处在于，元组中的元素类型可以是不同的，而且数量固定。元组的好处在于可以把多个元素作为一个单元传递。如果一个方法需要返回多个值，可以把这多个值作
> 元组返回，而不需要创建额外的类来表示。
```ts
let arr:[number,string] = [1,'string']
 
 
let arr2: readonly [number,boolean,string,undefined] = [1,true,'sring',undefined]
```

当赋值或访问一个已知索引的元素时，会得到正确的类型：
```ts
let arr:[number,string] = [1,'string']
arr[0].length //error
arr[1].length //success
 
//数字是没有length 的
```

### 越界元素
```ts
let arr:[number,string] = [1,'string']
 
arr.push(true)//error
```

**应用场景**
**例如定义execl返回的数据**
```ts
let excel: [string, string, number, string][] = [
    ['title', 'name', 1, '123'],
    ['title', 'name', 1, '123'],
    ['title', 'name', 1, '123'],
    ['title', 'name', 1, '123'],
    ['title', 'name', 1, '123'],
]
```

## 枚举类型
> 在javaScript中是没有枚举的概念的TS帮我们定义了枚举这个类型
> 使用枚举 通过enum关键字定义我们的枚举
### 1. 数字枚举
#### 普通使用
> 例如 红绿蓝 Red = 0 Green = 1 Blue= 2 分别代表红色0 绿色为1 蓝色为2
```ts
enum Types{
   Red,
   Green,
   BLue
}
```

> 这样写就可以实现应为ts定义的枚举中的每一个组员默认都是从0开始的 
```ts
enum Types{
   Red = 0,
   Green = 1,
   BLue = 2
}
//默认就是从0开始的 可以不写值
```
#### 增长枚举
```ts
enum Types{
   Red = 1,
   Green,
   BLue
}
```
>如上，我们定义了一个数字枚举， Red使用初始化为 1。 其余的成员会从 1开始自动增长。 换句话说， Type.Red的值为 1， Green为 2， Blue为 3。

### 2.字符串枚举
> 字符串枚举的概念很简单。 在一个字符串枚举里，每个成员都必须用字符串字面量，或另外一个字符串枚举成员进行初始化。
```ts
enum Types{
   Red = 'red',
   Green = 'green',
   BLue = 'blue'
}
```
>由于字符串枚举没有自增长的行为，字符串枚举可以很好的序列化。 换句话说，如果你正在调试并且必须要读一个数字枚举的运行时的值，这个值通常是很难读的 - 它并不能表达有用的信息，字符串枚举允许你提供一个运行时有意义的并且可读的值，独立于枚举成员的名字。

### 3.异构枚举
> 枚举可以混合字符串和数字成员
```ts
enum Types{
   No = "No",
   Yes = 1,
}
```
### 4.接口枚举
> 定义一个枚举Types 定义一个接口A 他有一个属性red 值为Types.yyds
> 声明对象的时候要遵循这个规则
```ts
   enum Types {
      yyds,
      dddd
   }
   interface A {
      red:Types.yyds
   }
 
   let obj:A = {
      red:Types.yyds
   }
```

### 5.const枚举
> let  和 var 都是不允许的声明只能使用const
> 大多数情况下，枚举是十分有效的方案。 然而在某些情况下需求很严格。 为了避免在额外生成的代码上的开销和额外的非直接的对枚举成员的访问，我们可以使用 const枚举。 常枚举通过在枚举上使用 const修饰符来定义
> const 声明的枚举会被编译成常量
> 普通声明的枚举编译完后是个对象
```ts
const enum Types{
   No = "No",
   Yes = 1,
}
```
### 6.反向映射
> 它包含了正向映射（ name -> value）和反向映射（ value -> name）
> 要注意的是 不会为字符串枚举成员生成反向映射。
```ts
enum Enum {
   fall
}
let a = Enum.fall;
console.log(a); //0
let nameOfA = Enum[a]; 
console.log(nameOfA); //fall
```

## 类型推论|类型别名
### 类型推论
> 1. TypeScript 会在没有明确的指定类型的时候推测出一个类型，这就是类型推论
>    不能够在赋值给别的类型
> 2. 如果你声明变量没有定义类型也没有赋值这时候TS会推断成any类型可以进行任何操作

### 类型别名
> type 关键字（可以给一个类型定义一个名字）多用于符合类型
#### 1. 定义类型别名
```ts
type str = string
let s:str = "我是小满"
console.log(s);
```
#### 2. 定义函数别名
```ts
type str = () => string
let s: str = () => "我是小满"
console.log(s);
```
### 3.定义联合类型别名
```ts
type str = string | number
let s: str = 123
let s2: str = '123'
console.log(s,s2);
```
### 4.定义值的别名
```ts
type value = boolean | 0 | '213'
let s:value = true
//变量s的值  只能是上面value定义的值
```

## 14.never类型
> TypeScript 将使用 never 类型来表示不应该存在的状态(很抽象是不是)
```ts
// 返回never的函数必须存在无法达到的终点
 
// 因为必定抛出异常，所以 error 将不会有返回值
function error(message: string): never {
    throw new Error(message);
}
 
// 因为存在死循环，所以 loop 将不会有返回值
function loop(): never {
    while (true) {
    }
}
```
### never 与 void 的差异
```ts
    //void类型只是没有返回值 但本身不会出错
    function Void():void {
        console.log();
    }
 
    //只会抛出异常没有返回值
    function Never():never {
    throw new Error('aaa')
    }
```

### never 类型的一个应用场景
```ts
interface A {
    type: "foo"
}
 
interface B {
    type: "bar"
}
type All = A | B ;
function handleValue(val: All) {
    switch (val.type) {
        case 'foo':
            break;
        case 'bar':
            break
        default:
            //兜底逻辑 一般是不会进入这儿如果进来了就是程序异常了
            
            const exhaustiveCheck:never = val;
            break
    }
}
```
比如新来了一个同事他新增了一个C接口，我们必须手动找到所有 switch 代码并处理，否则将有可能引入 BUG 。

> 而且这将是一个“隐蔽型”的BUG，如果回归面不够广，很难发现此类BUG。

那 TS 有没有办法帮助我们在类型检查阶段发现这个问题呢？
```ts
interface A {
    type: "foo"
}
 
interface B {
    type: "bar"
}
interface C {
    type: "bizz"
}
type All = A | B | C;
function handleValue(val: All) {
    switch (val.type) {
        case 'foo':
            break;
        case 'bar':
            break
        default:
            //兜底逻辑 一般是不会进入这儿如果进来了就是程序异常了
 
            const exhaustiveCheck: never = val;
            break
    }
}
```
> 由于任何类型都不能赋值给 never 类型的变量，所以当存在进入 default 分支的可能性时，TS的类型检查会及时帮我们发现这个问题
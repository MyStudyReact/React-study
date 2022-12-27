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

## symbol类型
[Symbols · TypeScript中文网 · TypeScript——JavaScript的超集 ts官网](https://www.tslang.cn/docs/handbook/symbols.html)
**Symbol**
**自ECMAScript 2015起，symbol成为了一种新的原生类型，就像number和string一样。**
> symbol类型的值是通过Symbol构造函数创建的。
> 可以传递参做为唯一标识 只支持 string 和 number类型的参数
```ts
let sym1 = Symbol();
let sym2 = Symbol("key"); // 可选的字符串key
```

### Symbol的值是唯一的
```ts
const s1 = Symbol()
const s2 = Symbol()
// s1 === s2 =>false
```

### 用作对象属性的键
```ts
let sym = Symbol();
 
let obj = {
    [sym]: "value"
};
 
console.log(obj[sym]); // "value"
```

### 使用symbol定义的属性，是不能通过如下方式遍历拿到的
```ts
const symbol1 = Symbol('666')
const symbol2 = Symbol('777')
const obj1= {
   [symbol1]: '小满',
   [symbol2]: '二蛋',
   age: 19,
   sex: '女'
}
// 1 for in 遍历
for (const key in obj1) {
   // 注意在console看key,是不是没有遍历到symbol1
   console.log(key)
}
// 2 Object.keys 遍历
Object.keys(obj1)
console.log(Object.keys(obj1))
// 3 getOwnPropertyNames
console.log(Object.getOwnPropertyNames(obj1))
// 4 JSON.stringfy
console.log(JSON.stringify(obj1))
```

### 使用symbol定义的属性，可以通过如下方式遍历拿到的
```ts
// 1 拿到具体的symbol 属性,对象中有几个就会拿到几个
Object.getOwnPropertySymbols(obj1)
console.log(Object.getOwnPropertySymbols(obj1))
// 2 es6 的 Reflect 拿到对象的所有属性
Reflect.ownKeys(obj1)
console.log(Reflect.ownKeys(obj1))
```

### Symbol.iterator 迭代器 和 生成器 for of
> 支持遍历大部分类型迭代器 arr nodeList argumetns set map 等
```ts
var arr = [1,2,3,4];
let iterator = arr[Symbol.iterator]();
 
console.log(iterator.next());  //{ value: 1, done: false }
console.log(iterator.next());  //{ value: 2, done: false }
console.log(iterator.next());  //{ value: 3, done: false }
console.log(iterator.next());  //{ value: 4, done: false }
console.log(iterator.next());  //{ value: undefined, done: true }
```

**测试用例**
```ts
interface Item {
    age: number,
    name: string
}
 
const array: Array<Item> = [{ age: 123, name: "1" }, { age: 123, name: "2" }, { age: 123, name: "3" }]
 
type mapTypes = string | number
const map:Map<mapTypes,mapTypes> = new Map()
 
map.set('1','王爷')
map.set('2','陆北')
 
const obj = {
    aaa:123,
    bbb:456
}
 
let set:Set<number> = new Set([1,2,3,4,5,6])
// let it:Iterator<Item> = array[Symbol.iterator]()
const gen = (erg:any): void => {
    let it: Iterator<any> = erg[Symbol.iterator]()
    let next:any= { done: false }
    while (!next.done) {
        next =  it.next()
        if (!next.done) {
            console.log(next.value)
        }
    }
}
gen(array)
```

> 以下为这些symbols的列表：

**Symbol.hasInstance**
> 方法，会被instanceof运算符调用。构造器对象用来识别一个对象是否是其实例。

**Symbol.isConcatSpreadable**
> 布尔值，表示当在一个对象上调用Array.prototype.concat时，这个对象的数组元素是否可展开。

**Symbol.iterator**
> 方法，被for-of语句调用。返回对象的默认迭代器。

**Symbol.match**
> 方法，被String.prototype.match调用。正则表达式用来匹配字符串。

**Symbol.replace**
> 方法，被String.prototype.replace调用。正则表达式用来替换字符串中匹配的子串。

**Symbol.search**
> 方法，被String.prototype.search调用。正则表达式返回被匹配部分在字符串中的索引。

**Symbol.species**
> 函数值，为一个构造函数。用来创建派生对象。

**Symbol.split**
> 方法，被String.prototype.split调用。正则表达式来用分割字符串。

**Symbol.toPrimitive**
> 方法，被ToPrimitive抽象操作调用。把对象转换为相应的原始值。

**Symbol.toStringTag**
> 方法，被内置方法Object.prototype.toString调用。返回创建对象时默认的字符串描述。

Symbol.unscopables
对象，它自己拥有的属性会被with作用域排除在外。

## 泛型
**泛型在TypeScript 是很重要的东西 例如vue3 是用ts编写的 里面用到了非常多的泛型**
### 函数泛型
> 我写了两个函数一个是数字类型的函数，另一个是字符串类型的函数,其实就是类型不同，
> 实现的功能是一样的，这时候我们就可以使用泛型来优化

```ts
function num (a:number,b:number) : Array<number> {
    return [a ,b];
}
num(1,2)
function str (a:string,b:string) : Array<string> {
    return [a ,b];
}
str('独孤','求败')
```

#### 泛型优化 (变量类型变化)
> 语法为函数名字后面跟一个<参数名> 参数名可以随便写 例如我这儿写了T
> 当我们使用这个函数的时候把参数的类型传进去就可以了 （也就是动态类型）

> 简而言之
> 定义这个函数时，我不决定这些参数的类型，而是让调用者告知我这里的参数是什么类型

```ts
function Add<T>(a: T, b: T): Array<T>  {
    return [a,b]
}
 
Add<number>(1,2)
Add<string>('1','2')
```
#### 多个类型的泛型定义
> 我们也可以使用不同的泛型参数名，只要在数量上和使用方式上能对应上就可以。
```ts
function Sub<T,U>(a:T,b:U):Array<T|U> {
    const params:Array<T|U> = [a,b]
    return params
}
 
 
Sub<Boolean,number>(false,1)
```

#### 定义泛型接口
> 声明接口的时候 在名字后面加一个<参数>
> 使用的时候传递类型

```ts
interface MyInter<T> {
   (arg: T): T
}
 
function fn<T>(arg: T): T {
   return arg
}
 
let result: MyInter<number> = fn
 
result(123)
```

#### 对象字面量泛型
```ts
let foo: { <T>(arg: T): T }
 
foo = function <T>(arg:T):T {
   return arg
}
 
foo(123)
```

### 泛型约束
> 我们期望在一个泛型的变量上面，获取其length参数，但是，有的数据类型是没有length属性的
```ts
function getLegnth<T>(arg:T) {
  return arg.length
}
```

> 这时候我们就可以使用泛型约束
> 于是，我们就得对使用的泛型进行约束，我们约束其为具有length属性的类型，这里我们会用到interface,代码如下
```ts
interface Len {
   length:number
}
 
function getLegnth<T extends Len>(arg:T) {
  return arg.length
}
 
getLegnth<string>('123')
```

### 使用keyof 约束对象
> 其中使用了TS泛型和泛型约束。
> 首先定义了T类型并使用extends关键字继承object类型的子类型，
> 然后使用keyof操作符获取T类型的所有键，
> 它的返回 类型是联合 类型，
> 最后利用extends关键字约束 K类型必须为keyof T联合类型的子类型
```ts
function prop<T, K extends keyof T>(obj: T, key: K) {
   return obj[key]
}
 
 
let o = { a: 1, b: 2, c: 3 }
 
prop(o, 'a') 
prop(o, 'd') //此时就会报错发现找不到
```
### 泛型类
> 声明方法跟函数类似名称后面定义<类型>
> 使用的时候确定类型`new Sub<number>()`
```ts
class Sub<T>{
   attr: T[] = [];
   add (a:T):T[] {
      return [a]
   }
}
 
let s = new Sub<number>()
s.attr = [1,2,3]
s.add(123)
 
let str = new Sub<string>()
str.attr = ['1','2','3']
str.add('123')
```

## tsconfig.json配置文件
> 创建一个空文件夹，进行配置ts环境
> 1. 创建index.ts 文件
```sh
$ echo ''> index.ts
```
> 2. 创建tsconfig.json 文件
```sh
$ tsc --int
```
> 3. 创建index2.ts文件
```sh
$ echo ''> index2.ts
```
> 4. 随便在index.ts和index2.ts中写点东西，然后编译成对应的js文件
```sh
$ tsc
```
> 5. 在tsconfig.json 添加include字段，表示只想编译这个文件，且删除刚刚编译好的两个js文件
> exclude 表示不想编译这个文件
```sh
$ del index.js

$ del index2.js

$ tsc
```

### 配置详解
```json
"compilerOptions": {
  "incremental": true, // TS编译器在第一次编译之后会生成一个存储编译信息的文件，第二次编译会在第一次的基础上进行增量编译，可以提高编译的速度
  "tsBuildInfoFile": "./buildFile", // 增量编译文件的存储位置
  "diagnostics": true, // 打印诊断信息 
  "target": "ES5", // 目标语言的版本
  "module": "CommonJS", // 生成代码的模板标准
  "outFile": "./app.js", // 将多个相互依赖的文件生成一个文件，可以用在AMD模块中，即开启时应设置"module": "AMD",
  "lib": ["DOM", "ES2015", "ScriptHost", "ES2019.Array"], // TS需要引用的库，即声明文件，es5 默认引用dom、es5、scripthost,如需要使用es的高级版本特性，通常都需要配置，如es8的数组新特性需要引入"ES2019.Array",
  "allowJS": true, // 允许编译器编译JS，JSX文件
  "checkJs": true, // 允许在JS文件中报错，通常与allowJS一起使用
  "outDir": "./dist", // 指定输出目录
  "rootDir": "./", // 指定输出文件目录(用于输出)，用于控制输出目录结构
  "declaration": true, // 生成声明文件，开启后会自动生成声明文件
  "declarationDir": "./file", // 指定生成声明文件存放目录
  "emitDeclarationOnly": true, // 只生成声明文件，而不会生成js文件
  "sourceMap": true, // 生成目标文件的sourceMap文件
  "inlineSourceMap": true, // 生成目标文件的inline SourceMap，inline SourceMap会包含在生成的js文件中
  "declarationMap": true, // 为声明文件生成sourceMap
  "typeRoots": [], // 声明文件目录，默认时node_modules/@types
  "types": [], // 加载的声明文件包
  "removeComments":true, // 删除注释 
  "noEmit": true, // 不输出文件,即编译后不会生成任何js文件
  "noEmitOnError": true, // 发送错误时不输出任何文件
  "noEmitHelpers": true, // 不生成helper函数，减小体积，需要额外安装，常配合importHelpers一起使用
  "importHelpers": true, // 通过tslib引入helper函数，文件必须是模块
  "downlevelIteration": true, // 降级遍历器实现，如果目标源是es3/5，那么遍历器会有降级的实现
  "strict": true, // 开启所有严格的类型检查
  "alwaysStrict": true, // 在代码中注入'use strict'
  "noImplicitAny": true, // 不允许隐式的any类型
  "strictNullChecks": true, // 不允许把null、undefined赋值给其他类型的变量
  "strictFunctionTypes": true, // 不允许函数参数双向协变
  "strictPropertyInitialization": true, // 类的实例属性必须初始化
  "strictBindCallApply": true, // 严格的bind/call/apply检查
  "noImplicitThis": true, // 不允许this有隐式的any类型
  "noUnusedLocals": true, // 检查只声明、未使用的局部变量(只提示不报错)
  "noUnusedParameters": true, // 检查未使用的函数参数(只提示不报错)
  "noFallthroughCasesInSwitch": true, // 防止switch语句贯穿(即如果没有break语句后面不会执行)
  "noImplicitReturns": true, //每个分支都会有返回值
  "esModuleInterop": true, // 允许export=导出，由import from 导入
  "allowUmdGlobalAccess": true, // 允许在模块中全局变量的方式访问umd模块
  "moduleResolution": "node", // 模块解析策略，ts默认用node的解析策略，即相对的方式导入
  "baseUrl": "./", // 解析非相对模块的基地址，默认是当前目录
  "paths": { // 路径映射，相对于baseUrl
    // 如使用jq时不想使用默认版本，而需要手动指定版本，可进行如下配置
    "jquery": ["node_modules/jquery/dist/jquery.min.js"]
  },
  "rootDirs": ["src","out"], // 将多个目录放在一个虚拟目录下，用于运行时，即编译后引入文件的位置可能发生变化，这也设置可以虚拟src和out在同一个目录下，不用再去改变路径也不会报错
  "listEmittedFiles": true, // 打印输出文件
  "listFiles": true// 打印编译的文件(包括引用的声明文件)
}
 
// 指定一个匹配列表（属于自动指定该路径下的所有ts相关文件）
"include": [
   "src/**/*"
],
// 指定一个排除列表（include的反向操作）
 "exclude": [
   "demo.ts"
],
// 指定哪些文件使用该配置（属于手动一个个指定文件）
 "files": [
   "demo.ts"
]
```

### 介绍几个常用的
#### 1. include
**指定编译文件默认是编译当前目录下所有的ts文件**
#### 2. exclude
**指定排除的文件**
#### 3. target
**指定编译js 的版本例如es5  es6**
#### 4. allowJS
**是否允许编译js文件**
#### 5. removeComments
**是否在编译过程中删除文件中的注释**
#### 6. rootDir
**编译文件的目录**
#### 7. outDir
**输出的目录**
#### 8. sourceMap
**代码源文件**
#### 9. strict
**严格模式**
#### 10. module
**默认common.js  可选es6模式 amd  umd 等**

## namespace命名空间
> 我们在工作中无法避免全局变量造成的污染，TypeScript提供了namespace 避免这个问题出现
> - 内部模块，主要用于组织代码，避免命名冲突。
> - 命名空间内的类默认私有
> - 通过 export 暴露
> - 通过 namespace 关键字定义
**TypeScript与ECMAScript 2015一样，任何包含顶级import或者export的文件都被当成一个模块。**
**相反地，如果一个文件不带有顶级的import或者export声明，那么它的内容被视为全局可见的（因此对模块也是可见的）**

### 基本使用
> 命名空间中通过export将想要暴露的部分导出(如果不用export 导出是无法读取其值的)
> 不能用ts-node 进行编译 他不认识namespace
```ts
namespace a {
    export const Time: number = 1000
    export const fn = <T>(arg: T): T => {
        return arg
    }
    fn(Time)
}
 
 
namespace b {
     export const Time: number = 1000
     export const fn = <T>(arg: T): T => {
        return arg
    }
    fn(Time)
}
 
a.Time
b.Time
```

### 嵌套命名空间
```ts
namespace a {
    export namespace b {
        export class Vue {
            parameters: string
            constructor(parameters: string) {
                this.parameters = parameters
            }
        }
    }
}
 
let v = a.b.Vue
 
new v('1')
```

### 抽离命名空间
> a.ts
```ts
export namespace V {
    export const a = 1
}
``` 
> b.ts
```ts
import {V} from '../observer/index'
 
console.log(V);  //{a:1}
```

### 简化命名空间
```ts
namespace A  {
    export namespace B {
        export const C = 1
    }
}
 
import X = A.B.C
 
console.log(X);
```

### 合并命名空间
> 重名的命名空间会合并
```ts
namespace S {
  export const s = 4
}

namespace S {
  export const m = 8
}

// 相当于
// namespace S {
//   export const s = 4
//   export const m = 8
// }

// S.m
// S.s

console.log(S); //{ s: 4, m: 8 }
```

### 三斜线指令
> 三斜线指令是包含单个XML标签的单行注释。 注释的内容会做为编译器指令使用。
> 三斜线指令仅可放在包含它的文件的最顶端。 一个三斜线指令的前面只能出现单行或多行注释，这包括其它的三斜线指令。 如果它们出现在一个语句或声明之后，那么它们会被当做普通的单行注释，并且不具有特殊的涵义。

**`/// <reference path="..." />`指令是三斜线指令中最常见的一种。 它用于声明文件间的 依赖。**
> 三斜线引用告诉编译器在编译过程中要引入的额外的文件。
> 你也可以把它理解能import，它可以告诉编译器在编译过程中要引入的额外的文件

> 例如a.ts
```ts
namespace A {
    export const fn = () => 'a'
}
```

> b.ts
```ts
namespace A {
    export const fn2 = () => 'b'
}
```
> index.ts
> 引入之后直接可以使用变量A
```ts
///<reference path="./index2.ts" />
///<reference path="./index3.ts" />
 
 
console.log(A);
```

### 声明文件引入
> 例如，把 `/// <reference types="node" />`引入到声明文件，表明这个文件使用了 `@types/node/index.d.ts`里面声明的名字； 并且，这个包需要在编译阶段与声明文件一起被包含进来。
> 仅当在你需要写一个d.ts文件时才使用这个指令。

**注意事项：**
> 如果你在配置文件 配置了noResolve 或者自身调用自身文件会报错

## 声明文件d.ts
### 声明文件 declare  
> 当使用第三方库时，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能。

```ts
declare var 声明全局变量
declare function 声明全局方法
declare class 声明全局类
declare enum 声明全局枚举类型
declare namespace 声明（含有子属性的）全局对象
interface 和 type 声明全局类型
/// <reference /> 三斜线指令
```

例如我们有一个express 和 axios
发现express 报错了
让我们去下载他的声明文件

`npm install @types/node -D`

那为什么axios 没有报错

我们可以去`node_modules` 下面去找`axios` 的`package json`

发现axios已经指定了声明文件 所以没有报错可以直接用
通过语法declare 暴露我们声明的axios 对象
**`declare  const axios: AxiosStatic;`**

如果有一些第三方包确实没有声明文件我们可以自己去定义
名称.d.ts 创建一个文件去声明
例如express.d.ts
**`declare  const express: ()=> any;`**
关于这些第三发的声明文件包都收录到了 [npm js](https://www.npmjs.com/~types?activeTab=packages/])

## Mixins混入
> TypeScript 混入 Mixins 其实vue也有mixins这个东西 你可以把他看作为合并
### 1. 对象混入
> **可以使用es6的Object.assign 合并多个对象**

此时 people 会被推断成一个交差类型 Name & Age & sex;

```ts
interface Name {
    name: string
}
interface Age {
    age: number
}
interface Sex {
    sex: number
}
 
let people1: Name = { name: "小满" }
let people2: Age = { age: 20 }
let people3: Sex = { sex: 1 }
 
const people = Object.assign(people1,people2,people3)
```

### 2. 类的混入
> 首先声明两个mixins类 （严格模式要关闭不然编译不过）
```ts
class A {
    type: boolean = false;
    changeType() {
        this.type = !this.type
    }
}
 
 
class B {
    name: string = '张三';
    getName(): string {
        return this.name;
    }
}
```

> 下面创建一个类，结合了这两个mixins
> **首先应该注意到的是，没使用extends而是使用implements。 把类当成了接口**
> 我们可以这么做来达到目的，为将要mixin进来的属性方法创建出占位属性。 这告诉编译器这些成员在运行时是可用的。 这样就能使用mixin带来的便利，虽说需要提前定义一些占位属性

```ts
class C implements A,B{
    type:boolean
    changeType:()=>void;
    name: string;
    getName:()=> string
}
```

> 最后，创建这个帮助函数，帮我们做混入操作。 它会遍历mixins上的所有属性，并复制到目标上去，把之前的占位属性替换成真正的实现代码

**Object.getOwnPropertyNames()可以获取对象自身的属性，除去他继承来的属性，**
**对它所有的属性遍历，它是一个数组，遍历一下它所有的属性名**
```ts
Mixins(C, [A, B])
function Mixins(curCls: any, itemCls: any[]) {
    itemCls.forEach(item => {
        Object.getOwnPropertyNames(item.prototype).forEach(name => {
            curCls.prototype[name] = item.prototype[name]
        })
    })
}
```

## 装饰器Decorator
> **Decorator 装饰器是一项实验性特性，在未来的版本中可能会发生改变**
> 它们不仅增加了代码的可读性，清晰地表达了意图，而且提供一种方便的手段，增加或修改类的功能
> 若要启用实验性的装饰器特性，你必须在命令行或tsconfig.json里启用编译器选项
```json
{
  "compilerOptions": {
    "experimentalDecorators": true,
  }
}
```

### 装饰器
> 装饰器是一种特殊**类型的声明**，它能够被附加到`类声明`，`方法`，`访问符`，`属性或参数`上。

#### 1.首先定义一个类
```ts
class A {
    constructor() {
 
    }
}
```

#### 2.定义一个`类装饰器`函数 他会把ClassA的构造函数传入你的watcher函数当做第一个参数
```ts
const watcher: ClassDecorator = (target: Function) => {
    target.prototype.getParams = <T>(params: T):T => {
        return params
    }
}
```
#### 3.使用的时候 直接通过@函数名使用
```ts
@watcher
class A {
    constructor() {
 
    }
}
```
#### 4.验证
```ts
const a = new A();
console.log((a as any).getParams('123'));
```

### 装饰器工厂
> 其实也就是一个高阶函数 外层的函数接受值 里层的函数最终接受类的构造函数
```ts
const watcher = (name: string): ClassDecorator => {
    return (target: Function) => {
        target.prototype.getParams = <T>(params: T): T => {
            return params
        }
        target.prototype.getOptions = (): string => {
            return name
        }
    }
}
 
@watcher('name')
class A {
    constructor() {
 
    }
}
 
const a = new A();
console.log((a as any).getParams('123'));
```

### 装饰器组合
> 就是可以使用多个装饰器
```ts
const watcher = (name: string): ClassDecorator => {
    return (target: Function) => {
        target.prototype.getParams = <T>(params: T): T => {
            return params
        }
        target.prototype.getOptions = (): string => {
            return name
        }
    }
}
const watcher2 = (name: string): ClassDecorator => {
    return (target: Function) => {
        target.prototype.getNames = ():string => {
            return name
        }
    }
}
 
@watcher2('name2')
@watcher('name')
class A {
    constructor() {
 
    }
}
 
 
const a = new A();
console.log((a as any).getOptions());
console.log((a as any).getNames());
```

### 方法装饰器
> 返回三个参数
> 1. 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
> 2. 成员的名字。
> 3. 成员的属性描述符。

> 返回参数
```ts
[
  {},
  'setParasm',
  {
    value: [Function: setParasm],
    writable: true,
    enumerable: false,
    configurable: true
  }
]
```

```ts
const met:MethodDecorator = (...args) => {
    console.log(args);
}
 
class A {
    constructor() {
 
    }
    @met
    getName ():string {
        return '小满'
    }
}
 
 
const a = new A();
```

### 属性装饰器
> 返回两个参数
> 1. 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
> 2. 属性的名字。

> 返回参数
```ts
[ {}, 'name', undefined ]
```

```ts
const met:PropertyDecorator = (...args) => {
    console.log(args);
}
 
class A {
    @met
    name:string
    constructor() {
 
    }
   
}
 
 
const a = new A();
```

### 参数装饰器
> 返回三个参数
> 1. 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
> 2. 成员的名字。
> 3. 参数在函数参数列表中的索引。

> 返回参数
```ts
[ {}, 'setParasm', 0 ]
```

```ts
const met:ParameterDecorator = (...args) => {
    console.log(args);
}
 
class A {
    constructor() {
 
    }
    setParasm (@met name:string = '213') {
 
    }
}
 
 
const a = new A();
```

## Rollup构建TS项目
### 安装依赖
> 1. 全局安装rollup npm install rollup-g
> 2. 安装TypeScript   npm install typescript -D
> 3. 安装TypeScript 转换器 npm install rollup-plugin-typescript2 -D
> 4. 安装代码压缩插件 npm install rollup-plugin-terser -D
> 5. 安装rollupweb服务 npm install rollup-plugin-serve -D
> 6. 安装热更新 npm install rollup-plugin-livereload -D
> 7. 引入外部依赖 npm install rollup-plugin-node-resolve -D
> 8. 安装配置环境变量用来区分本地和生产  npm install cross-env -D
> 9. 替换环境变量给浏览器使用 npm install rollup-plugin-replace -D

**用`rollup`打包时因为`webpack`打包体积太大，而`rollup`打包体积较小**
### 配置json文件

```sh
$ npm init -y
```

```json
{
  "name": "rollupTs",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "cross-env NODE_ENV=development  rollup -c -w",
    "build":"cross-env NODE_ENV=produaction  rollup -c"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "cross-env": "^7.0.3",
    "rollup-plugin-livereload": "^2.0.5",
    "rollup-plugin-node-resolve": "^5.2.0",
    "rollup-plugin-replace": "^2.2.0",
    "rollup-plugin-serve": "^1.1.0",
    "rollup-plugin-terser": "^7.0.2",
    "rollup-plugin-typescript2": "^0.31.1",
    "typescript": "^4.5.5"
  }
}
```

### 配置rollup文件
```js
console.log(process.env);
import ts from 'rollup-plugin-typescript2'
import path from 'path'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import { terser } from 'rollup-plugin-terser'
import resolve from 'rollup-plugin-node-resolve'
import repacle from 'rollup-plugin-replace'
 
const isDev = () => {
    return process.env.NODE_ENV === 'development'
}
export default {
    input: "./src/main.ts",
    output: {
        file: path.resolve(__dirname, './lib/index.js'),
        format: "umd",
        sourcemap: true
    },
 
    plugins: [
        ts(),
        terser({
            compress: {
                drop_console: !isDev()
            }
        }),
        repacle({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        resolve(['.js', '.ts']),
        isDev() && livereload(),
        isDev() && serve({
            open: true,
            openPage: "/public/index.html"
        })
    ]
}
```

### 配置tsconfig.json
```json
{
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig.json to read more about this file */
 
    /* Projects */
    // "incremental": true,                              /* Enable incremental compilation */
    // "composite": true,                                /* Enable constraints that allow a TypeScript project to be used with project references. */
    // "tsBuildInfoFile": "./",                          /* Specify the folder for .tsbuildinfo incremental compilation files. */
    // "disableSourceOfProjectReferenceRedirect": true,  /* Disable preferring source files instead of declaration files when referencing composite projects */
    // "disableSolutionSearching": true,                 /* Opt a project out of multi-project reference checking when editing. */
    // "disableReferencedProjectLoad": true,             /* Reduce the number of projects loaded automatically by TypeScript. */
 
    /* Language and Environment */
    "target": "es5",                                  /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */
    // "lib": [],                                        /* Specify a set of bundled library declaration files that describe the target runtime environment. */
    // "jsx": "preserve",                                /* Specify what JSX code is generated. */
    // "experimentalDecorators": true,                   /* Enable experimental support for TC39 stage 2 draft decorators. */
    // "emitDecoratorMetadata": true,                    /* Emit design-type metadata for decorated declarations in source files. */
    // "jsxFactory": "",                                 /* Specify the JSX factory function used when targeting React JSX emit, e.g. 'React.createElement' or 'h' */
    // "jsxFragmentFactory": "",                         /* Specify the JSX Fragment reference used for fragments when targeting React JSX emit e.g. 'React.Fragment' or 'Fragment'. */
    // "jsxImportSource": "",                            /* Specify module specifier used to import the JSX factory functions when using `jsx: react-jsx*`.` */
    // "reactNamespace": "",                             /* Specify the object invoked for `createElement`. This only applies when targeting `react` JSX emit. */
    // "noLib": true,                                    /* Disable including any library files, including the default lib.d.ts. */
    // "useDefineForClassFields": true,                  /* Emit ECMAScript-standard-compliant class fields. */
 
    /* Modules */
    "module": "ES2015",                                /* Specify what module code is generated. */
    // "rootDir": "./",                                  /* Specify the root folder within your source files. */
    // "moduleResolution": "node",                       /* Specify how TypeScript looks up a file from a given module specifier. */
    // "baseUrl": "./",                                  /* Specify the base directory to resolve non-relative module names. */
    // "paths": {},                                      /* Specify a set of entries that re-map imports to additional lookup locations. */
    // "rootDirs": [],                                   /* Allow multiple folders to be treated as one when resolving modules. */
    // "typeRoots": [],                                  /* Specify multiple folders that act like `./node_modules/@types`. */
    // "types": [],                                      /* Specify type package names to be included without being referenced in a source file. */
    // "allowUmdGlobalAccess": true,                     /* Allow accessing UMD globals from modules. */
    // "resolveJsonModule": true,                        /* Enable importing .json files */
    // "noResolve": true,                                /* Disallow `import`s, `require`s or `<reference>`s from expanding the number of files TypeScript should add to a project. */
 
    /* JavaScript Support */
    // "allowJs": true,                                  /* Allow JavaScript files to be a part of your program. Use the `checkJS` option to get errors from these files. */
    // "checkJs": true,                                  /* Enable error reporting in type-checked JavaScript files. */
    // "maxNodeModuleJsDepth": 1,                        /* Specify the maximum folder depth used for checking JavaScript files from `node_modules`. Only applicable with `allowJs`. */
 
    /* Emit */
    // "declaration": true,                              /* Generate .d.ts files from TypeScript and JavaScript files in your project. */
    // "declarationMap": true,                           /* Create sourcemaps for d.ts files. */
    // "emitDeclarationOnly": true,                      /* Only output d.ts files and not JavaScript files. */
      "sourceMap": true,                                /* Create source map files for emitted JavaScript files. */
    // "outFile": "./",                                  /* Specify a file that bundles all outputs into one JavaScript file. If `declaration` is true, also designates a file that bundles all .d.ts output. */
    // "outDir": "./",                                   /* Specify an output folder for all emitted files. */
    // "removeComments": true,                           /* Disable emitting comments. */
    // "noEmit": true,                                   /* Disable emitting files from a compilation. */
    // "importHelpers": true,                            /* Allow importing helper functions from tslib once per project, instead of including them per-file. */
    // "importsNotUsedAsValues": "remove",               /* Specify emit/checking behavior for imports that are only used for types */
    // "downlevelIteration": true,                       /* Emit more compliant, but verbose and less performant JavaScript for iteration. */
    // "sourceRoot": "",                                 /* Specify the root path for debuggers to find the reference source code. */
    // "mapRoot": "",                                    /* Specify the location where debugger should locate map files instead of generated locations. */
    // "inlineSourceMap": true,                          /* Include sourcemap files inside the emitted JavaScript. */
    // "inlineSources": true,                            /* Include source code in the sourcemaps inside the emitted JavaScript. */
    // "emitBOM": true,                                  /* Emit a UTF-8 Byte Order Mark (BOM) in the beginning of output files. */
    // "newLine": "crlf",                                /* Set the newline character for emitting files. */
    // "stripInternal": true,                            /* Disable emitting declarations that have `@internal` in their JSDoc comments. */
    // "noEmitHelpers": true,                            /* Disable generating custom helper functions like `__extends` in compiled output. */
    // "noEmitOnError": true,                            /* Disable emitting files if any type checking errors are reported. */
    // "preserveConstEnums": true,                       /* Disable erasing `const enum` declarations in generated code. */
    // "declarationDir": "./",                           /* Specify the output directory for generated declaration files. */
    // "preserveValueImports": true,                     /* Preserve unused imported values in the JavaScript output that would otherwise be removed. */
 
    /* Interop Constraints */
    // "isolatedModules": true,                          /* Ensure that each file can be safely transpiled without relying on other imports. */
    // "allowSyntheticDefaultImports": true,             /* Allow 'import x from y' when a module doesn't have a default export. */
    "esModuleInterop": true,                             /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables `allowSyntheticDefaultImports` for type compatibility. */
    // "preserveSymlinks": true,                         /* Disable resolving symlinks to their realpath. This correlates to the same flag in node. */
    "forceConsistentCasingInFileNames": true,            /* Ensure that casing is correct in imports. */
 
    /* Type Checking */
    "strict": true,                                      /* Enable all strict type-checking options. */
    // "noImplicitAny": true,                            /* Enable error reporting for expressions and declarations with an implied `any` type.. */
    // "strictNullChecks": true,                         /* When type checking, take into account `null` and `undefined`. */
    // "strictFunctionTypes": true,                      /* When assigning functions, check to ensure parameters and the return values are subtype-compatible. */
    // "strictBindCallApply": true,                      /* Check that the arguments for `bind`, `call`, and `apply` methods match the original function. */
    // "strictPropertyInitialization": true,             /* Check for class properties that are declared but not set in the constructor. */
    // "noImplicitThis": true,                           /* Enable error reporting when `this` is given the type `any`. */
    // "useUnknownInCatchVariables": true,               /* Type catch clause variables as 'unknown' instead of 'any'. */
    // "alwaysStrict": true,                             /* Ensure 'use strict' is always emitted. */
    // "noUnusedLocals": true,                           /* Enable error reporting when a local variables aren't read. */
    // "noUnusedParameters": true,                       /* Raise an error when a function parameter isn't read */
    // "exactOptionalPropertyTypes": true,               /* Interpret optional property types as written, rather than adding 'undefined'. */
    // "noImplicitReturns": true,                        /* Enable error reporting for codepaths that do not explicitly return in a function. */
    // "noFallthroughCasesInSwitch": true,               /* Enable error reporting for fallthrough cases in switch statements. */
    // "noUncheckedIndexedAccess": true,                 /* Include 'undefined' in index signature results */
    // "noImplicitOverride": true,                       /* Ensure overriding members in derived classes are marked with an override modifier. */
    // "noPropertyAccessFromIndexSignature": true,       /* Enforces using indexed accessors for keys declared using an indexed type */
    // "allowUnusedLabels": true,                        /* Disable error reporting for unused labels. */
    // "allowUnreachableCode": true,                     /* Disable error reporting for unreachable code. */
 
    /* Completeness */
    // "skipDefaultLibCheck": true,                      /* Skip type checking .d.ts files that are included with TypeScript. */
    "skipLibCheck": true                                 /* Skip type checking all .d.ts files. */
  }
}
```

## webpack构建TS项目
### 安装依赖
> 安装webpack   npm install webpack -D
> webpack4以上需要 npm install  webpack-cli -D,否则不需要
> 编译TS  npm install ts-loader -D
> TS环境 npm install typescript -D
> 热更新服务 npm install  webpack-dev-server -D,自带浏览器环境变量的
> HTML模板 npm install html-webpack-plugin -D

### 配置json文件

```sh
$ npm init -y
```

```json
{
  "name": "study",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "webpack-dev-server",
    "build": "webpack"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "html-webpack-plugin": "^5.5.0",
    "ts-loader": "^9.4.2",
    "typescript": "^4.9.4",
    "webpack": "^5.75.0",
    "webpack-cli": "^5.0.1",
    "webpack-dev-server": "^4.11.1"
  }
}
```

### 配置文件 webpack.config.js
```js
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: "./src/index.ts",
    mode: "development",
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "index.js"
    },
    stats: "none",
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader"
            }
        ]
    },
    devServer: {
        port: 1988,
        proxy: {}
    },
    plugins: [
        new htmlWebpackPlugin({
            template: "./public/index.html"
        })
    ]
}
```
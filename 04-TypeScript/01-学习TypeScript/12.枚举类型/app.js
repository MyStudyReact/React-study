// const fn = (type) => {
//   if (type === 'red') {
//     return 0
//   }
//   if (type === 'greeen') {
//     return 1
//   }
//   if (type === 'blue') {
//     return 2
//   }
// }
// let obj = {
//   red:0,
//   green:1,
//   blue:2
// }
// 默认是0开始
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
/**
 * 数字枚举
 */
// 增长枚举
var ColorNum1;
(function (ColorNum1) {
    ColorNum1[ColorNum1["red"] = 1] = "red";
    ColorNum1[ColorNum1["green"] = 2] = "green";
    ColorNum1[ColorNum1["blue"] = 3] = "blue";
})(ColorNum1 || (ColorNum1 = {}));
// 自定义枚举
var ColorNum2;
(function (ColorNum2) {
    ColorNum2[ColorNum2["red"] = 1] = "red";
    ColorNum2[ColorNum2["green"] = 5] = "green";
    ColorNum2[ColorNum2["blue"] = 6] = "blue";
})(ColorNum2 || (ColorNum2 = {}));
/**
 * 字符串枚举
 *
 * 如果其中一个不去定义是有问题的 枚举成员必须具有初始化表达式。
 */
var ColorStr1;
(function (ColorStr1) {
    ColorStr1["red"] = "red";
    // green, //枚举成员必须具有初始化表达式。
    ColorStr1["green"] = "green";
    ColorStr1["blue"] = "blue";
})(ColorStr1 || (ColorStr1 = {}));
/**
 * 异构枚举
 *
 * 不到万不得已不去穿插类型
 *
 * 如果中间没有默认值，且上面类型为字符串就有问题  枚举成员必须具有初始化表达式。
 */
var Types;
(function (Types) {
    Types[Types["aaa"] = 0] = "aaa";
    Types["no"] = "no";
    // bbb, //枚举成员必须具有初始化表达式。
    Types[Types["yes"] = 1] = "yes";
})(Types || (Types = {}));
console.log(Types.yes, Types.no);
var obj = {
    // red:1,
    red: Types.yes
};
/**
 * const枚举
 *
 *  var/let 不行
 * 只能 const
 *
 * 不用const 编译的是对象
 * 用const 编译的是对应的值
 * 有点像解构
 */
var Types1;
(function (Types1) {
    Types1[Types1["success"] = 0] = "success";
    Types1[Types1["fail"] = 1] = "fail";
})(Types1 || (Types1 = {}));
var code = 0;
if (code === Types1.success) {
}
var code1 = 0;
if (code1 === 0 /* Types2.success */) {
}
/**
 * 反向映射
 */
var Types3;
(function (Types3) {
    Types3[Types3["success"] = 456] = "success";
    Types3["error"] = "777";
})(Types3 || (Types3 = {}));
var success = Types3.success;
// 这就是他的反向映射
var key = Types3[success];
console.log("value----".concat(success), "key-----".concat(key));
var error = Types3.error;
// 这就是他的反向映射
var key1 = Types3[error];
console.log("value----".concat(error), "key-----".concat(key1));

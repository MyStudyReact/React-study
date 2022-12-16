/**
 * ECMAScript 的内置对象
 * Boolean、Number、string、RegExp、Date、Error
 */
var regexp = /\w\d\s/;
var date = new Date();
var date1 = new Date().getTime();
var error = new Error('错误');
/**
 * DOM 和 BOM 的内置对象
 * Document、HTMLElement、Event、NodeList 等
 */
var list = document.querySelectorAll('#list li');
var div = document.querySelector('div');
var body = document.body;
console.log({ list: list, body: body, div: div });
document.addEventListener('click', function (e) {
    console.log(e);
});
/**
 * 定义Promise
 */
function promise() {
    return new Promise(function (resolve, reject) {
        resolve(1);
    });
}
promise().then(function (res) {
    console.log(res);
});

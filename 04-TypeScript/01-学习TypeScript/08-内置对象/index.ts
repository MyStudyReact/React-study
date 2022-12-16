/**
 * ECMAScript 的内置对象
 * Boolean、Number、string、RegExp、Date、Error
 */
const regexp: RegExp = /\w\d\s/

const date: Date = new Date()
const date1: number = new Date().getTime()

const error: Error = new Error('错误')

/**
 * DOM 和 BOM 的内置对象
 * Document、HTMLElement、Event、NodeList 等
 */

const list: NodeList = document.querySelectorAll('#list li')
const div: HTMLDivElement = document.querySelector('div')
const body: HTMLElement = document.body
console.log({ list, body, div });


document.addEventListener('click', (e: MouseEvent) => {
  console.log(e);
})

/**
 * 定义Promise
 */
function promise(): Promise<number> {
  return new Promise<number>((resolve, reject) => {
    resolve(1)
  })
}
promise().then(res => {
  console.log(res);
})
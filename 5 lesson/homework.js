// 1 - створити функцію яка обчислює та повертає площу прямокутника висотою

// let s = function (a,b) {
//     let c = console.log(a * b)
//     return c;
// }
// s(2,3)

// 2 - створити функцію яка обчислює та повертає площу кола

// let s = function (r,pi) {
//     let c = console.log(2 * r * pi)
//     return c;
// }
// s(5,3.14)

// 3 - створити функцію яка обчислює та повертає площу циліндру

// let s = function (r,pi,h) {
//     let c = console.log(2 * r * pi * h)
//     return c;
// }
// s(5,3.14,14)

// 4 - створити функцію яка приймає масив та виводить кожен його елемент

// let s = function (argumen) {
//     for (const i of argumen) {
//         console.log(i)
//     }
// }
// s([3,65,23,65,1])

// 5 - створити функцію яка  створює параграф з текстом. Текст задати через аргумент

// let s = function (argumen) {
//     for (const i of argumen) {
//         console.log(i)
//     }
// }
// s(["text"])

// 6 - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let text = function (a,b,c) {
//     document.write('<ul>')
//     document.write(`<li>${a}</li>`)
//     document.write(`<li>${b}</li>`)
//     document.write(`<li>${c}</li>`)
//     document.write('</ul>')
// }
// text('ав','fddf','fdfd');

// 7 - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let text = function (a,number) {
//     document.write('<ul>')
//     for (let i = 0; i < number; i++) {
//         const aElement = a[i];
//         document.write(`<li>${a}</li>`)
//     }
//     document.write('</ul>')
// }
// text('ав',3);

// 8 - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let math = function  () {
//     let arr = ['test',123,true]
//     for (const arrElement of arr) {
//         console.log(arrElement)
//     }
// }
// math();

// 9 - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let users = function () {
//     document.write(user.id)
//     document.write('<br>')
//     document.write(user.name)
//     document.write('<br>')
//     document.write(user.age)
//     document.write('<p>')
//
//
// }
// let user = {
//     id: 0,
//     name:'Oleh',
//     age:19,
// }
// users()
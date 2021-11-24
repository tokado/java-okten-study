// 1 - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// let numb = function (a,b,c) {
//     if (a < b && a < c) {
//     console.log(a)
//         return a;
//     }
//      else if (a > b && b < c) {
//      console.log(b)
//         return b;
//     }
//      else if (c < b && a > c) {
//      console.log(c)
//         return c;
//     }
// }
// numb(1,2,3);

// 2 - створити функцію яка приймає три числа та виводить найбільше.

// let numb = function (a,b,c) {
//     if (a > b && a > c) {
//         console.log(a)
//         return a;
//     }
//     else if (a < b && b > c) {
//         console.log(b)
//         return b;
//     }
//     else if (c > b && a < c) {
//         console.log(c)
//         return c;
//     }
// }
// numb(1,2,3);

// 3 - - створити функцію яка повертає найбільше число з масиву

// let max = function () {
//     let arr = [22,4,7];
//     let sum = Math.max(...arr);
//     document.write(sum)
// }
// max()

// 4 - створити функцію яка повертає найменьше число з масиву

// let min = function () {
//     let arr = [22,4,7];
//     let sum = Math.min(...arr);
//     document.write(sum)
// }
// min()

// 5 - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let min = function () {
//     let arr = [22,4,7];
//     let sum = (arr[0]+arr[1]+arr[2]);
//     document.write(sum)
// }
// min()

// 6 - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let min = function () {
//     let arr = [22,4,7];
//     let sum = ((arr[0]+arr[1]+arr[2])/3);
//     document.write(sum)
// }
// min()

// 7 - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// let random = function (max) {
//     let sum = Math.round(Math.random()*max)
//     document.write(sum)
// }
// random(100);

// 8 - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// let math = function () {
//     let arr = [1,2,3];
//     let arr_2 = arr.reverse();
//     document.write(arr_2);
// }
// math()

// 9 - створити функцію яка заповнює масив рандомними числами

// let random = function (max,arr) {
//     for (let i = 0; i < arr; i++) {
//         const sumElement = arr[i];
//         document.write(`<br>`)
//         let sum = Math.round(Math.random() * max)
//         document.write(sum)
//
//     }
// }
// random(100,10);


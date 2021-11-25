// - Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'
// - Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'
// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let src1 = 'hello world';
// let src2 = 'lorem ipsum';
// let src3 = 'javascript is cool';
// let leight1 = src1.length;
// let leight2 = src2.length;
// let leight3 = src3.length;
// console.log(leight1)
// console.log(leight2)
// console.log(leight3)

// let src1 = 'hello world';
// let src2 = 'lorem ipsum';
// let src3 = 'javascript is cool';
// let toUpperCase1 = src1.toUpperCase();
// let toUpperCase2 = src2.toUpperCase();
// let toUpperCase3 = src3.toUpperCase();
// console.log(toUpperCase1);
// console.log(toUpperCase2);
// console.log(toUpperCase3);

// let src1 = 'HELLO WORLD';
// let src2 = 'LOREM IPSUM';
// let src3 = 'JAVASCRIPT IS COOL';
// let toLowerCase1 = src1.toLowerCase();
// let toLowerCase2 = src2.toLowerCase();
// let toLowerCase3 = src3.toLowerCase();
// console.log(toLowerCase1);
// console.log(toLowerCase2);
// console.log(toLowerCase3);

// let src1 = ' dirty string   ';
// let t = src1.trim();
// console.log(t)

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
//     let arr = stringToarray(str);
//     document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

// function stringToarray () {
//     let str = 'Каждый охотник желает знать';
//     let arr = str.split(" ");
//     document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
//     console.log(arr)
// }
// stringToarray()

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//    let str = "HTML JavaScript PHP";
//    document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// function insert_dash () {
//     let str = "HTML JavaScript PHP";
//     let arr = str.replaceAll(" ","-");
//     document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
//     console.log(arr)
// }
// insert_dash()

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

// function text () {
//     let i = 'a'
//     let reg = i.toUpperCase()
//     console.log(reg)
// }
// text()

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

// function capitalize(str) {
//     return str.charAt().toUpperCase() + str.slice(1)
//
// }
// console.log(capitalize("cлово"))
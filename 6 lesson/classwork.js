// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// function name () {
//     let n1 = 'Harry..Potter'
//     let n2 = 'Ron---Whisley'
//     let n3 = 'Hermione__Granger'
//
//     let replace1 = n1.replace('..', ' ')
//     let replace2 = n2.replace('---', ' ')
//     let replace3 = n3.replace('__', ' ')
//     console.log(replace1, replace2, replace3)
// }
// name();

// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

// let random = function (max) {
//     let sum = Math.round(Math.random()*max)
//     document.write(sum)
// }
// random(100);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

// let random = function (max,time) {
//     let arr = [];
//     for (let i = 0; i < time; i++) {
//         arr.push(Math.round(Math.random()*max))
//         console.log(arr)
//     }
// }
// random(100,3);


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа

// let random = function (max,time) {
//     let arr = [];
//     for (let i = 0; i < time; i++) {
//         arr.push(Math.round(Math.random()*max))
//         arr.sort();
//         let filterArr = arr.filter(() => {
//             return arr[i] % 2 === 0;
//         })
//         console.log(filterArr)
//         console.log(arr)
//     }
// }
// random(100,3);

// - створити масив рандомних цілих числових значень
// (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві
// на стрінгові.

// let random = function (max,time) {
//     let arr = [];
//     let map;
//     for (let i = 0; i < time; i++) {
//         arr.push(Math.round(Math.random()*max))
//         arr.sort();
//         let map = arr.map(value => {
//             return arr + '';
//         })
//     }
//     console.log(map)
// }
// random(100,3);

let arr = [21,54,12];

function  map (i) {
    return i.map(
        function (number) {
        return number.toString();
    })
}
function sort (a) {
    return a.sort();
}

console.log((map(sort(arr))))

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

// function sortNums(numbers,direction) {
//     if (direction === 'ascending') {
//         return numbers.sort((a, b) => a - b)}
//         else if (direction === 'descending'){
//         return numbers.sort((a, b) => b - a)
//         }
// }
// sortNums([3,12,32],'descending') // [21,11,3]

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//  -- відсортувати його за спаданням за monthDuration
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//
// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// coursesAndDurationArray.sort((a,b)=> b.monthDuration - a.monthDuration);
// console.log(coursesAndDurationArray)
// coursesAndDurationArray.filter(c => c.monthDuration >= 5 );
// console.log(coursesAndDurationArray)


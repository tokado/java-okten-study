// - 1 створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи -
// складає або конкатенує їх між собою.

// function name (a,b){
//     console.log(arguments[0]);
//     console.log(arguments[1]);
//     console.log(arguments[0] + arguments[1]);
// }
// name(1,2,);

// 2 - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   EXAMPLE:
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]

// function arr () {
//     let arr_1 =  [1,2,3,4];
//     let arr_2 =  [2,3,4,5];
//     document.write(arr_1[0]+arr_2[0])
//     document.write(arr_1[1]+arr_2[1])
//     document.write(arr_1[2]+arr_2[2])
//     document.write(arr_1[3]+arr_2[3])
//     // for (const number_1 of arr_1) {
//     //     for (const number_2 of arr_2) {
//     //         console.log(number_1[0])
//     //
//     //     }
//     // }
//
// }
// arr()

// 3 - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
//   EXAMPLE:
//   [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

function users () {
    document.write(user.name)
    document.write('<p>')
    document.write(user.age)
    document.write('<p>')
    document.write(user.model)
    for (const userElement of user) {
        console.log(userElement)
    }

}
let user = {
    name:'Oleh',
    age: 19,
    model:'Kia Rio',
}
users()
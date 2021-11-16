// 1 --створити масив
/* let arr_string = ['first', 'second' , 'ten', ' car' , 'bike']
let arr_number = [1,2,3,4,5]
let arr = ['first', 'second' , 'ten', ' car' , 'bike', 4, 5, 34,12, 43, true, false]
console.log(arr)
console.log(arr_number)
console.log(arr_string) */
// 2
 /* let arr = [];
 arr[0] = 'string';
 arr[1] = 9;
 arr[2] = true;
console.log(arr) */

//3
/* let arr_string = ['first', 'second' , 'ten', ' car' , 'bike','first', 'second' , 'ten', ' car' , 'bike']
 for (let i = arr_string.length; i >= 0; i--) {
     document.write(`<div>${arr_string[i]} </div>`)
 } */
//4
/* let arr = []
let x = 0;
for (let i = 0; i < 10; i++) {
    arr[i] = x;
    x +=2;
    document.write(`<div>${arr[i]} </div>`)
} */
//5
/*
let arr = ['first', 'second' , 'ten', ' car' , 'bike','first', 'second' , 'ten', ' car' , 'bike','first', 'second' , 'ten', ' car' , 'bike','first', 'second' , 'ten', ' car' , 'bike']
let x = 0;
while  (x < arr.length) {
    document.write(`<h1>${arr[x]} </h1>`);
    x ++;
}
*/
// 14-19
/*
let info = [
    {name: 'vika', age: 16, status: true},
    {name: 'olya', age: 54, status: false},
    {name: 'oleh', age: 12, status: true},
    {name: 'miha', age: 42, status: false},
    {name: 'liza', age: 26, status: false},
    {name: 'jon', age: 23, status: true},
    {name: 'kio', age: 65, status: false},
    {name: 'maks', age: 106, status: true},
    {name: 'mike', age: 90, status: true},
    {name: 'nika', age: 14, status: false}
];
for (const user of info) {
    if(typeof user.name === 'string'){
        console.log('string')
    }
    if(typeof user.age === 'number'){
        console.log('number')
    }
    if(typeof user.age === 'boolean'){
        console.log('boolean')
    }

} */
// 21-26
/*
let arr = [];
arr[0] = 9;
arr[1] = true;
arr[2] = 'node';
arr[3] = false;
arr[4] = 87;
arr[5] = 'ind';
arr[6] = '----';
arr[7] = '$$$$';
arr[8] = true;
arr[9] = 90;
// console.log(arr);

for (let i = 0; i < arr.length; i++) {
    console.log(i)
    document.write(`<div>${i}</div>`)
} */
/* for (let i = 0; i < 100; i++) {
    console.log(i)
    document.write(`<div>${i}</div>`)
} */ /*
for (let i =i %2; i < 100; i++) {
    console.log(i)
} */
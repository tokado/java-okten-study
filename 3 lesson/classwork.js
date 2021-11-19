// 1. перебрати його циклом while
/*let arr = [2,17,13,6,22,31,45,66,100,-18];
let i = 0;
while (i < arr.length) {
    console.log(arr[i])
    i++
} */
// 2. перебрати його циклом for
/*let arr = [2,17,13,6,22,31,45,66,100,-18];
for (i=0; i < arr.length; i++) {
    console.log(arr[i])
} */
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// непарне так само тільки замість i%2 === 0 => i%2 + 1 ===0

/*let arr = [2,17,13,6,22,31,45,66,100,-18];
let i = 0;
while (i < arr.length ) {
    if (i%2 ===0) {
        console.log(arr[i])
        i++
    }
} */
// непарне
/*
let arr = [2,17,13,6,22,31,45,66,100,-18];
let i = 0;
while (i < arr.length ) {
    if (i%2+1 ===0) {
        console.log(arr[i])
        i++
    }
} */
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// непарне так само тільки замість i%2 === 0 => i%2 + 1 ===0
/*let arr = [2,17,13,6,22,31,45,66,100,-18];
for (i=0; i < arr.length; i++) {
    const dop = 0;
    if (dop%2 === 0) {
        console.log(arr[dop])
    }
}*/
// непарне
/*let arr = [2,17,13,6,22,31,45,66,100,-18];
for (i=0; i < arr.length; i++) {
    const dop = 0;
    if (dop%2 + 1 === 0) {
        console.log(arr[dop])
    }
}*/
// замінити кожне число кратне 3 на слово "okten"
/*let arr = [2,17,13,6,22,31,45,66,100,-18];
let i = 0;
while (i < arr.length ) {
    if (i%3 ===0) {
        console.log('okten')
        i++
    }
} */
/*let arr = [2,17,13,6,22,31,45,66,100,-18];
for (i=9; i < arr.length; i--) {
    console.log(arr[i])
}*/
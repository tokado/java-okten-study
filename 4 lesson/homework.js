// 1 - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
/* function cal (a,b) {
    console.log(a * b)
    return cal;
}
cal(5,4) */

// 2 - створити функцію яка обчислює та повертає площу кола з радіусом r

/*function cal (r,pi) {
    console.log(Math.pow(r,2) * pi)
    return cal;
}
cal(5,3.14) */

// 3 - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
/* function cal (r,h,pi) {
    console.log(2 * r * pi * h);
    return cal;
}
cal(5,3,3.14) */
// 4 - створити функцію яка приймає масив та виводить кожен його елемент

/*function arr(arr_w) {
    console.log(arr_w);
}
arr([1,4,5,8,43]); */

// 5 - створити функцію яка створює параграф з текстом. Текст задати через аргумент
/*function text(arr_w) {
    document.write('<p>arr_w</p>');
}
text(['text']); */

// 6 - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
    /*document.write('<ul>')
function text(arr_w) {
    document.write('<li>arr_w</li>')
}
text(['text1']);
text(['text2']);
text(['text3']);
    document.write('</ul>') */

// 8 - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
/*function math () {
    let arr = ['test',123,true]
    document.write('<li>')
    document.write(arr[1])
    document.write('</li>')
    document.write('<li>')
    document.write(arr[2])
    document.write('</li>')
    document.write('<li>')
    document.write(arr[3])
    document.write('</li>')
}
math() */
// 9 - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

function users () {
    let user = {
        id: 0,
        name:'Oleh',
        age:19,
    }
    document.write(user.id)
    document.write('<p>')
    document.write(user.name)
    document.write('<p>')
    document.write(user.age)


}
users()
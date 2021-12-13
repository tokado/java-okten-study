// - 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти.
// Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

fetch(`https://jsonplaceholder.typicode.com/posts?page=5`)
    .then(value => value.json())
    .then(value => {
        let user = value
        console.log(value)
        for (const userElement of user) {
            let main = document.createElement('div')
            main.classList.add('post')
            let h1 = document.createElement("h1")
            h1.innerText = userElement.title;
            main.innerText = userElement.body;
            document.body.append(h1,main)
        }

    })


// 2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
// Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

// fetch('https://jsonplaceholder.typicode.com/comments')
//     .then(value => value.json())
//     .then(value => {
//         let comment = value;
//         console.log(comment)
//         for (const commentElement of comment) {
//             let main = document.createElement('div')
//             let h1 = document.createElement("h1")
//             h1.innerText = commentElement.name;
//
//             document.body.append(h1)
//         }
//
//     })
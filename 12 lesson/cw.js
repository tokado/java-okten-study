// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
// зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

// fetch(`https://jsonplaceholder.typicode.com/posts`)
//     .then(value => value.json())
//     .then(value => {
//         let user = value
//         console.log(value)
//         for (const userElement of user) {
//             let main = document.createElement('div')
//             let btn = document.createElement('button')
//             btn.innerText = 'cleak';
//             btn.onclick = function () {
//                 main.innerText = userElement.body;
//             }
//             main.classList.add('post')
//             let h1 = document.createElement("h1")
//             h1.innerText = userElement.title;
//             document.body.append(h1,main,btn)
//         }
//
//     })
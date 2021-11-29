// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User (id,personName,surname,email,phone) {
//     this.id = id;
//     this.personName = personName;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// let user1 = new User(0,'Ivan','Popov','popov@gmail.com', '0684625412');
// let user2 = new User(1,'Pavlo','Popov','popov@gmail.com', '0684625412');
// let user3 = new User(2,'Petro','Popov','popov@gmail.com', '0684625412');
// let user4 = new User(3,'Ivan','Popov','popov@gmail.com', '0684625412');
// let user5 = new User(4,'Ivan','Popov','popov@gmail.com', '0684625412');
// let user6 = new User(5,'Ivan','Popov','popov@gmail.com', '0684625412');
// let user7 = new User(6,'Ivan','Popov','popov@gmail.com', '0684625412');
// let user8 = new User(7,'Ivan','Popov','popov@gmail.com', '0684625412');
// let user9 = new User(8,'Ivan','Popov','popov@gmail.com', '0684625412');
// let user10 = new User(9,'Sasha','Popov','popov@gmail.com', '0684625412');
// let arr = [user1,user2,user3,user4,user5,user6,user7,user8,user9,user10]
// console.log(arr)

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// function User (id,personName,surname,email,phone) {
//     this.id = id;
//     this.personName = personName;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// let user1 = new User(0,'Ivan','Popov','popov@gmail.com', '0684625412');
// let user2 = new User(1,'Pavlo','Popov','popov@gmail.com', '0684625412');
// let user3 = new User(2,'Petro','Popov','popov@gmail.com', '0684625412');
// let user4 = new User(3,'Ivan','Popov','popov@gmail.com', '0684625412');
// let user5 = new User(4,'Ivan','Popov','popov@gmail.com', '0684625412');
// let user6 = new User(5,'Ivan','Popov','popov@gmail.com', '0684625412');
// let user7 = new User(6,'Ivan','Popov','popov@gmail.com', '0684625412');
// let user8 = new User(7,'Ivan','Popov','popov@gmail.com', '0684625412');
// let user9 = new User(8,'Ivan','Popov','popov@gmail.com', '0684625412');
// let user10 = new User(9,'Sasha','Popov','popov@gmail.com', '0684625412');
// let arr = [user1,user2,user3,user4,user5,user6,user7,user8,user9,user10]
// let arr_id = [user1.id,user2.id,user3.id,user4.id,user5.id,user6.id,user7.id,user8.id,user9.id,user10.id]
// let filt = arr_id.filter(id => id % 2-1)
// console.log(filt)

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// function User (id,personName,surname,email,phone) {
//     this.id = id;
//     this.personName = personName;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// let user1 = new User(0,'Ivan','Popov','popov@gmail.com', '0684625412');
// let user2 = new User(1,'Pavlo','Popov','popov@gmail.com', '0684625412');
// let user7 = new User(6,'Ivan','Popov','popov@gmail.com', '0684625412');
// let user3 = new User(2,'Petro','Popov','popov@gmail.com', '0684625412');
// let user4 = new User(3,'Ivan','Popov','popov@gmail.com', '0684625412');
// let user5 = new User(4,'Ivan','Popov','popov@gmail.com', '0684625412');
// let user6 = new User(5,'Ivan','Popov','popov@gmail.com', '0684625412');
// let user8 = new User(7,'Ivan','Popov','popov@gmail.com', '0684625412');
// let user9 = new User(8,'Ivan','Popov','popov@gmail.com', '0684625412');
// let user10 = new User(9,'Sasha','Popov','popov@gmail.com', '0684625412');
// let arr = [user1,user2,user3,user4,user5,user6,user7,user8,user9,user10]
// let arr_id = [user1.id,user2.id,user5.id,user3.id,user4.id,user6.id,user7.id,user8.id,user9.id,user10.id]
// arr_id.sort();
// console.log(arr_id)

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// class Client {
//     constructor(id, personName, surname, email, phone, order) {
//         this.id = id;
//         this.personName = personName;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//     let user1 = new Client(0, 'Ivan', 'Popov', 'popov@gmail.com', '0684625412',43);
//     let user2 = new Client(1, 'Pavlo', 'Popov', 'popov@gmail.com', '0684625412',5);
//     let user7 = new Client(6, 'Ivan', 'Popov', 'popov@gmail.com', '0684625412',34);
//     let user3 = new Client(2, 'Petro', 'Popov', 'popov@gmail.com', '0684625412',65);
//     let user4 = new Client(3, 'Ivan', 'Popov', 'popov@gmail.com', '0684625412',43);
//     let user5 = new Client(4, 'Ivan', 'Popov', 'popov@gmail.com', '0684625412',32);
//     let user6 = new Client(5, 'Ivan', 'Popov', 'popov@gmail.com', '0684625412',6);
//     let user8 = new Client(7, 'Ivan', 'Popov', 'popov@gmail.com', '0684625412',8);
//     let user9 = new Client(8, 'Ivan', 'Popov', 'popov@gmail.com', '0684625412',43);
//     let user10 = new Client(9, 'Sasha', 'Popov', 'popov@gmail.com', '0684625412',4);
//     let arr = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10]
//     let arr_id = [user1.order, user2.order, user5.order, user3.order, user4.order, user6.order, user7.order, user8.order, user9.order, user10.order]
//     arr_id.sort((a,b) => a-b)
//     console.log(arr_id)

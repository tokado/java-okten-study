// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function car (model,manufacturer, year_of_manufacture, maximum_speed, engine_capacity)  {
//
//     this.model = model
//     this.manufacturer = manufacturer
//     this.year_of_manufacture = year_of_manufacture
//     this.maximum_speed = maximum_speed
//     this.engine_capacity = engine_capacity
// }
// car()
// function addDriver (personName,surname,year,yearDriver) {
//     this.personName = personName;
//     this.surname = surname;
//     this.year = year;
//     this.yearDriver = yearDriver;
// }
// addDriver()
//
//     let BMW = new car ("E60 M5","BMW",2000,230,249,)
//     let driver = new addDriver('Oleg','Popow',23,4)
//     function drive() {
//         console.log(`їдемо зі швидкістю ${BMW.maximum_speed} на годину`) //     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     }
//     drive(BMW)
//
//     function info() {
//         console.log(BMW,driver)
//     }
//     info()
//     function newSpeed(boost){
//         console.log(BMW.maximum_speed + boost)
//     }
//     newSpeed(50)
// function newValue(year){
//     console.log(BMW.year_of_manufacture + year)
// }
// newValue(20)



// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Car   {
//     constructor(model,manufacturer, year_of_manufacture, maximum_speed, engine_capacity) {
//         this.model = model
//         this.manufacturer = manufacturer
//         this.year_of_manufacture = year_of_manufacture
//         this.maximum_speed = maximum_speed
//         this.engine_capacity = engine_capacity
//     }
// }
//
// class AddDriver {
//     constructor(personName,surname,year,yearDriver) {
//         this.personName = personName;
//         this.surname = surname;
//         this.year = year;
//         this.yearDriver = yearDriver;
//     }
// }
//     let BMW = new Car ("E60 M5","BMW",2000,230,249)
//     let driver = new AddDriver('Oleg','Popow',23,4)
//     function drive() {
//         console.log(`їдемо зі швидкістю ${BMW.maximum_speed} на годину`) //     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     }
//     drive(BMW)
//
//     function info() {
//         console.log(BMW,driver)
//     }
//     info()
//     function newSpeed(boost){
//         console.log(BMW.maximum_speed + boost)
//     }
//     newSpeed(50)
// function newValue(year){
//     console.log(BMW.year_of_manufacture + year)
// }
// newValue(20)

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// class Popolushka {
//     constructor(namePerson,age,sizeLeg) {
//         this.namePerson = namePerson;
//         this.age = age;
//         this.sizeLeg = sizeLeg;
//     }
// }
// class Prinse {
//     constructor(name,find) {
//         this.name = name;
//         this.find = find;
//     }
// }
// let popelushka1 = new Popolushka('Ira',23,40)
// let popelushka2 = new Popolushka('Ira',23,40)
// let popelushka3 = new Popolushka('Ira',23,40)
// let popelushka4 = new Popolushka('Ira',23,40)
// let popelushka5 = new Popolushka('Ira',23,40)
// let popelushka6 = new Popolushka('Ira',23,40)
// let popelushka7 = new Popolushka('Ira',23,39)
// let popelushka8 = new Popolushka('Ira',23,40)
// let popelushka9 = new Popolushka('Ira',23,40)
// let popelushka10 = new Popolushka('Ira',23,41)
// let arr = [popelushka1,popelushka2,popelushka3,popelushka4,popelushka5,popelushka6,popelushka7,popelushka8,popelushka9,popelushka10]
// let prinse = new Prinse('Petro',41)
// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//    if (arrElement.sizeLeg === prinse.find) {
//        console.log(arrElement)
//    }
// }

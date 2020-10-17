'use strict';

// function User(name, age) {
//     this.name = name;
//     this.age = age;

//     this.say = function() {
//         console.log(`Имя пользователя: ${this.name}, возраст: ${this.age}`);
//     };
// }

// const taimas = new User('Taimas', 17);
// console.log(taimas.name);
// console.log(taimas.age);

// taimas.age = 20;
// taimas.name = 'ALek';

// taimas.say(); 


// function User(name, age) {
//     let userName = name;
//     let userAge = age;

//     this.say = function() {
//         console.log(`Имя пользователя ${userName}, возраст ${userAge}`);
//     };

//     this.getAge = function () {
//         return userAge;
//     };
//     this.setAge = function (age) {
//         if (typeof age === 'number' && age > 0 && age < 110) {
//             userAge = age;
//         } else {
//             console.log('Недопустимое значение');
//         }
//     };
// }

// const taimas = new User('Taimas', 18);
// console.log(taimas.userName);
// console.log(taimas.getAge());
// taimas.setAge(30);
// taimas.setAge(300);
// console.log(taimas.getAge());


// taimas.say();



// Инкапсуляция в классах

// class User {
//     constructor (name, age) {
//         this.name = name;
//         this._age = age;
//     }
//     #surname = "Urazgali"; // Приватное свойство 
   
//     say = () => {
//         console.log(`Имя пользователя ${this.name}${this.#surname}, возраст ${this.age}`)
//     }

//     get age() {
//         return this._age;
//     }
//     set age(age) {
//         if (typeof age === 'number' && age > 0 && age < 110) {
//             this._age = age;
//         } else {
//             console.log('Недопустимое значение');
//         }
//     }
// }

// const taimas = new User('Taimas', 18);
// console.log(taimas.surname);
// taimas.say();



// class Taimas {
//     constructor(name, age) {
//         this.age = age;
//         this.name = name;
//     }
//     #surname = 'Urazgali'

//     getSurname = () => {
//         return surname;
//     }
// }

// const tai = new Taimas;

// console.log(tai.getSurname());
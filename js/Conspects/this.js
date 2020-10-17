'use strict';

// function showThis () {
//     console.log(this);
// }
// showThis();

// function showThis (a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;  // Используются замыкание 
//     }
//     console.log(sum());
// } 
// showThis(4, 5);

//1) Обычная функция: this = window, но если стоит use strict = undefined 


const obj = {
    a: 20,
    b: 15,
    sum: function () {
        console.log(this);
    }
};
obj.sum();

//2) Если используется метод внутри объекта то контекст вызова всегда будет ссылаться на объект 
//Контекст у методов объекта будет сам объект
// Если внутри метода будет создана и вызвана функция, то она будет вести себя по правилу 1)


// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;

// }

// let taimas = new User('Taimas', 17);
// let grisha = new User('Grisha', 23);
// console.log(grisha.id);

//3) this в конструуторах и классах - это новый экземпляр объекта 


function sayName (surname) {
    console.log(this);
    console.log(this.name + ' ' + surname);

}

const user = {
    name: 'Josh',
    age: 35
};

sayName.call(user, 'Smith');
sayName.apply(user, ['Smith']);


function count (num) {
    return this*num;
}
const double = count.bind(5);
console.log(double(3));
console.log(double(13));

//4) Ручная привязка this: call, apply, bind 

const link = document.querySelector('.header__link');

link.addEventListener('click', function () {
    console.log(this);
});
//Контекст вызова событий будет всегда ссылаться на элемент,
// на котором происходит событие 


let numbObj = { 
    num: 30,
    sayNumber: function() {
        const say = () => {
            console.log(this);
            console.log(this.num);//Работает т.к ссылается на объект 
        }
        say();
    }
};
numbObj.sayNumber();
//Контекст вызова стрелочной функции всегда наследует контекст
// своего родиетлся в данном случае стр. функция 
//наслеует контекст метода объекта => будет выводить сам объект


const double2 = a => a * 2;
console.log(double2(4));

const link2 = document.querySelector('.header__link');

link.addEventListener('click', () => {
    console.log(this);
});// будет undefined т.к. стрелка не имеет своего контекста вызова 

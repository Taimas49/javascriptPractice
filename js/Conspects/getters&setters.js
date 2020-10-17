'use strict';

const persone = {
    name: 'ALex',
    age: 25,

    get userAge() {
        return this.age;
    },

    set userAge (num) { // Нужны и геттер и сеттер
        this.age = num;
    }
};

console.log(persone.userAge = 30);
console.log(persone.userAge);
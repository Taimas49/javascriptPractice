'use strict';

const number = 1;
(function(){
    let number = 2;
    console.log(number);
    console.log(number + 3);
}());                           // Анонимная самовызавающаяся функция 
console.log(number);

// Использование объектного интерфейса
const usr = (function(){
const private = function() {
    console.log('I am private');
};

return {
    sayHello: private    // Из анонимной функции вызываем объект 
};
}());

usr.sayHello();
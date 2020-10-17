'use strict';

// import {one, two} from './modulesES6';
// console.log(`${one} and ${two}`);


// Можно переименовать переменные

// import {one as first} from './modulesES6';
// console.log(first);



// С помощью звездочки можно импортировать все данные как большой объект 
// и затем обращаться к переменным, как к свойствам объекта через .
// import * as data from './modulesES6';

// console.log(`${data.one} and ${data.two}`);
// data.sayHi();


// Экспорт по умолчанию
// Экспортируется на прямую 
// Экспорт по умолчанию должен быть только 1
// import sayHi from './modulesES6';


// Можно последовательно подключать модули через тег script 
// <script type='module' src="js/sdfsd.js"></script> 
// <script type='module' src="js/asda.js"></script> 
//И еще нужно указывать расширение скриптов .js
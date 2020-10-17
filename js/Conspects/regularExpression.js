'use stricr';


// Регулярное выражение состоит из 2-х частей: Паттерн и флаги

// new RegExp('pattern', 'flags');

// /pattern/f


//Метод search

// const ans = prompt('Введите ваше имя');

// const reg = /n/ig;

/*
Флаги:
i - что-то найти вне зависимости от регистра 
g - пытаемся найти несколько вхождений 
m - многострочный режим 
Флаги можно комбинировать 

*/ 

// search всегда ищет первое совпадение
// console.log(ans.search(reg)); // выводит 1 т.к. первая позиция которая нашла букву n
// если ввести что-то, что не содержит букву n то результатом будет -1

//Метод match

//const reg = /n/ig;
// console.log(ans.match(reg)); // когда используем match получаем массив с информацией 
//После этого выведет массив со всеми найдеными результатами


// Метод Replace

// const pass = prompt('Password');
// Если в регулярном выражении в паттерне ставим точку, то мы берем все элементы которые попадут в строку
// console.log(pass.replace(/./g, '*')) // 1 аргумент что мы меняем, 2 аргументо на что мы заменяем 
// /\./g | \ означает что это просто точка, а не спец. символ 

// console.log('12-34-56'.replace(/-/g, ':'));
// // const first = prompt('Привет я программа которая после каждого слова вставляет слово запятую, введите текст');
// // console.log(first.replace(/ /g, ','));


// const ans = prompt('Введите ваше число');
// const reg = /\d/g;
// // Ищет паттерн в строке которую поместили в test()
// // console.log(reg.test(ans)); //Возвращает либо true либо false 
// console.log(ans.match(reg));

const str = 'My name is R2D2';
// console.log(str.match(/\w\d\w\d/ig)); // шаблон для буква-цифра-буква-цифра
console.log(str.match(/\D/ig));
// Классы
// \d -ищем цифры
// \w - ищем слова
// \s - ищем пробелы
// Обратные классы 
// \D - не числа
// \W - не буквы


// const offerSlider = document.querySelector('.offer__slider');
// const first = prompt('Ввудите длину');
// const second = promt('Введите ширину');
// function createWH () {
//     const a = first.match(reg).join('');
//     const b = second.match(reg).join('');
//     const ab =  document.createElement('div');
//     ab.style.height = `${a}`+'px';
//     ab.style.width = `${b}`+'px';
//     ab.style.color = 'black';
//     offerSlider.append(ab);
// }
'use strict';

// filter 

// const names = ['Anna', 'Ivan', 'Kirill', 'Voldemart'];

// const shortNames = names.filter(function(name){
//     return name.length < 5;
// });
// console.log(shortNames);

// map


// const answers = ['IvAn', 'ANNA', 'HellO'];

// const serverAnswer = answers.map(item => item.toLowerCase());

// console.log(serverAnswer);



// every/some
// every если все элементы массива подходят под условия то вернет true, а иначе false
//some если хотя бы один элемент подходит по условию, то возвращает true

// const some = [4, 'qwe', 'aafsda'];

// console.log(some.some((item) => typeof(item) === 'number'));

// console.log(some.every((item) => typeof(item) === 'number'));


//reduce 

// const arr = [4, 5, 1, 3, 2, 6];


//                             // 0       4
//                             // 4       5
//                             // 9       1
// const result = arr.reduce((sum, current) => {
//    return sum + current;
// });

//  console.log(result);


//  const str = ['apple', 'pear', 'plum'];

//  const veg = str.reduce((sum, current) => {
//     return `${sum},  ${current}`;
//  }, 3);
//  console.log(veg);


const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj)
.filter((item) => {
    return item[1] === 'persone';
})
.map(item => {
    return item[0];
});

console.log(newArr);


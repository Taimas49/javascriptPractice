'use strict';

const test = time => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), time);
    
    });
};

// test(1000).then(() => {
//     console.log('1000sm');
// });
// test(2000).then(() => {
//     console.log('2000sm');
// });

// Promise.all([test(1000), test(2000)]).then(() => {
//     console.log('All');
// });

Promise.race([test(1000), test(2000)]).then(() => {
    console.log('All');
});









































// console.log('Request data...');

// setTimeout(() => {
//     console.log('Preparing data...');
//     const backendData = {
//         server: 'AWS',
//         port: 2000,
//         status: 'working'
//     };

//     setTimeout(() => {
//         backendData.modified = true;
//         console.log('data recived' , backendData);
//     }, 2000);
// }, 2000);

// const prom = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         console.log('request data');
//         const backendData = {
//             server: 'AWS',
//             port: 2000,
//             status: 'working'
//         }; 
//         resolve(backendData);
//     }, 2000);
// });

// prom.then((data) => { //
//     return  new Promise((resolve, reject) => {
//         setTimeout(() => {
//             data.modified = true;
//             resolve(data);
//         }, 2000);
//     });
// }).then(clientData => {
//     console.log('Data received', clientData);
//     clientData.hello = 'hello';
//     return clientData;
// }).then(data => {
//     console.log(data);
// });


























































// console.log('Запрос данных');

// const req = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         console.log('Подготовка данных...');
//         const product = {
//             name: 'TV',
//             price: 2000
//         };
//        resolve(product);
//     }, 2000);
// });

// req.then((product) => {
//     return new Promise(function(resolve, reject) {
//         setTimeout(() => {
//             product.status = 'ordered';
//             resolve(product);
//         }, 2000);
//     });
// }).then(data => {
//     data.modify = true;
//     return data;
// }).then((data) => {
//     console.log(data);
// });
 

// Callback hell



const log = function (a, b, ...rest) {
    console.log(a, b, rest);
};

log('basic', 'rest', 'operatot', 'asda', 'eewtq');


function calcOrDouble(num, basis = 2) {
    // basis = basis || 2;
    console.log(num * basis);
}

calcOrDouble(2, 3);

   // const person = {
        //     name: 'Alex',
        //     tel: '+7444444',
        //     parents: {
        //         mom: 'Sasha',
        //         dad: 'Tom'
        //     }
        // };

        // // console.log(JSON.parse(JSON.stringify(person)));
        // const copyPerson = (JSON.parse(JSON.stringify(person))); // Глубокий клон объекта person

        //  copyPerson.parents.mom = 'Anna';
        //  console.log(person);
        //  console.log(copyPerson);

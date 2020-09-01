'use strict';

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log(`Hello ${this.name}`)
//     };
// }


// const ivan = new User('Ivan', 23);
// const dima = new User('Dima', 232);
// ivan.hello();

//КЛАССЫ

class Rectangle {
    constructor (height, width) {
        this.height = heigh;
        this.width =width;
    }
    calcArea() {
        return this.height * this.width;
    }
}


class ColoredRectanglesWithText extends Rectangle {
    constructor (width, height, text, bgColor) {
        super(width, height);
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Текст: ${this.text}, цвет ${this.bgColor}`);
    }
};

const div = new ColoredRectanglesWithText(50, 50, 'Hello', 'red');
div.showMyProps();
console.log(div.calcArea());



// const square = new Rectangle(30, 50);
// const square2 = new Rectangle(20, 100);
// console.log(square.calcArea());
// console.log(square2.calcArea());
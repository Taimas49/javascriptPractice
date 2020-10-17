function cards() {
    // getResources('http://localhost:3000/menu') // получение карточек с сервера
    //     .then(data => {
    //         data.forEach(({img, altimg, title, descr, price}) => {
    //             new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
    //         });
    // });
    class MenuCard {
        constructor (image, alt, title, description, price, parentSelector, ...classes) {
            this.image = image;
            this.alt = alt;
            this.classes = classes;
            this.title = title;
            this.parent = document.querySelector(parentSelector);
            this.description = description;
            this.price = price;
            
        }
        render() {
            const element = document.createElement('div');
                if (this.classes.length === 0) {
                    this.element = 'menu__item';
                    element.classList.add(this.element);
                } else {
                this.classes.forEach(className => {
                    element.classList.add(className);
                }); 
                }
            element.innerHTML = `
            <img src=${this.image} alt=${this.alt}>
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">${this.description}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
            </div>
            `;
            this.parent.append(element);
        }
        
    }

}

module.exports = cards;
require('es6-promise').polyfill();
import  tabs  from './modules/tabs';
import  modal  from './modules/modal';
import  timer  from './modules/timer';
import  cards  from './modules/cards';
import  forms  from './modules/forms';
import  slider  from './modules/slider';
import  calculator  from './modules/calculator';
import {openModal} from './modules/modal';
window.addEventListener('DOMContentLoaded', () => {

    const modalTimerId = setTimeout( () => openModal('.modal',modalTimerId), 10000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items','tabheader__item_active');
    modal('[data-modal]', '.modal', modalTimerId);
    timer('.timer', '2020-12-31');
    cards();
    forms('form', modalTimerId);
    slider({
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        previousArrow: '.offer__slider-prev',
        slide: '.offer__slide',
        wrapper: '.offer__slider-wrapper',
        totalCount: '#total',
        currentCounter: '#current',
        field: '.offer__slider-inner'
    });
    calculator();
});
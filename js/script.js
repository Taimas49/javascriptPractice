
window.addEventListener('DOMContentLoaded', () => {
    const tabsParent = document.querySelector('.tabheader__items');
    const tabs = document.querySelectorAll('.tabheader__item');
    const tabsContent = document.querySelectorAll('.tabcontent');
    // console.log(tabsContent);

    function hideTabContent () {
        tabsContent.forEach(item => {
            item.style.display = "none";
        });
        tabs.forEach( item => {
            item.classList.remove('tabheader__item_active');
        });
    }


    function showTabContent (i = 0) { // Если функ. вызывается без параметра то здесь можно задать default знач.
        tabsContent[i].style.display = "block";
        tabs[i].classList.add('tabheader__item_active');
    }
    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;
        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });


// Таймер 
const deadline = '2020-09-30';

function getTimeRemaining (endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date());
    const days = Math.floor(t / (1000 * 60 * 60 * 24));
    const hours = Math.floor((t / (1000 * 60 * 60 ) % 24));
    const minutes = Math.floor((t / 1000 / 60 ) % 60);
    const sec = Math.floor((t / 1000) % 60);

    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': sec
    };
}
function getZero (num) {
    if (num >= 0 && num < 10) {
        return `0${num}`;
    } else {
        return num;
    }
}

    function setClock (selector, endtime) {
        const timer = document.querySelector(selector);
        const days = timer.querySelector('#days');
        const hours = timer.querySelector('#hours');
        const minutes = timer.querySelector('#minutes');
        const seconds = timer.querySelector('#seconds');
        const timeInterval = setInterval(updateClock, 1000);
        updateClock();
        function updateClock () {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);
            if (t.total <= 0 ){
                clearInterval(timeInterval);
            }
        }
    }
    setClock('.timer', deadline);


    //Модальное окно 
    const modalWindow = document.querySelector('.modal');
    const modalTrigger = document.querySelectorAll('[data-modal]');
    // console.log(modalTrigger);

    function closeModal() {
        modalWindow.classList.add('hide');
        modalWindow.classList.remove('show');
        document.body.style.overflow = '';
    }
    function openModal () {
        modalWindow.classList.add('show');
        modalWindow.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId);
    }
    modalTrigger.forEach(item => {
        item.addEventListener('click', openModal);
    });

    modalWindow.addEventListener('click', (event) => {
        if (event.target === modalWindow || event.target.getAttribute('data-close') == '') {
            closeModal();
        }
    });



    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modalWindow.classList.contains('show')) {
            closeModal();
        }
    });
    const modalTimerId = setTimeout(openModal, 5000);

    function showModalByScroll () {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }
    window.addEventListener('scroll', showModalByScroll);
    const getResources = async (url) => {
        const res = await fetch(url);

        if (!res.ok) {
           throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    };
    //Метод 1 
    // getResources('http://localhost:3000/menu')
    //     .then(data => {
            // data.forEach(({img, altimg, title, descr, price}) => {
            //     new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
            // });
    //     });

    axios.get('http://localhost:3000/menu')
    .then(data => {
        console.log(data);
        data.data.forEach(({img, altimg, title, descr, price}) => {
            new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
        });
    });
    //Метод 1 
    // getResources('http://localhost:3000/menu')
    // .then(data => createCard(data));

    //     function createCard(data) {
    //         data.forEach(({img, altimg, title, descr, price}) => {
    //             const element = document.createElement('div');
    //             element.classList.add('menu__item');
    //             element.innerHTML = `
    //             <img src=${img} alt=${altimg}>
    //             <h3 class="menu__item-subtitle">${title}</h3>
    //             <div class="menu__item-descr">${descr}</div>
    //             <div class="menu__item-divider"></div>
    //             <div class="menu__item-price">
    //                 <div class="menu__item-cost">Цена:</div>
    //                 <div class="menu__item-total"><span>${price}</span> грн/день</div>
    //             </div>
    //             `;
        
    //             document.querySelector('.menu .container').append(element);
    //         });
    //     }
    
                
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
   



    
     // Формы 

     const forms = document.querySelectorAll('form');
        const message = { 
            loading: 'img/form/spinner.svg',
            success: 'Спасибо скоро мы с вами свяжемся',
            failure: 'Что-то пошло не так'
        };
        forms.forEach (item => {
            bindPostData(item);
        });

        const postData = async (url, data) => {
            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: data
            });

            return await res.json();
        };

     function bindPostData(form) {
         form.addEventListener('submit', (event) => {
                event.preventDefault();
                const statusMessage = document.createElement('img');
                statusMessage.src = message.loading;
                statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
                `;
                form.insertAdjacentElement('afterend', statusMessage);
                
                const formData = new FormData(form); // Всегда в верстке проверять name в фоормах 
                // fetch('server.php', {
                //     method: 'POST',
                //     headers: {
                //         'Content-type': 'application/json'
                //     },
                //     body: JSON.stringify(formData)
                //     })
                const json = JSON.stringify(Object.fromEntries(formData.entries()));

                    postData('http://localhost:3000/requests', json)
                    .then(formData => {
                        console.log(formData);
                        showThanksModal(message.success);
                        form.reset();
                        statusMessage.remove();
                    }).catch(() => {
                        showThanksModal(message.failure);
                    }).finally(() => {
                        form.reset();
                    });
                  
           });
     }

     function showThanksModal(message) {
         const prevModalDialog = document.querySelector('.modal__dialog');
         prevModalDialog.classList.add('hide');
         openModal();
         const thanksModal = document.createElement('div');
         thanksModal.classList.add('modal__dialog');
         thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>&times;</div>
                <div class="modal__title">${message}</div>
            </div>
         `;

         document.querySelector('.modal').append(thanksModal);
         setTimeout(() => {
             thanksModal.remove();
             prevModalDialog.classList.add('show');
             prevModalDialog.classList.remove('hide');
             closeModal();
         }, 4000);
     }


     //slider

    const sliderPrev = document.querySelector('.offer__slider-prev');
    const sliderNext = document.querySelector('.offer__slider-next');
    const slides = document.querySelectorAll('.offer__slide');
    const slidesWrapper = document.querySelector('.offer__slider-wrapper');
    const slidesField = document.querySelector('.offer__slider-inner');
    const width = window.getComputedStyle(slidesWrapper, null).width;
    const total = document.querySelector('#total');
    const current = document.querySelector('#current');
    const offerSlider = document.querySelector('.offer__slider');
    let slideIndex = 1;
    let offset = 0;

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
        current.textContent = `0${slideIndex}`;
     } else {
         total.textContent = slides.length;
         current.textContent = slideIndex;
     }



    slidesField.style.width = 100 * slides.length + '%';

     slidesWrapper.style.overflow = 'hidden';

    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';
        slides.forEach((slide) => {
            slide.style.width = width;
        });

        function replaceWidth (str) {
            return +str.replace(/\D/ig, '');
        }

    
        sliderNext.addEventListener('click', () => {
            if (offset == replaceWidth(width) * (slides.length - 1)) { //'500px'
                offset = 0;
            } else {
                offset += replaceWidth(width);
            }
            
            slidesField.style.transform = `translateX(${-offset}px)`;
            if (slideIndex == slides.length) {
                slideIndex = 1;
            } else {
                slideIndex++;
            }

            if (slides.length < 10) {
                current.textContent = `0${slideIndex}`;
            } else {
                current.textContent = {slideIndex};
            }
            dots.forEach(dot => dot.style.opacity = '.5');
            dots[slideIndex - 1].style.opacity = 1;
        });
        sliderPrev.addEventListener('click', () => {
            if ( offset == 0) { //'500px'
            offset = replaceWidth(width) * (slides.length - 1);
           
            } else {
                offset -= replaceWidth(width);
            }
            
            slidesField.style.transform = `translateX(${-offset}px)`;

            if (slideIndex == 1) {
                slideIndex = slides.length;
            } else {
                slideIndex--;
            }


            if (slides.length < 10) {
                current.textContent = `0${slideIndex}`;
            } else {
                current.textContent = {slideIndex};
            }
            dots.forEach(dot => dot.style.opacity = '.5');
            dots[slideIndex - 1].style.opacity = 1;
        });
        const dots = []; // создаем пустой массив для точек
        offerSlider.style.cssText = 'position: relative';

        function createCarousel () {
            const carousel = document.createElement('div');
            carousel.classList.add('carousel-indicators');
            offerSlider.append(carousel);
        }

        createCarousel();

        for (let i = 0; i < slides.length; i++) {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            const parent = document.querySelector('.carousel-indicators');
            dot.setAttribute('data-slide-to', i + 1);
            if (i == 0) {
                dot.style.opacity = 1;
            }
            parent.append(dot);
            dots.push(dot); // Помещаем в массив все точки для дальнейшего использования

        }
        dots.forEach(dot => {
            dot.addEventListener('click', (e) => {
                const slideTo = e.target.getAttribute('data-slide-to');
                slideIndex = slideTo;
                offset = replaceWidth(width) * (slideTo - 1);
                slidesField.style.transform = `translateX(${-offset}px)`;
                if (slides.length < 10) {
                    current.textContent = `0${slideIndex}`;
                } else {
                    current.textContent = {slideIndex};
                }
                dots.forEach(dot => dot.style.opacity = '.5');
                dots[slideIndex - 1].style.opacity = 1;
                
            });
        });

        //Калькулятор 

        const result = document.querySelector('.calculating__result span');
        let sex, height, weight, age, ratio;
        if (localStorage.getItem('sex')) {
            sex = localStorage.getItem('sex');
        } else {
            sex = 'female';
            localStorage.setItem('sex', 'female');
        }

        if (localStorage.getItem('ratio')) {
            ratio = localStorage.getItem('ratio');
        } else {
            ratio = 1.375;
            localStorage.setItem('ratio', 1.375);
        }

        function initLocalSettings (selector, activeClass) {
            const elements = document.querySelectorAll(selector);
            elements.forEach( elem => {
                elem.classList.remove(activeClass);
                if (elem.getAttribute('id') === localStorage.getItem('sex')) {
                    elem.classList.add(activeClass);
                }
                if (elem.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
                    elem.classList.add(activeClass);
                }
            });
        }
        initLocalSettings('#gender div', 'calculating__choose-item_active');
        initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');
        // checkLocalStorage('sex',)
        // function checkLocalStorage (zn, variable, def) {
        //     if (localStorage.getItem(zn)) {
        //         variable = localStorage.getItem(zn);
        //     } else {
        //         variable = def;
        //         localStorage.setItem(variable, def);
        //     }
        // }

function calcTotal() {
        if (!sex || !height || !weight || !age || !ratio)  {
            result.textContent = '____';
            return;
        }
        if (sex === 'female') {
            result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);

        } else {
            result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
        }
    }
    calcTotal();

    function getStaticInformation (selector, activeClass) {
        const elements = document.querySelectorAll(selector);
        elements.forEach( elem => {
            elem.addEventListener('click', (e) => {
                if (e.target.getAttribute('data-ratio')) {
                    ratio = +e.target.getAttribute('data-ratio');
                    localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));
                } else {
                    sex = e.target.getAttribute('id');
                    localStorage.setItem('sex', sex = e.target.getAttribute('id'));
                }
                // console.log(ratio, sex);
    
                elements.forEach(elem => {
                    elem.classList.remove(activeClass);
                });
                e.target.classList.add(activeClass);
                calcTotal();
            });
        });
    }
    getStaticInformation('#gender div', 'calculating__choose-item_active');
    getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active');


    function getDynamicInformation (selector) {
        const input = document.querySelector(selector);

        input.addEventListener('input', () => {
            if (input.value.match(/\D/g)) {
                input.style.border = '1px solid red';
            } else {
                input.style.border = 'none';
            }
            switch(input.getAttribute('id')) {
                case 'height':
                    height = +input.value;
                    break;
                case 'weight':
                    weight = +input.value;
                    break;
                case 'age':
                    age = +input.value;
                    break;
            }
            console.log(height, weight, age);
            
            calcTotal();
        }); 
    }
    getDynamicInformation('#height');
    getDynamicInformation('#weight');
    getDynamicInformation('#age');
    
        
    // showSlides(slideIndex);
    //  function showSlides (n) {
    //      if (n > slides.length) {
    //         slideIndex = 1;
    //      }
    //      if (n < 1) {
    //         slideIndex = slides.length;
    //      }

    //     slides.forEach(item => {
    //         item.style.display = 'none';
    //     });

    //     slides[slideIndex - 1].style.display = 'block';
    // }
    //  function plusSlides(n) {
    //      showSlides(slideIndex += n);
    //  }

    //  sliderPrev.addEventListener('click', () => {
    //     plusSlides(-1);
    //  })
    //  sliderNext.addEventListener('click', () => {
    //      plusSlides(+1);
    //  })



    //  fetch(' http://localhost:3000/menu')
    //  .then(request => request.json())
    //  .then(request => console.log(request))
    //  .catch(console.error('Ошибка'));
    // Fetch 
    //  fetch('https://jsonplaceholder.typicode.com/posts', {
    //      method: "POST",
    //      body: JSON.stringify({name: 'ALEX'}),
    //      headers: {
    //          'Content-type': 'application/json'
    //      }
    //  })
    //     .then(response => response.json())
    //     .then(json => console.log(json));
});
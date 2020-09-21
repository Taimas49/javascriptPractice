
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
        console.log(data)
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
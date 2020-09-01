
window.addEventListener('DOMContentLoaded', () => {
    const tabsParent = document.querySelector('.tabheader__items');
    const tabs = document.querySelectorAll('.tabheader__item');
    const tabsContent = document.querySelectorAll('.tabcontent');
    console.log(tabsContent);

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
const deadline = '2020-08-30';

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
    const modalClose = modalWindow.querySelector('[data-close]');
    const modalTrigger = document.querySelectorAll('[data-modal]');
    console.log(modalTrigger);

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

    modalClose.addEventListener ('click', closeModal);

    modalWindow.addEventListener('click', (event) => {
        if (event.target === modalWindow) {
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
});
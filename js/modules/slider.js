function slider() {
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
}

module.exports = slider;
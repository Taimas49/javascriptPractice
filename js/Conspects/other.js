

    //Модальное окно 



    
    // const getResources = async (url) => {
    //     const res = await fetch(url);

    //     if (!res.ok) {
    //        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    //     }

    //     return await res.json();
    // };
    //Метод 1 

    // });
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
    
                
  
   

     // Формы 

    
     //slider

        //Калькулятор 

    

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
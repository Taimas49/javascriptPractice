function tabs() {
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

}
module.exports = tabs;
let menuBtn = document.querySelector('.menu-button')
let menuBtnBg = document.querySelector('.menu-button-bg')
let menuOpen = false;

menuBtn && menuBtnBg.addEventListener('click', () => {
    if (menuOpen == false) {
        menuBtn.classList.add('open')
        menuBtnBg.classList.add('open')
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open')
        menuBtnBg.classList.remove('open')
        menuOpen = false;
    }
})
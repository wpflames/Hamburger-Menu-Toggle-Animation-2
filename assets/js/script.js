const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.navigation');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;

        nav.classList.add('active');
    } else{
        menuBtn.classList.remove('open');
        menuOpen = false;

        nav.classList.remove('active');
    }
});
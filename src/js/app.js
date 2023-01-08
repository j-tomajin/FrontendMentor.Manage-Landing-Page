const hamburger = document.querySelector('.hamburger-img')
const navBtn = document.querySelector('.header__btn')
const nav = document.querySelector('.nav')

navBtn.addEventListener('click', () => {
    nav.classList.toggle('nav-toggle')

    if(!hamburger.src.match('icon-hamburger')) {
        hamburger.src = './assets/icons/icon-hamburger.svg'
    } else {
        hamburger.src = './assets/icons/icon-close.svg'
    }
})
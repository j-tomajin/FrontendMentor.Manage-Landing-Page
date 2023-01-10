// navigation menu
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

// email validation
const form = document.getElementById('footer-form')
const email = document.getElementById('email')

form.addEventListener('submit', e => {
    e.preventDefault()

    emailValidation()
})

const setSuccess = element => {
    const inputParent = element.parentElement
    const error = inputParent.querySelector('.error')

    error.innerText = ''
    inputParent.classList.remove('error-display')
    email.classList.remove('email-error')
}

const setError = (element, message) => {
    const inputParent = element.parentElement
    const error = inputParent.querySelector('.error')

    error.innerText = message
    inputParent.classList.add('error-display')
    email.classList.add('email-error')
}

const isValidEmail = element => {
    const email_pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    return email_pattern.test(String(element).toLowerCase())
}

const emailValidation = () => {
    const emailValue = email.value.trim()

    if(emailValue === '') {
        setError(email, 'This field is required')
    } else if(!isValidEmail(emailValue)) {
        setError(email, 'Please insert a valid email')
    } else {
        setSuccess(email);
    }
}

// carousel
const container = document.querySelector('.testimonials__container')
const cards = document.querySelector('.cards')

// keep track of user's mouse down and up
let isPressedDown = false

// 
let cursorXspace;

container.addEventListener('mousedown', (e) => {
    isPressedDown = true

    cursorXspace = e.offsetX - cards.offsetLeft
    container.style.cursor = 'grabbing';
})

container.addEventListener('mouseup', () => {
    container.style.cursor = 'grab';
})
window.addEventListener('mouseup', () => {
    isPressedDown = false
})

container.addEventListener('mousemove', (e) => {
    if(!isPressedDown) return

    e.preventDefault()
    cards.style.left = `${e.offsetX - cursorXspace}px`
    boundCards()
})

function boundCards() {
    const container_rect = container.getBoundingClientRect()
    const cards_rec = cards.getBoundingClientRect()

    if(parseInt(cards.style.left) > 0) {
        cards.style.left = '0';
    } else if(cards_rec.right < container_rect.right) {
        cards.style.left = `-${cards_rec.width - container_rect.width}px`
    }
}

container.addEventListener('touchmove', () => {
    isPressedDown = true

    cursorXspace = e.offsetX - cards.offsetLeft
})
// addEventListener('touch')
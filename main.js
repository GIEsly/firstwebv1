const open = document.querySelector('.openBtn')
const nav = document.querySelector('nav')
const close = document.querySelector('.closeBtn')

open.addEventListener('click', () => {
    nav.classList.add('mobile-open')
})

close.addEventListener('click', () => {
    nav.classList.remove('mobile-open')
})
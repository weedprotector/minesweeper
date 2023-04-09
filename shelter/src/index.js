const burger = document.querySelector('.hamburger');
const closeTriggers = document.querySelectorAll('[data-close]');
const aside = document.querySelector('.aside');
const substrate = document.querySelector('.substrate');


burger.addEventListener('click', () => {
    burger.classList.toggle('burger_flip');
    aside.classList.toggle('show');
    substrate.classList.toggle('substrate-show');
    document.body.classList.toggle('scroll-lock');
})

closeTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
        burger.classList.toggle('burger_flip');
        aside.classList.toggle('show');
        substrate.classList.toggle('substrate-show');
        document.body.classList.toggle('scroll-lock');
    })
})

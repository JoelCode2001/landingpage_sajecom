const navbar = document.querySelector('.navbar')
const contact = document.querySelector('.contact-info')
const navLinks = document.querySelectorAll('.navbar a')
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault()
        const targetId = link.getAttribute('href').substring(1)
        const targetSection = document.getElementById(targetId)
        navLinks.forEach(navLink => {
            navLink.classList.remove('active')
        })
        link.classList.add('active')
        targetSection.scrollIntoView({ behavior: 'smooth' })
    })
})

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active')
}
document.querySelector('#info-btn').onclick = () => {
    contact.classList.toggle('active')
    navbar.classList.remove('active')
}

document.querySelector('#close').onclick = () => {
    contact.classList.remove('active')
}

window.onscroll = () => {
    navbar.classList.remove('active')
    contact.classList.remove('active')
}

var swiper = new Swiper('.home-slider', {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
    slidesPerView: 3,
    effect: "fade",
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
})

var swiper = new Swiper('.reviews-slider', {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    //     draggable: true,
    // },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});
var swiper = new Swiper('.logo-slider', {
    loop: true,
    grabCursor: true,
    spaceBetween: 10,
    speed: 6000,
    autoplay: {
        delay: 1,
        disableOnInteraction: false,
    },
    breakpoints: {
        450: {
            slidesPerView: 2,
        },
        640: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        1000: {
            slidesPerView: 5,
        },
    },
});

let values = document.querySelectorAll('.num')
let interval = 5000

values.forEach(value => {
    let startValue = 0
    let endValue = parseInt(value.getAttribute('data-val'))
    let duration = Math.floor(interval / endValue)
    let counter = setInterval(function () {
        startValue += 1
        value.textContent = startValue + '+'
        if (startValue == endValue) {
            clearInterval(counter)
        }
    }, duration)
})
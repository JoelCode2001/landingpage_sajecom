const navbar = document.querySelector('#menu-nav')
const header = document.querySelector('.header')
const btn_home = document.querySelector('.slide .content .btn')
const section_contact = document.querySelector('#contact')

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

btn_home.addEventListener('click', (event) => {
    event.preventDefault()
    section_contact.scrollIntoView({ behavior: 'smooth' })
})

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active')
}

document.querySelector('#close').onclick = () => {
    navbar.classList.remove('active')
}

window.onscroll = () => {
    header.classList.toggle('sticky', window.scrollY > 30)
    navbar.classList.remove('active')
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

// var swiper = new Swiper('.reviews-slider', {
//     loop: true,
//     grabCursor: true,
//     spaceBetween: 20,
//     // scrollbar: {
//     //     el: '.swiper-scrollbar',
//     //     draggable: true,
//     // },
//     breakpoints: {
//         640: {
//             slidesPerView: 1,
//         },
//         768: {
//             slidesPerView: 2,
//         },
//         991: {
//             slidesPerView: 3,
//         },
//     },
// });
var swiper = new Swiper('.logo-slider', {
    loop: true,
    grabCursor: true,
    speed: 6000,
    autoplay: {
        delay: 1,
        disableOnInteraction: false,
    },
    breakpoints: {
        390: {
            slidesPerView: 2,
            spaceBetween: 2,
        },
        450: {
            slidesPerView: 2,
            spaceBetween: 2,
        },
        640: {
            slidesPerView: 3,
            spaceBetween: 3,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 4,
        },
        1000: {
            slidesPerView: 4,
            spaceBetween: 5,
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

lightGallery(document.querySelector('.projects .box-container'), {
    mode: 'lg-fade',
})

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault()
    let data = Object.fromEntries(new FormData(event.target))
    const xhr = new XMLHttpRequest()
    xhr.open("POST", 'https://formsubmit.co/crazyarnold01@gmail.com', true)
    xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8')
    xhr.send(
        JSON.stringify(data)
    )
    xhr.onload = function (e) {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 201) {
            event.reset()
        }
    }
})
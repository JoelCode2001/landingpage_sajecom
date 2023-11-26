const navbar = document.querySelector('#menu-nav')
const header = document.querySelector('.header')
const float = document.querySelector('.float')

AOS.init({
    delay: 80,
    offset: 60,
    duration: 600
});

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
float.addEventListener('click', (event) => {
    event.preventDefault()
    const id = float.getAttribute('href').substring(1)
    const section = document.getElementById(id)
    section.scrollIntoView({ behavior: 'smooth' })
})

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active')
}

document.querySelector('#close').onclick = () => {
    navbar.classList.remove('active')
}

window.onscroll = () => {
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
let interval = 8500

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

const containerTree = document.getElementById('containerTree')
const containerInput = document.getElementById('containerInput')
document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault()
    sendMessage(event)
    containerInput.style.opacity = '0.2'
    containerTree.style.display = 'flex'
})

const sendMessage = (event) => {
    let data = Object.fromEntries(new FormData(event.target))
    const xhr = new XMLHttpRequest()
    xhr.open("POST", 'https://formsubmit.co/crazyarnold01@gmail.com', true)
    xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8')
    xhr.send(
        JSON.stringify(data)
    )
    xhr.onload = function (e) {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            containerInput.style.opacity = '1'
            containerTree.style.display = 'none'
            Swal.fire({
                title: "Mensaje enviado",
                icon: "success",
                text: "Agradecemos tu colaboración",
                showConfirmButton: false,
                timer: 2500
            });
        }
    }
}


document.write('<script></script>')
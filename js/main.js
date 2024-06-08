const header = document.querySelector(".header");

window.addEventListener("scroll", (()=>{
        let e = window.scrollY;
        e > 90 ? header.classList.add("header--scrolling") : header.classList.remove("header--scrolling")
    }));

const swiper = new Swiper('.swiper', {
    slidesPerView: 4,
    spaceBetween: 0,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 0,
            enabled: false
        },
        428: {
            slidesPerView: 2,
            spaceBetween: 0,
            enabled: false
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 0,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
        }
    }
});

const photoBtn = document.querySelectorAll('.menu__btn');
const photoItem = document.querySelectorAll('.slider__item');
function open(e) {
    const t = e.currentTarget,
        n = t.dataset.button;
    photoBtn.forEach((function (e) {
        e.classList.remove('menu__btn-active');
    }
    )),
        t.classList.add('menu__btn-active'),
        photoItem.forEach((function (e) {
            e.classList.remove('slider__item-active');
        }
        )),
        document.querySelector(`#${n}`).classList.add('slider__item-active')
}

photoBtn.forEach((function (e) {
    e.addEventListener('click', open);
}));


const burger = document.querySelector('.nav__burger-wrapper');
const burgerList = document.querySelector('.blist');


function toggleBurger() {
    burgerList.classList.toggle('active');
}

burger.addEventListener('click', toggleBurger);
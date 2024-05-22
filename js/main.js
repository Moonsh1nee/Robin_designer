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
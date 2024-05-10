const header = document.querySelector(".header");


window.addEventListener("scroll", (()=>{
        let e = window.scrollY;
        e > 90 ? header.classList.add("header--scrolling") : header.classList.remove("header--scrolling")
    }));
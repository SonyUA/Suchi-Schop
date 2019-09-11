'use strict'
/* BURGER */

function burger() {
    let menu = document.querySelector("#menu");
    let burger = document.querySelector("#burger");
    let burgerIconLink = document.querySelector("#burger-icon-link")
    let burgerIcon = document.querySelector("#burger-icon")
    menu.className === "menu-active" ? menu.className = "menu" : menu.className = "menu-active";
    burger.className === "burger-list-active" ? burger.className = "burger-list" : burger.className = "burger-list-active";
    burgerIconLink.className === "burger-icon-link" ? burgerIconLink.className = "burger-icon-link-active" : burgerIconLink.className = "burger-icon-link";
    burgerIcon.className === "burger-icon" ? burgerIcon.className = "burger-icon-active" : burgerIcon.className = "burger-icon";
}


/* SLIDER */


let btnRight = document.querySelector("#btn-right");
let btnLeft = document.querySelector("#btn-left");
let images = document.querySelectorAll("#slide-inner");
let current = 0;

function slideShowleft() {

    if (current < images.length - 1) {

        for (let i = 0; i < images.length; i++) {
            images[i].classList.remove("active");
            images[i].classList.add("slide-inner");

        }
        current++;
        images[current].classList.remove("slide-inner");
        images[current].classList.add("active");

    } else if (current === images.length - 1) {
        current = images.length - 1;
    }
}

function slideShowRight() {

    if (current > 0) {

        for (let i = 0; i < images.length; i++) {
            images[i].classList.remove("active");
            images[i].classList.add("slide-inner");
        }

        current--;
        images[current].classList.remove("slide-inner");
        images[current].classList.add("active");

    } else if (current === 0) {
        current = 0;
    }
}

btnLeft.addEventListener('click', slideShowleft);
btnRight.addEventListener('click', slideShowRight);
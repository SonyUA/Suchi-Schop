'use strict'
// function burger() {
//   let menu = document.querySelector("#menu");
//   let burger = document.querySelector("#burger");
//   let burgerIconLink = document.querySelector("#burger-icon-link")
//   let burgerIcon = document.querySelector("#burger-icon")
//   menu.classList.add("menu-active");
//   menu.classList.remove("menu");
//   burger.classList.add("burger-list-active");
//   burger.classList.remove("burger-list");
//   burgerIconLink.classList.add("burger-icon-link-active");
//   burgerIconLink.classList.remove("burger-icon-link");
//   burgerIcon.classList.add("burger-icon-active");
//   burgerIcon.classList.remove("burger-icon");
// }
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

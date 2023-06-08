
// === Standard utils code ===

import * as utils from "./utils.js"

// Controlling Navbar active-inactive state (Utils)
document.addEventListener("DOMContentLoaded", utils.controlNavbarLookSecondaryPages)
document.addEventListener("scroll", utils.controlNavbarLookSecondaryPages)

// Menu open-close functionality (Utils)
const hamburger_menu_button = document.querySelector("[data-hamburger-menu]")
hamburger_menu_button.addEventListener("click", utils.manageMenuOpenClose)

// Auto closing menu on window resize (Utils)
window.addEventListener("resize", utils.manageMenuAutoclose)

// ident the menu section by exactly the height of the navbar (Utils)
const navbar_logo = document.querySelector("[data-navbar-logo]")
navbar_logo.addEventListener("load", e =>{
  const menu_container = document.querySelector("[data-menu-container]")
  utils.setMarginBelowNavbar(menu_container)
})











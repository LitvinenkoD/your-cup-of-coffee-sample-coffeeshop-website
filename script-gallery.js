
// === Standard utils code ===

import * as utils from "./utils.js"

// Controlling navbar active-inactive state (Utils)
document.addEventListener("DOMContentLoaded", utils.controlNavbarLookSecondaryPages)
document.addEventListener("scroll", utils.controlNavbarLookSecondaryPages)

// Menu open-close functionality (Utils)
const hamburger_menu_button = document.querySelector("[data-hamburger-menu]")
hamburger_menu_button.addEventListener("click", utils.manageMenuOpenClose)

// Auto closing menu on window resize (Utils)
window.addEventListener("resize", utils.manageMenuAutoclose)

// ident the gallery section by exactly the height of the navbar (Utils)
const navbar_logo = document.querySelector("[data-navbar-logo]")
navbar_logo.addEventListener("load", e =>{
  const gallery_master_container = document.querySelector("[data-gallery-master-container]")
  utils.setMarginBelowNavbar(gallery_master_container)
})








// === Page-specific code ===

// Adjusting gallery items height to keep the image grid responsive on all devices.

const gallery_item_images = [...document.querySelectorAll("[data-gallery-item-image]")]
const gallery_items = [...document.querySelectorAll("[data-gallery-item]")]


gallery_item_images[0].addEventListener("load", e =>{
  adjustImageGalleryElementHeight()
  
  window.addEventListener("resize", e =>{
    adjustImageGalleryElementHeight()
  })
})


function adjustImageGalleryElementHeight(){
  const image_width = gallery_item_images[0].getBoundingClientRect().width
  const desired_height = image_width * 10 / 16

  gallery_items.forEach(elem =>{
    elem.style.setProperty("--height", desired_height + "px")
  })

  gallery_item_images.forEach(elem =>{
    elem.style.setProperty("--height", desired_height + "px")
  })
}



// Welcome to the main script file!
// There are 3 script files, one for each page,
// plus a utils file that exports some functions
// that are used by more than one page.

// All script files for this project are divided into
// two sections - the standard utils code section
// and the page-specific code section.

// Some pages have very little to no own code,
// while pages like this homepage have a lot
// of page-specific logic.

// All code is separated into logical groups,
// at the start of a major code group there
// is an in depth explanation of what the code
// does.

// Enjoy reading!

















// === Standard utils code ===

import * as utils from "./utils.js"

// Pass navbar height to css elements that need to know it (Utils)

// for homepage, the argument is null because the hero section below
// it does not need to be idented.
const navbar_logo = document.querySelector("[data-navbar-logo]")
navbar_logo.addEventListener("load", () =>{
  utils.setMarginBelowNavbar(null)
})


// Menu open-close functionality (Utils)

const hamburger_menu_button = document.querySelector("[data-hamburger-menu]")
hamburger_menu_button.addEventListener("click", utils.manageMenuOpenClose)











// ===== Page-specific code =====


// === Navbar look control ===

// The look of the navbar may change due to user scroll,
// and also due to viewport width.

// There is an active and an inactive state in which navbar can be.
// Inactive state is when the bar is transparent and the items inside
// it are white.
//
// Active navbar state is when the bar is white and all the insides of 
// it are black.

// On the home page there are options of active/inactive, and on
// all other pages the navbar is always inactive.


// There is also a mobile look to a navbar and a desktop look.
//
// Dekstop version of a navbar can be active or inactive,
// while the mobile version is always considered active.

// if scroll = 0, or less than some value, keep navbar transparent


document.addEventListener("DOMContentLoaded", controlNavbarLookHomepage)
document.addEventListener("scroll", controlNavbarLookHomepage)


function controlNavbarLookHomepage(){
  const scrollAmount = document.documentElement.scrollTop
  const viewport_width = document.body.clientWidth;


  if (scrollAmount >= 1){
    setNavbarActive()
  }

  else{
    setNavbarInactive()
  }

  // On mobile navbar is always active
  if(viewport_width <= 800){
    setNavbarActive()
  }
}

// Changing navbar from transparent to colored background,
// while also changing components inside the navbar to match
// the background color.

function setNavbarActive(){
  const navbar = document.querySelector("[data-nav-bar]")
  const navbar_logo = navbar.querySelector("[data-navbar-logo]")
  const navbar_menu_button = navbar.querySelector("[data-hamburger-menu]")

  navbar.classList.add("nav--state-active")
  navbar.classList.remove("nav--state-inactive-home")
  navbar_logo.setAttribute("src", "./assets/img/newlogoblack.png")
  navbar_menu_button.style.setProperty("color", "black")
  
}


function setNavbarInactive(){
  const navbar = document.querySelector("[data-nav-bar]")
  const navbar_logo = navbar.querySelector("[data-navbar-logo]")
  const navbar_menu_button = navbar.querySelector("[data-hamburger-menu]")

  navbar.classList.add("nav--state-inactive-home")
  navbar.classList.remove("nav--state-active")
  navbar_logo.setAttribute("src", "./assets/img/newlogowhite.png")
  navbar_menu_button.style.setProperty("color", "white")
}





// Nav menu autoclose control
// This one is specific to this page,
// so I'm not importing this function from
// utils


// Auto closing menu on window resize + 
// calling the function control navbar look
// to adjust the look of the navbar.
window.addEventListener("resize", e =>{
  const viewport_width = document.body.clientWidth;
  const nav_links = document.querySelector("[data-nav-links]")
  if (viewport_width >= 800){
    nav_links.classList.remove("nav-links-mobile--status-opened")
    nav_links.classList.remove("nav-links-mobile--status-closed")

    controlNavbarLookHomepage()
  }

  else{
    controlNavbarLookHomepage()
  }
})





// === Controling gallery section of the homepage ===


// Dynamically resizing image gallery section elements so that they look right

const image_gallery_block = document.querySelector("[data-image-gallery-block]")
const gallery_items = [...image_gallery_block.children]

gallery_items[0].addEventListener("load", e =>{
  adjustImageGalleryElementHeight()

  window.addEventListener("resize", e =>{
    adjustImageGalleryElementHeight()
  })
})



function adjustImageGalleryElementHeight(){
  const image_width = gallery_items[0].getBoundingClientRect().width
  const desired_height = image_width * 10 / 16

  gallery_items.forEach(elem =>{
    elem.style.setProperty("--height", desired_height + "px")
  })
}








// === Homepage animations ===


// There are 2 types of animation - appear left and
// appear right.
//
// There are 4 animated objects, you can see which ones they are
// if you take a look at the doc.queryselector(data-attributename)

// These animations work dynamically depending on user scroll.
// If the y coordinate of an element is within a certain threshold
// of user viewport - we launch a respective animation.
//
// There is a threshold enter animation and a threshold leave animation.
//
// I call them animation appear and animation disappear respectively.



document.addEventListener("scroll", e =>{

  const animated_object_left_1 = document.querySelector("[data-image-1-1]")
  const animated_object_right_1 = document.querySelector("[data-image-1-2]")
  const animated_object_left_2 = document.querySelector("[data-image-2-1]")
  const animated_object_right_2 = document.querySelector("[data-text-2-1]")

  const view_threshold = .8 * window.innerHeight

  const animated_objects_left = [animated_object_left_1, animated_object_left_2]
  const animated_objects_right = [animated_object_right_1, animated_object_right_2]




  animated_objects_left.forEach(elem =>{
    const elem_y_coordinate = elem.getBoundingClientRect().y

    if (isInView(elem_y_coordinate, view_threshold)){
      elem.classList.add("animation-appear-left")
      elem.classList.remove("animation-disappear-left")
    }
    else if (elem.classList.contains("animation-appear-left")){
      elem.classList.add("animation-disappear-left")
      elem.classList.remove("animation-appear-left")
    }
  })

  animated_objects_right.forEach(elem =>{
    const elem_y_coordinate = elem.getBoundingClientRect().y

    if (isInView(elem_y_coordinate, view_threshold)){
      elem.classList.add("animation-appear-right")
      elem.classList.remove("animation-disappear-right")
    }
    else if (elem.classList.contains("animation-appear-right")){
      elem.classList.add("animation-disappear-right")
      elem.classList.remove("animation-appear-right")
    }
  })

})


function isInView(element_y_position, threshold){

  if (element_y_position <= threshold) return true
  else return false
}



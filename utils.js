export function manageMenuAutoclose(){
  const nav_links = document.querySelector("[data-nav-links]")
  const viewport_width = document.body.clientWidth;
  if (viewport_width >= 800){
    nav_links.classList.remove("nav-links-mobile--status-opened")
    nav_links.classList.remove("nav-links-mobile--status-closed")
  }
}



export function manageMenuOpenClose(){
  const nav_links = document.querySelector("[data-nav-links]")

  if(!nav_links.classList.contains("nav-links-mobile--status-opened") && !nav_links.classList.contains("nav-links-mobile--status-closed")){
    nav_links.classList.add("nav-links-mobile--status-opened")
  }

  else if(nav_links.classList.contains("nav-links-mobile--status-opened")){
    nav_links.classList.remove("nav-links-mobile--status-opened")
    nav_links.classList.add("nav-links-mobile--status-closed")
  }

  else if(nav_links.classList.contains("nav-links-mobile--status-closed")){
    nav_links.classList.remove("nav-links-mobile--status-closed")
    nav_links.classList.add("nav-links-mobile--status-opened")
  }
}


export function controlNavbarLookSecondaryPages(){

  const scrollAmount = document.documentElement.scrollTop
  const navbar = document.querySelector("[data-nav-bar]")

  
  if (scrollAmount >= 1){
    navbar.classList.add("nav--state-active")
    navbar.classList.remove("nav--state-inactive-all-other-pages")

  }

  else{
    navbar.classList.add("nav--state-inactive-all-other-pages")
    navbar.classList.remove("nav--state-active")
  }
}

export function setMarginBelowNavbar(element_below_navbar){
  const navbar = document.querySelector("[data-nav-bar]")
  
  if (element_below_navbar != null){
    const desired_height = navbar.getBoundingClientRect().height
    element_below_navbar.style.setProperty("--navbar-height", desired_height + "px")
  }

  // Setting nav link identation equal to navbar height
  const nav_links = document.querySelector("[data-nav-links]")
  nav_links.style.setProperty("--navbar-height", JSON.stringify(navbar.clientHeight) + "px")
}
let navMenu = document.querySelector(".nav-menu");

function executeNav() {
  let navBar = document.querySelector(".nav-first");

  navBar.classList.toggle("active");
  navBarActive = document.querySelector(".active");

  if (navBarActive) {
    navMenu.style.transform = "rotate(90deg)";
  } else {
    navMenu.style.transform = "rotate(0deg)";
  }
}

navMenu.addEventListener("click", executeNav);

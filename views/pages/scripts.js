// Toggle menu-icon
// Select icon and navbar
const hamburgerMenu = document.querySelector(".menu-icon");
const menuItems = document.querySelector(".navbar");

// event handler function to toggle the open class to menuItems
const toggleMenu = function() {
  menuItems.classList.toggle("open");
};

// event listener to toggle when hamurgerMenu is clicked
hamburgerMenu.addEventListener("click", toggleMenu);


// accordion panel
let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
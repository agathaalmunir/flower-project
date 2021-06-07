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

// TOGGLE DISPLAY NONE/BLOCK ON FLOWER OPTIONS\

// make and add classes to the labels
// Select the label of the radio button. 
const potOption = document.querySelector(".pot-option");
// Select the option img using their class
const potImg = document.querySelector(".pot");
// Event handler funtion to toggle the selected class to the option imgs
const togglePot = function() {
  if (potImg.style.display === "none") {
    potImg.style.display = "block"
  } else {
    potImg.style.display = "none"
  }
};
// Add event listener to toggle when the label of the radio button is clicked
potOption.addEventListener("click", togglePot);

const ribbonOption = document.querySelector(".ribbon-option");
const ribbonImg = document.querySelector(".ribbon");
const toggleRibbon = function() {
  if (ribbonImg.style.display === "none") {
    ribbonImg.style.display = "block"
  } else {
    ribbonImg.style.display = "none"
  }
};
ribbonOption.addEventListener("click", toggleRibbon);

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
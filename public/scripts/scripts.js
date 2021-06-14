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

// add classes to radio inputs and select them
// Select the option img using their class
// Event handler funtion to toggle the selected class to the option imgs
// Add event listener to toggle when the label of the radio button is clicked

// Base options and images
const potOption = document.querySelector(".pot-option");
const potImg = document.querySelector(".pot");
const ribbonOption = document.querySelector(".ribbon-option");
const ribbonImg = document.querySelector(".ribbon");
const tapeOption = document.querySelector(".tape-option");
const tapeImg = document.querySelector(".tape");

// Base toggle functions and event listeners
const togglePot = function() {
  if (potImg.checked = true) {
    potImg.style.display = "block";
    ribbonImg.style.display = "none";
    tapeImg.style.display = "none";
  } else {
    potImg.style.display = "none";
  }
};
potOption.addEventListener("click", togglePot);

const toggleRibbon = function() {
  if (ribbonImg.checked = true) {
    ribbonImg.style.display = "block";
    potImg.style.display = "none";
    tapeImg.style.display = "none";
  } else {
    ribbonImg.style.display = "none"
  }
};
ribbonOption.addEventListener("click", toggleRibbon);

const toggleTape = function() {
  if (tapeImg.checked = true) {
    tapeImg.style.display = "block";
    potImg.style.display = "none";
    ribbonImg.style.display = "none"
  } else {
    tapeImg.style.display = "none"
  }
};
tapeOption.addEventListener("click", toggleTape);
// -------------------------------------------

// FLOWER options and images
const grapeOption = document.querySelector(".grape-hyacinth-option");
const grapeImg = document.querySelector(".grape-hyacinth");
const morningOption = document.querySelector(".morning-glory-option");
const morningImg = document.querySelector(".morning-glory");
const coneflowerOption = document.querySelector(".coneflower-option");
const coneflowerImg = document.querySelector(".coneflower");

// FLOWERS toggle functions and event listeners
const toggleGrape = function() {
  if (grapeImg.checked = true) {
    grapeImg.style.display = "block";
    morningImg.style.display = "none";
    coneflowerImg.style.display = "none"
  } else {
    grapeImg.style.display = "none";
  }
};
grapeOption.addEventListener("click", toggleGrape);

const toggleMorning = function() {
  if (morningImg.checked = true) {
    morningImg.style.display = "block";
    grapeImg.style.display = "none";
    coneflowerImg.style.display = "none";
  } else {
    morningImg.style.display = "none";
  }
};
morningOption.addEventListener("click", toggleMorning);

const toggleConeflower = function() {
  if (coneflowerImg.checked = true) {
    coneflowerImg.style.display = "block";
    grapeImg.style.display = "none";
    morningImg.style.display = "none";
  } else {
    coneflowerImg.style.display = "none";
  }
};
coneflowerOption.addEventListener("click", toggleConeflower);
// -------------------------------------------

// Greenery options and images
const babysOption = document.querySelector(".babys-breath-option");
const babysImg = document.querySelector(".babys-breath");
const leatherOption = document.querySelector(".leather-fern-option");
const leatherImg = document.querySelector(".leather-fern");
const silverOption = document.querySelector(".silver-dollar-option");
const silverImg = document.querySelector(".silver-dollar-eucalyptus");

// GREENERY toggle functions and event listeners
const toggleBabys = function() {
  if (babysImg.checked = true) {
    babysImg.style.display = "block";
    leatherImg.style.display = "none";
    silverImg.style.display = "none";
  } else {
    babysImg.style.display = "none";
  }
};
babysOption.addEventListener("click", toggleBabys);

const toggleLeather = function() {
  if (leatherImg.checked = true) {
    leatherImg.style.display = "block";
    babysImg.style.display = "none";
    silverImg.style.display = "none";
  } else {
    leatherImg.style.display = "none";
  }
};
leatherOption.addEventListener("click", toggleLeather);

const toggleSilver = function() {
  if (silverImg.checked = true) {
    silverImg.style.display = "block";
    leatherImg.style.display = "none";
    babysImg.style.display = "none";
  } else {
    silverImg.style.display = "none";
  }
};
silverOption.addEventListener("click", toggleSilver);
// -------------------------------------------

// ACCENTS options and images
const bubblesOption = document.querySelector(".bubbles-option");
const bubblesImg = document.querySelector(".bubbles");
const heartsOption = document.querySelector(".hearts-option");
const heartsImg = document.querySelector(".hearts");
const sparklesOption = document.querySelector(".sparkles-option");
const sparklesImg = document.querySelector(".sparkles");

// ACCENTS toggle functions and event listeners
const toggleBubbles = function() {
  if (bubblesImg.checked = true) {
    bubblesImg.style.display = "block";
    heartsImg.style.display = "none";
    sparklesImg.style.display = "none";
  } else {
    bubblesImg.style.display = "none";
  }
};
bubblesOption.addEventListener("click", toggleBubbles);

const toggleHearts = function() {
  if (heartsImg.checked = true) {
    heartsImg.style.display = "block";
    sparklesImg.style.display = "none";
    bubblesImg.style.display = "none";
  } else {
    heartsImg.style.display = "none";
  }
};
heartsOption.addEventListener("click", toggleHearts);

const toggleSparkles = function() {
  if (sparklesImg.checked = true) {
    sparklesImg.style.display = "block";
    bubblesImg.style.display = "none";
    heartsImg.style.display = "none";
  } else {
    sparklesImg.style.display = "none";
  }
};
sparklesOption.addEventListener("click", toggleSparkles);


// -------------------------------------------
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
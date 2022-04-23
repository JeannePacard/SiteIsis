const firstbeer = document.querySelector(".first-beer");
const secondbeer = document.querySelector(".second-beer");
const thirdbeer = document.querySelector(".third-beer");

function init() {
  firstbeer.style.display = "block";
  secondbeer.style.display = "none";
  thirdbeer.style.display = "none";
}

function first() {
  if (firstbeer.style.display == "none") {
    firstbeer.style.display = "block";
    secondbeer.style.display = "none";
    thirdbeer.style.display = "none";
  }
}

function second() {
  if (secondbeer.style.display == "none") {
    firstbeer.style.display = "none";
    secondbeer.style.display = "block";
    thirdbeer.style.display = "none";
  }
}

function third() {
  if (thirdbeer.style.display == "none") {
    firstbeer.style.display = "none";
    secondbeer.style.display = "none";
    thirdbeer.style.display = "block";
  }
}

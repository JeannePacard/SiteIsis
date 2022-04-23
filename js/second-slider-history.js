const click = document.querySelectorAll(".femmes-button");
const img = document.querySelectorAll(".femmes-img");
const supp = document.querySelectorAll(".femmes-left");
const supp2 = document.querySelectorAll(".femmes-right");
const supp3 = document.querySelectorAll(".background");
const supp4 = document.querySelectorAll(".femmes-button");
const under = document.querySelectorAll(".second-etap");

click.forEach(function (click) {
  click.addEventListener("click", function () {
    supp.style.display = "none";
    supp2.style.display = "none";
    supp3.style.display = "none";
    supp4.style.display = "none";
    img.style.display = "block";
    under.style.display = "block";
    img.style.transform = "translateX(6vw)";
    img.style.transitionDuration = "1s";
  });
});

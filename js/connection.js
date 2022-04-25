const popup = document.querySelector(".user-popup");
const button = document.querySelector(".user-button");

function openconnection() {
  button.addEventListener("click", function () {
    popup.style.display = "block";
  });
}

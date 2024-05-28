function openNav() {
  document.getElementById("side-bar").style.width = "250px";
  document.querySelector(".app").style.filter = "brightness(40%)";
  document.querySelector(".app").style.transition = "filter 0.8s";
}

function closeNav() {
  document.getElementById("side-bar").style.width = "0";
  document.querySelector(".app").style.filter = "";
  document.querySelector(".app").style.transition = "filter 0.8s";
}

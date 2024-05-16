function show_hide_password() {
  var input = document.getElementById("password");
  var iconShow = document.querySelector(".icon-show");
  var iconHide = document.querySelector(".icon-hide");
  if (input.getAttribute("type") == "password") {
    input.setAttribute("type", "text");
    iconShow.style.setProperty("display", "none");
    iconHide.style.removeProperty("display");
  } else {
    input.setAttribute("type", "password");
    iconHide.style.setProperty("display", "none");
    iconShow.style.removeProperty("display");
  }
  return false;
}

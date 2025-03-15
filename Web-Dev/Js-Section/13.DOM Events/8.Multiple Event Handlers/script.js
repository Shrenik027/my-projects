//Acces the button

const buttonEl = document.getElementById("actionButton");

buttonEl.addEventListener("click", function (event) {
  console.log("button was clicked");
});

buttonEl.addEventListener("dblclick", function (event) {
  console.log("button was dbclicked");
});

buttonEl.addEventListener("mouseenter", function (event) {
  console.log("mouse entered");
});
buttonEl.addEventListener("mouseleave", function (event) {
  console.log("mouse leave");
});

//Named Function for alert
function showAlert() {
  console.log("hello");
}

//getting button element
const alertbtnEl = document
  .getElementById("alertButton")
  .addEventListener("click", showAlert);

//Named Function for removing alert
function removeAlert() {
  alertbtnEl.removeEventListener("click", showAlert);
}

const removebtn = document.getElementById("removealert");

removebtn.addEventListener("click", removeAlert);

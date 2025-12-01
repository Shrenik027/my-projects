//Acces username input and submit btn

const usernameEl = document.getElementById("username");
const submitBtnElEl = document.getElementById("submitBtn");

//create a custom

const usernameSubmitted = new CustomEvent("usernameSubmitted", {
  bubbles: true,
  cancelable: true,
  detail: { text: "" },
});

//Attach and event listener

document.addEventListener("usernameSubmitted", function (event) {
  console.log(`username is: ${event.detail.text} has been submitted`);
});
//attach event listener to subbmit btn

submitBtnElEl.addEventListener("click", function () {
  //populate the detail property with the input value
  usernameSubmitted.detail.text = usernameEl.value;
  //dispatch custom event
  document.dispatchEvent(usernameSubmitted);
});

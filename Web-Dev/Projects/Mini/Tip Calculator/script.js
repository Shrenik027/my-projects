//! cal tip function

function calculateTip() {
  const billAmout = parseFloat(document.getElementById("bill").value);
  const ServiceQuality = parseFloat(document.getElementById("service").value);
  const numberOfPeople = parseFloat(document.getElementById("people").value);

  //validiatios

  if (isNaN(billAmout) || billAmout <= 0) {
    alert("Please Enter a Valid Bill Amount");
    return;
  }
  if (numberOfPeople < 1) {
    alert("Please Enter at Least 1 Person");
    return;
  }

  //calculate the values

  const tipAmount = billAmout * ServiceQuality;
  const totalAmount = billAmout + tipAmount;
  const perPerson = totalAmount / numberOfPeople;
  const tipPerPerson = tipAmount / numberOfPeople;

  // Display  the Result with 2 decimal Places

  document.getElementById("tipAmount").textContent = `$${tipAmount.toFixed(2)}`;
  document.getElementById("totalAmount").textContent = `$${totalAmount.toFixed(
    2
  )}`;
  document.getElementById("perPerson").textContent = `$${perPerson.toFixed(2)}`;
  document.getElementById(
    "tipPerPerson"
  ).textContent = `$${tipPerPerson.toFixed(2)}`;
}
//add EventListener

document.getElementById("calculateBtn").addEventListener("click", calculateTip);

//calculate base on input change
const allEls = document.querySelectorAll("input, select").forEach((element) => {
  element.addEventListener("input", calculateTip);
});

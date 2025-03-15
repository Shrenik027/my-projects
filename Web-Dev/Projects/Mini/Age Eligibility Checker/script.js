//! Age Checker

document.getElementById("checkButton").addEventListener("click", function () {
  const ageValue = parseInt(document.getElementById("ageInput").value);
  //select where to display result
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";
  if (isNaN(ageValue) || ageValue <= 0) {
    resultDiv.innerHTML = "Please Enter Valid Age";
    return;
  }

  if (ageValue >= 18) {
    resultDiv.innerHTML += "You are eligible to Vote <br/>";
  } else {
    resultDiv.innerHTML += "You are Not Eligible to Vote<br/>";
  }

  if (ageValue >= 21) {
    resultDiv.innerHT0ML += "You are Eligible to Drink <br/>";
  } else {
    resultDiv.innerHTML += "You are not Eligible to Drink <br/>";
  }

  if (ageValue >= 16) {
    resultDiv.innerHT0ML += "You are Eligible to Drive <br/>";
  } else {
    resultDiv.innerHTML += "You are not Eligible to Drive <br/>";
  }
});

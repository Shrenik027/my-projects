//add Event
addButton.addEventListener("click", function () {
  //1.Select the element

  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let addButton = document.getElementById("addButton");
  let result = document.getElementById("result");

  //perform calculation

  let sum = parseFloat(num1) + parseFloat(num2);

  result.innerHTML = '<i class= "fas fa-equals icon"></i>' + sum;
});

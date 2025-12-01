//!Know Your Animal Sound

document.getElementById("soundButton").addEventListener("click", function () {
  //the anme of animal from the input
  const animal = document.getElementById("animalInput").value.toLowerCase();

  //Sound Output

  const output = document.getElementById("soundOutput");

  //logic

  switch (animal) {
    case "dog":
      output.textContent = "Woof! Woof!";
      break;
    case "cat":
      output.textContent = "Meow! Meow!";
      break;
    case "sheep":
      output.textContent = "baa! baa!";
      break;
    case "Duck":
      output.textContent = "Quack! Quack!";
      break;
    default:
      output.textContent = "Ohh! i dont know that Animal!!";
  }
});

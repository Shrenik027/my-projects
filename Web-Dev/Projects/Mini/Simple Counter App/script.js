document.addEventListener("DOMContentLoaded", () => {
  //Select Element
  const counterValue = document.getElementById("counter-value");
  const increaseBtn = document.getElementById("increase-btn");
  const decreaseBtn = document.getElementById("decrease-btn");
  const resetBtn = document.getElementById("reset-btn");

  //GlobalVal
  let count = 0;

  //add Event Listeners to buttons

  increaseBtn.addEventListener("click", () => {
    count++;
    updatecounter();
  });

  decreaseBtn.addEventListener("click", () => {
    count--;
    updatecounter();
  });

  resetBtn.addEventListener("click", () => {
    count = 0;
    updatecounter();
  });

  //update Counter val
  function updatecounter() {
    counterValue.textContent = count;
  }
});

const startCountDown = () => {
  const timeinput = document.getElementById("timeinput").value;
  const timerDisplay = document.getElementById("timer");
  const timeRemaining = parseInt(timeinput);

  if (isNaN(timeRemaining) || timeRemaining <= 0) {
    timerDisplay.textContent = "Enter Valid Number";
  }
  //clear the prevvious countdown

  timerDisplay.textContent = `Time Left ${timeRemaining} seconds`;

  for (let i = timeRemaining; i >= 0; i--) {
    (function (count) {
      setTimeout(() => {
        if (count > 0) {
          timerDisplay.textContent = `TimeLeft:${count} seconds`;
        } else {
          timerDisplay.textContent = `Time's Up`;
        }
      }, (timeRemaining - count) * 1000);
    })(i);
  }
};

document
  .getElementById("startButton")
  .addEventListener("click", startCountDown);

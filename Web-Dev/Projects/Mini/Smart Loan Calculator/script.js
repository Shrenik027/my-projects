document.addEventListener("DOMContentLoaded", () => {
  //!Select the elements

  const calculateBtn = document.getElementById("calculateBtn");
  const amountImput = document.getElementById("amount");
  const interestInput = document.getElementById("interest");
  const yearsInput = document.getElementById("years");
  //Summary
  const monthlyPayment = document.getElementById("monthly");
  const totalPayment = document.getElementById("total");
  const totalInterestPayment = document.getElementById("totalInterest");

  //!Function to calculate Loan

  function calculateLoan() {
    const principal = parseFloat(amountImput.value);
    const interest = parseFloat(interestInput.value) / 100 / 12;
    const payments = parseFloat(yearsInput.value) * 12;

    if (isNaN(principal) || isNaN(interest) || isNaN(payments)) {
      alert("Please Enter Valid Numbers");
      return;
    }
    //Calculate the Monthly Payment
    const x = Math.pow(1 + interest, payments);
    const monthly = (principal * x * interest) / (x - 1);

    if (isFinite(monthly)) {
      //calculate total payment and intrest
      const total = monthly * payments;
      const totalInterest = total - principal;

      //display the results with animation

      animateValue(monthlyPayment, 0, monthly, 1000);
      animateValue(totalPayment, 0, total, 1000);
      animateValue(totalInterestPayment, 0, totalInterest, 1000);
    } else {
      alert("Please Check your Numbers");
    }
  }

  //!Fun for animation
  function animateValue(element, start, end, duration) {
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const current = start + (end - start) * progress;
      element.textContent = current.toFixed(2);

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }
    requestAnimationFrame(update);
  }

  //!bind the event to calculate btn

  calculateBtn.addEventListener("click", calculateLoan);
});

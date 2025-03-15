//Autotype
document.addEventListener("DOMContentLoaded", () => {
  const typed = new Typed(".auto-type", {
    strings: ["Tejas!!"], // Text to type
    typeSpeed: 150, // Typing speed in milliseconds
    backSpeed: 50, // Backspacing speed in milliseconds
    backDelay: 1000, // Delay before backspacing in milliseconds
    cursorChar: "|", // Cursor character
    smartBackspace: true, // Only backspace what's necessary
    loop: true, // Loop the animation
  });
});
//Mobile toggle

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Function to animate progress bars
function animateProgressBars() {
  const progressBars = document.querySelectorAll(".progress");

  progressBars.forEach((progressBar) => {
    const progressValue = progressBar.getAttribute("data-progress");
    progressBar.style.width = `${progressValue}%`;

    // Update the label text (if you have labels)
    const label = progressBar.parentElement.nextElementSibling;
    if (label && label.classList.contains("progress-label")) {
      label.textContent = `${progressValue}%`;
    }
  });
}

// Add event listener to the Skills link
const skillsLink = document.getElementById("skills-link");
skillsLink.addEventListener("click", () => {
  // Animate progress bars when the Skills link is clicked
  animateProgressBars();
});

var swiper = new Swiper(".swiper", {
  effect: "cube",
  allowTouchMove: true,
  grabCursor: false,
  mousewheel: false, // disables cube-rotate on scroll
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
});

swiper.sliderMove = function (s, e) {
  console.log(s);
};

function Navigate(index) {
  for (let i of document.querySelectorAll(".Links li"))
    i.classList.remove("activeLink");
  Array.from(document.querySelectorAll(".Links li"))[index].classList.add(
    "activeLink"
  );
  swiper.slideTo(index, 1000, true);

  // Trigger progress bar animation if Skills slide is active
  if (index === 2) {
    // Skills slide index (adjust if needed)
    animateProgressBars();
  }
}

// Autotype
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

// Progress Bar Animation
function animateProgressBars() {
  const progressBars = document.querySelectorAll(".progress");
  progressBars.forEach((bar) => {
    const progress = bar.getAttribute("data-progress"); // Get progress value
    bar.style.width = `${progress}%`; // Animate to the specified width

    // Update progress text
    const progressText = bar.nextElementSibling; // Get the sibling <span> element
    if (progressText && progressText.classList.contains("progress-text")) {
      progressText.textContent = `${progress}%`; // Update text content
    }
  });
}

// Trigger progress bar animation when Skills slide is active
swiper.on("slideChange", function () {
  if (swiper.activeIndex === 2) {
    // Skills slide index (adjust if needed)
    animateProgressBars();
  }
});

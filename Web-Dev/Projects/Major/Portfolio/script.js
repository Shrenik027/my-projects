//Mobile toggle

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const typed = new Typed(".auto-type", {
  strings: ["Shrenik!!"],
  typeSpeed: 150,
  backSpeed: 50,
  backDelay: 1000,
  cursorChar: "|",
  smartBackspace: true,
});

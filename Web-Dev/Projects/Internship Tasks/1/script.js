const canvas = document.getElementById("canvas");
const formContainer = document.getElementById("form-container");
const elementForm = document.getElementById("element-form");
const textContentInput = document.getElementById("text-content");
const fontSizeInput = document.getElementById("font-size");
const imageUrlInput = document.getElementById("image-url");
const buttonTextInput = document.getElementById("button-text");

let selectedElement = null;

// Function to show the form and populate it with element properties
function showForm(element) {
  formContainer.style.display = "block";
  if (element.dataset.type === "text") {
    textContentInput.value = element.textContent;
    fontSizeInput.value = parseInt(window.getComputedStyle(element).fontSize);
    imageUrlInput.style.display = "none";
    buttonTextInput.style.display = "none";
  } else if (element.dataset.type === "image") {
    imageUrlInput.value = element.querySelector("img").src;
    textContentInput.style.display = "none";
    fontSizeInput.style.display = "none";
    buttonTextInput.style.display = "none";
  } else if (element.dataset.type === "button") {
    buttonTextInput.value = element.querySelector("button").textContent;
    textContentInput.style.display = "none";
    fontSizeInput.style.display = "none";
    imageUrlInput.style.display = "none";
  }
}

// Function to hide the form
function hideForm() {
  formContainer.style.display = "none";
}

// Add click event to canvas elements
canvas.addEventListener("click", (e) => {
  const element = e.target.closest(".dropped-element");
  if (element) {
    selectedElement = element;
    showForm(element);
  }
});

// Form Submission
elementForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (selectedElement) {
    if (selectedElement.dataset.type === "text") {
      selectedElement.textContent = textContentInput.value;
      selectedElement.style.fontSize = `${fontSizeInput.value}px`;
    } else if (selectedElement.dataset.type === "image") {
      selectedElement.querySelector("img").src = imageUrlInput.value;
    } else if (selectedElement.dataset.type === "button") {
      selectedElement.querySelector("button").textContent =
        buttonTextInput.value;
    }
  }
  hideForm();
});

// script.js
const canvas = document.getElementById("canvas");
const propertiesPanel = document.getElementById("properties-panel");
const dynamicForm = document.getElementById("dynamic-form");
let selectedElement = null;

// Add drag-and-drop event listeners to sidebar elements
document.querySelectorAll(".element").forEach((element) => {
  element.addEventListener("dragstart", dragStart);
});

// Handle drag start
function dragStart(e) {
  e.dataTransfer.setData("text/plain", e.target.id); // Store the element ID
}

// Handle drag over
canvas.addEventListener("dragover", (e) => {
  e.preventDefault(); // Allow dropping
});

// Handle drop
canvas.addEventListener("drop", (e) => {
  e.preventDefault();
  const elementId = e.dataTransfer.getData("text/plain"); // Get the element ID
  const newElement = createElement(elementId); // Create the element
  canvas.appendChild(newElement); // Add it to the canvas
  selectElement(newElement); // Select the new element for editing

  // Remove the default message if it exists
  const defaultMessage = canvas.querySelector("p");
  if (defaultMessage) {
    defaultMessage.remove();
  }
});

// Create a new element based on the dragged element's ID
function createElement(elementId) {
  const element = document.createElement("div");
  element.classList.add("canvas-element");

  switch (elementId) {
    case "text-element":
      element.textContent = "New Text";
      element.style.fontSize = "16px";
      break;
    case "image-element":
      const img = document.createElement("img");
      img.src = "https://via.placeholder.com/150";
      img.alt = "Image";
      element.appendChild(img);
      break;
    case "button-element":
      element.textContent = "Button";
      element.style.padding = "10px 20px";
      element.style.backgroundColor = "#007BFF";
      element.style.color = "#fff";
      element.classList.add("button-element"); // Add button-element class
      break;
  }

  // Add click event to select the element for editing
  element.addEventListener("click", () => selectElement(element));
  return element;
}
// Select an element for editing
function selectElement(element) {
  selectedElement = element;
  propertiesPanel.style.display = "block"; // Show the properties panel
  generateForm(element); // Generate the appropriate form
}

// Generate the form based on the selected element type
function generateForm(element) {
  dynamicForm.innerHTML = ""; // Clear the previous form

  // Common positioning controls for all elements
  const positioningControls = `
    <label for="top">Top (px):</label>
    <input type="number" id="top" name="top" value="${
      parseInt(element.style.top) || 0
    }"><br>
    <label for="left">Left (px):</label>
    <input type="number" id="left" name="left" value="${
      parseInt(element.style.left) || 0
    }"><br>
  `;

  // Add width and height controls only for applicable elements
  let sizeControls = "";
  if (
    element.querySelector("img") ||
    element.classList.contains("button-element")
  ) {
    sizeControls = `
      <label for="width">Width (px):</label>
      <input type="number" id="width" name="width" value="${
        parseInt(element.style.width) || 150
      }"><br>
      <label for="height">Height (px):</label>
      <input type="number" id="height" name="height" value="${
        parseInt(element.style.height) || 150
      }"><br>
    `;
  }

  if (element.querySelector("img")) {
    // Image Form
    const img = element.querySelector("img");
    const form = document.createElement("form");
    form.innerHTML = `
      <label for="image-url">Image URL:</label>
      <input type="url" id="image-url" name="image-url" value="${img.src}"><br>
      ${positioningControls}
      ${sizeControls}
      <button type="submit">Apply Changes</button>
      <button type="button" id="remove-button">Remove Element</button>
    `;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      img.src = form["image-url"].value; // Update image URL
      updatePositioning(element, form); // Update positioning and size
    });
    dynamicForm.appendChild(form);
  } else if (element.classList.contains("canvas-element")) {
    if (element.textContent === "Button") {
      // Button Form
      const form = document.createElement("form");
      form.innerHTML = `
        <label for="button-text">Button Text:</label><br>
        <input type="text" id="button-text" name="button-text" value="${element.textContent}"><br>
        <label for="button-color">Button Color:</label>
        <input type="color" id="button-color" name="button-color" value="${element.style.backgroundColor}"><br>
        ${positioningControls}
        ${sizeControls}
        <button type="submit">Apply Changes</button>
        <button type="button" id="remove-button">Remove Element</button>
      `;
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        element.textContent = form["button-text"].value; // Update button text
        element.style.backgroundColor = form["button-color"].value; // Update button color
        updatePositioning(element, form); // Update positioning and size
      });
      dynamicForm.appendChild(form);
    } else {
      // Text Form
      const form = document.createElement("form");
      form.innerHTML = `
        <label for="text-content">Text Content:</label>
        <input type="text" id="text-content" name="text-content" value="${
          element.textContent
        }"><br>
        <label for="font-size">Font Size:</label>
        <input type="number" id="font-size" name="font-size" value="${parseInt(
          element.style.fontSize
        )}"><br>
        ${positioningControls}
        <button type="submit">Apply Changes</button>
        <button type="button" id="remove-button">Remove Element</button>
      `;
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        element.textContent = form["text-content"].value; // Update text content
        element.style.fontSize = `${form["font-size"].value}px`; // Update font size
        updatePositioning(element, form); // Update positioning (width and height ignored)
      });
      dynamicForm.appendChild(form);
    }
  }

  // Add event listener for the "Remove Element" button
  const removeButton = document.getElementById("remove-button");
  if (removeButton) {
    removeButton.addEventListener("click", () => {
      element.remove(); // Remove the element from the canvas
      dynamicForm.innerHTML = ""; // Clear the form
      propertiesPanel.style.display = "none"; // Hide the properties panel
    });
  }
}
// Update element positioning based on form inputs
function updatePositioning(element, form) {
  // Set position (applies to all elements)
  element.style.position = "absolute";
  element.style.top = `${form["top"].value}px`;
  element.style.left = `${form["left"].value}px`;

  // Apply width and height only to applicable elements
  if (
    element.querySelector("img") ||
    element.classList.contains("button-element")
  ) {
    element.style.width = `${form["width"].value}px`;
    element.style.height = `${form["height"].value}px`;
  }

  // If the element contains an image, update the image's width and height directly
  const img = element.querySelector("img");
  if (img) {
    img.style.width = `${form["width"].value}px`; // Set image width
    img.style.height = `${form["height"].value}px`; // Set image height
  }
}

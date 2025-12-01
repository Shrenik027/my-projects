//Using Text Content to update the blog title

const blogTirleEl = document.getElementById("title");

blogTirleEl.textContent = "New Blog Title"; //does not render tags

//change the background
blogTirleEl.style.background = "red";
blogTirleEl.style.color = "white";

//Using inner Html to add one more paraagraph with some HTml content

const paragraphEl = document.getElementById("paragraph");

paragraphEl.innerHTML += "<br> <strong>This is a new Paragraph text</strong>";

//Using innertext to modify comment Section (assume original commment is visible)
const firstcommentEl = document
  .getElementById("comment1")
  .querySelector(".commentText");

firstcommentEl.innerText = "Updated First Comment";

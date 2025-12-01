// example= you want to filter the images by author name

// get all the images

const imagesEl = document
  .getElementById("imageGallery")
  .querySelectorAll("img");

//create an array to store Images

let imagesByAlice = [];

//use the get attribute to filter images by author naem

imagesEl.forEach((img) => {
  const author = img.getAttribute("data-author");
  if (author === "Alice") {
    imagesByAlice.push(img);
  }
});
console.log(imagesByAlice);

//Hide images that are not by Alice

imagesEl.forEach((img) => {
  if (!imagesByAlice.includes(img)) {
    img.style.display = "none";
  }
});

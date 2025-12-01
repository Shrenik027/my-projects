//Select p element
const pEl = document.getElementById("textElement");

//addClass
function addClass() {
  pEl.classList.add("highlight");

  //removeClass
  function removeClass() {
    pEl.classList.remove("highlight");
  }

  //toggleClass
  function toggleClass() {
    pEl.classList.toggle("highlight");
  }

  //contains
  const isTrue = pEl.classList.contains("highlight");
  console.log(isTrue);
}

//replace

function replaceClass() {
  if (pEl.classList.contains("highlight")) {
    pEl.classList.replace("highlight", "rep");
  }
}

//List Item

function listItem() {
  alert("the first class is: " + pEl.classList.item(0));
}

//getvalue

function getValue() {
  console.log(pEl.classList.value);
}

//select Buttons
const button1El = document.getElementById("button1");
const button2El = document.getElementById("button2");

//use previous sibling to get the preceeding paragraph el

const text1El = button1El.previousSibling;
const text2El = button2El.previousSibling;
// console.log(text1El);
// console.log(text2El);

//change the text context

if (text1El.nodeType === 3) {
  text1El.textContent = "Text 1 has been updated";
}
if (text2El.nodeType === 3) {
  text2El.textContent = "Text 2 has been updated";
}

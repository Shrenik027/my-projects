// Setp 1: Select the list item using data attribute
const selectedItemEl = document.querySelector('[data-item="fruit"]');
// console.log(selectedItemEl);

//step2: navigate to parent <ul> element
const parentListEl = selectedItemEl.parentNode;
// console.log(parentListEl);

//step3: navigate to grandparent
const grandparentDiv = parentListEl.parentNode;
// console.log(grandparentDiv);

//step3: navigate to great-grandparent
const greatgrandparentDiv = grandparentDiv.parentNode;
console.log(greatgrandparentDiv);

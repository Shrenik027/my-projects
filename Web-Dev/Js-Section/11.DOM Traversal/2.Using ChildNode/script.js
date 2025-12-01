// Setp 1: Select the outer div using its id
const outerDivEl = document.getElementById("outerDiv");

//step2: navigate to first child which is text node
const firstChild = outerDivEl.childNodes[0];
// console.log(firstChild);

//step3: navigate to second child which is inner div
const innerDivEl = outerDivEl.childNodes[1];
console.log(innerDivEl);

//step3: select first child of inner div

const innerDivFirstChild = innerDivEl.childNodes[0];
console.log(innerDivFirstChild);

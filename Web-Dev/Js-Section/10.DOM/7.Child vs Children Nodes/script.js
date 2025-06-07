//Fetch the element with id = "parent"
const parentEl = document.querySelector("#parent");
//console.log(parentEl.childNodes);

// parentEl.childNodes.forEach((node) => console.log(node.nodeType));

//Fetch all child element nodes of parent element

console.log(parentEl.children);
const convertedHtmlCollection = Array.from(parentEl.children);
convertedHtmlCollection.forEach((el) => console.log(el));

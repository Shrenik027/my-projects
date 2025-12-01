//Accessing Parent Elements

const ParentEl = document.getElementById("parent");
//accessing the grandparent element
const grandparentEl = ParentEl.parentNode;

//Accessing Child Elements
const FirstchildEl = ParentEl.firstChild;
const LasttchildEl = ParentEl.lastChild;
console.log(FirstchildEl);
console.log(LasttchildEl);

//Accessing Elements Children only

const firstelementChild = ParentEl.firstElementChild;
console.log(firstelementChild);

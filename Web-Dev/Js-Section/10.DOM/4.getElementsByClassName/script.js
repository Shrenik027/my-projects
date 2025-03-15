//Selecting all Elements with the class name "Fiction"

const fictionBooksEl = document.getElementsByClassName("fiction");

//selecting all elements with the class name "non-fiction" within the nonfictionSection

const nonFictionEl = document.getElementById("nonFictionSection");

const nonfictionbooksinsectionEl =
  nonFictionEl.getElementsByClassName("non-fiction");
// console.log(nonfictionbooksinsectionEl[1]);

// console.log(fictionBooksEl);
//loop through html colection

//First convert into array

const fictionBooksElArr = Array.from(fictionBooksEl);

const fictionBooksElTitle = fictionBooksElArr.map((el) => el.innerHTML);

console.log(fictionBooksElTitle);

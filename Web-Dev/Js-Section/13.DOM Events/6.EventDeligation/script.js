//add single eventlistner to ul

document.getElementById("itemList").addEventListener("click", function (event) {
  const clickedEl = event.target;
  //check if the clicked element is list item
  //   console.log(clickedEl.tagName);
  if (clickedEl.tagName === "LI") {
    const itemNo = clickedEl.getAttribute("data-item");
    console.log(`You clicked item: ${itemNo}`);
  }
});

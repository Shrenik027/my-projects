//Add event listner to div

document.getElementById("parentDiv").addEventListener(
  "click",
  function (event) {
    alert("Div Clicked! Event Phase" + event.eventPhase);
  },
  true
);

//add event listener to ul

document.getElementById("list").addEventListener(
  "click",
  function (event) {
    alert("list Clicked! Event Phase" + event.eventPhase);
  },
  true
);

//add event listener to item1

document.getElementById("item1").addEventListener(
  "click",
  function (event) {
    alert("item1 Clicked! Event Phase" + event.eventPhase);
  },
  false
); //Bubbling Phase

//add event listener to item2

document.getElementById("item2").addEventListener(
  "click",
  function (event) {
    alert("item2 Clicked! Event Phase" + event.eventPhase);
  },
  false
); //Bubbling Phase

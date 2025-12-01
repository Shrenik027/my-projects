//Add event listner to div

document.getElementById("outerDiv").addEventListener(
  "click",
  function (event) {
    alert("OuterDiv Clicked! Event Phase" + event.eventPhase);
  },
  false
); //Bubbling Phase

document.getElementById("middleDiv").addEventListener(
  "click",
  function (event) {
    alert("MiddleDiv Clicked! Event Phase" + event.eventPhase);
  },
  false
); //Bubbling Phase

document.getElementById("innerDiv").addEventListener(
  "click",
  function (event) {
    alert("InnerDiv Clicked! Event Phase" + event.eventPhase);
    event.stopPropagation(); //stops event propogation
  },
  false
); //Bubbling Phase

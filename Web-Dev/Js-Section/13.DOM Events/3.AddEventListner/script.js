function addEvent() {
  console.log("click Event is called");
}

document.getElementById("clickButton").addEventListener("click", addEvent);

document
  .getElementById("doubleClickButton")
  .addEventListener("dblclick", () => {
    // console.log("doubleClick event is callled");
    console.log(this);
  });

//write for others

 // Adjust the path based on your file structure

var openText = document.getElementById("seeMore");
var extraText = document.getElementById("extra");
var lessWord = document.querySelector("#less");
var moreWord = document.querySelector("#more");

function opent() {
  extraText.classList.toggle("hide");
  moreWord.classList.toggle("hide");
  lessWord.classList.toggle("hide");
}
  // Use the typewriterfx function from the imported module
let elems = document.querySelectorAll(".glitch");

function startGlitch(event) {
  event.target.classList.add("text-glitch");
}

function stopGlitch(event) {
  event.target.classList.remove("text-glitch");
}

elems.forEach(elem => {
  elem.addEventListener("mouseover", startGlitch);
  elem.addEventListener("mouseout", stopGlitch);
});



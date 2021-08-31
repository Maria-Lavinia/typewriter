"use strict";

let numberOfIterations;
let iterator;
let character;
let text = document.querySelector("#typewriter").textContent;
document.querySelector("#typewriter").textContent="";
console.log(text);

init();

function init() {
  numberOfIterations = text.length;
  iterator = 0;
  loop();
}
function loop() {
  console.log("loop", iterator);
character = text[iterator];
iterator++;
document.querySelector("#typewriter").textContent += character;
  if (iterator < numberOfIterations) {
    setTimeout(loop, 500);
  }
}

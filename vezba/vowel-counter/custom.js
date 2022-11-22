"use strict";

const button = document.querySelector("#btn");
const input = document.querySelector("#input");

button.addEventListener("click", () => {
  vowelCounter(input.value);
});

function vowelCounter(str) {
  let strCorrect = str.toLowerCase();
  let counter = 0;
  let vowels = "aeiou";

  for (let i = 0; i < strCorrect.length; i++) {
    if (vowels.indexOf(strCorrect[i]) > -1) {
      counter++;
    }
  }

  alert("This string has " + counter + " vowels.");
}

"use strict";

const fields = document.querySelectorAll(".field");
const timeLeft = document.querySelector(".time-left");
const score = document.querySelector(".score");
let fieldID;
let currentScore = 0;
let time = 5;
let countDownTimer;

function randomField() {
  fields.forEach((field) => {
    field.classList.remove("mole");
  });

  let randomF = fields[Math.floor(Math.random() * 9)];
  randomF.classList.add("mole");
  fieldID = randomF.id;
}

function playGame() {
  let game = setInterval(randomField, 500);

  setTimeout(() => {
    clearInterval(game);
  }, time * 1000);

  countDownTimer = setInterval(countDown, 1000);
}

document.querySelector(".start-game").addEventListener("click", playGame);

fields.forEach((field) => {
  field.addEventListener("click", () => {
    if (field.id === fieldID) {
      currentScore++;
      score.innerHTML = currentScore;
    }
  });
});

function countDown() {
  time--;
  timeLeft.innerHTML = time;
  if (time == 0) {
    clearInterval(countDownTimer);

    fields.forEach((field) => {
      field.classList.remove("mole");
    });

    time = 5;
  }
}

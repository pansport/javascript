"use strict";

const compChoise = document.getElementById("comp-choise");
const yourChoise = document.getElementById("your-choise");
const result = document.getElementById("result");
const choises = document.querySelectorAll("button");
let yourResult;
let compResult;
let resultFinal;

choises.forEach((choise) => {
  choise.addEventListener("click", (event) => {
    yourResult = event.target.id;
    yourChoise.innerHTML = yourResult;
    compChoose();
    showResult();
  });
});

function compChoose() {
  const chose = Math.floor(Math.random() * 3) + 1;

  if (chose === 1) {
    compResult = "paper";
  }
  if (chose === 2) {
    compResult = "rock";
  }
  if (chose === 3) {
    compResult = "scissors";
  }

  compChoise.innerHTML = compResult;
}

function showResult() {
  if (yourResult === "paper" && compResult === "paper") resultFinal = "draw!";
  if (yourResult === "rock" && compResult === "rock") resultFinal = "draw!";
  if (yourResult === "scissors" && compResult === "scissors")
    resultFinal = "draw!";
  if (yourResult === "paper" && compResult === "rock") resultFinal = "you win!";
  if (yourResult === "rock" && compResult === "paper")
    resultFinal = "you lost!";
  if (yourResult === "rock" && compResult === "scissors")
    resultFinal = "you win!";
  if (yourResult === "paper" && compResult === "scissors")
    resultFinal = "you lost!";
  if (yourResult === "scissors" && compResult === "paper")
    resultFinal = "you win!";
  if (yourResult === "scissors" && compResult === "rock")
    resultFinal = "you lose!";

  result.innerHTML = resultFinal;
}

"use strict";

const cardArray = [
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "fries",
    img: "images/fries.png",
  },
];

let chosenCards = [];
let chosenCardsIds = [];
const cardsWon = [];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.getElementById("grid");
const resultDisplay = document.getElementById("result");

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    gridDisplay.appendChild(card);
  }
}
createBoard();

function flipCard() {
  let cardId = this.getAttribute("data-id");
  chosenCards.push(cardArray[cardId].name);
  chosenCardsIds.push(cardId);
  this.setAttribute("src", cardArray[cardId].img);
  if (chosenCards.length === 2) {
    setTimeout(checkMatch, 500);
  }
}

function checkMatch() {
  const cards = document.querySelectorAll("img");

  if (chosenCardsIds[0] === chosenCardsIds[1]) {
    alert("You clicked the same card!");
  }

  if (chosenCards[0] === chosenCards[1]) {
    cards[chosenCardsIds[0]].setAttribute("src", "images/white.png");
    cards[chosenCardsIds[1]].setAttribute("src", "images/white.png");
    cards[chosenCardsIds[0]].removeEventListener("click", flipCard);
    cards[chosenCardsIds[1]].removeEventListener("click", flipCard);

    cardsWon.push(chosenCards);
  } else {
    cards[chosenCardsIds[0]].setAttribute("src", "images/blank.png");
    cards[chosenCardsIds[1]].setAttribute("src", "images/blank.png");
  }

  resultDisplay.innerHTML = cardsWon.length;

  chosenCards = [];
  chosenCardsIds = [];

  if (cardsWon.length == cardArray.length / 2) {
    resultDisplay.innerHTML = "Congratulations, you won!";
  }
}

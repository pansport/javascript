"use strict";

const cardsArray = [
  {
    name: "cheeseburger",
    src: "images/cheeseburger.png",
  },
  {
    name: "fries",
    src: "images/fries.png",
  },
  {
    name: "ice-cream",
    src: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    src: "images/milkshake.png",
  },
  {
    name: "pizza",
    src: "images/pizza.png",
  },
  {
    name: "hotdog",
    src: "images/hotdog.png",
  },
  {
    name: "cheeseburger",
    src: "images/cheeseburger.png",
  },
  {
    name: "fries",
    src: "images/fries.png",
  },
  {
    name: "ice-cream",
    src: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    src: "images/milkshake.png",
  },
  {
    name: "pizza",
    src: "images/pizza.png",
  },
  {
    name: "hotdog",
    src: "images/hotdog.png",
  },
];
cardsArray.sort(() => 0.5 - Math.random());

const grid = document.getElementById("grid");
let chosenCards = [];
let chosenCardsIds = [];
let cardsWon = [];

function createCards() {
  for (let i = 0; i < cardsArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);

    grid.appendChild(card);
  }
}
createCards();

function flipCard() {
  const cardId = this.getAttribute("data-id");
  chosenCardsIds.push(cardId);
  this.setAttribute("src", cardsArray[cardId].src);
  chosenCards.push(cardsArray[cardId].name);

  if (chosenCards.length === 2) {
    setTimeout(checkCards, 500);
  }
}

function checkCards() {
  const cards = document.querySelectorAll("img");

  if (chosenCardsIds[0] === chosenCardsIds[1]) {
    alert("You chose the same card");
  }

  if (chosenCards[0] === chosenCards[1]) {
    cards[chosenCardsIds[0]].setAttribute("src", "images/white.png");
    cards[chosenCardsIds[1]].setAttribute("src", "images/white.png");

    cards[chosenCardsIds[0]].removeEventListener("click", flipCard);
    cards[chosenCardsIds[1]].removeEventListener("click", flipCard);

    cardsWon.push(chosenCards);
    document.querySelector("#result").innerHTML = cardsWon.length;
  } else {
    cards[chosenCardsIds[0]].setAttribute("src", "images/blank.png");
    cards[chosenCardsIds[1]].setAttribute("src", "images/blank.png");
  }

  chosenCards = [];
  chosenCardsIds = [];

  if (cardsWon.length === cardsArray.length / 2) {
    document.querySelector("#result").innerHTML = "You finished the game!";
  }
}

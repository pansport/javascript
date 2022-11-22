"use strict";

setInterval(setClock, 1000);

const hourHand = document.querySelector("[data-hour-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const secondHand = document.querySelector("[data-second-hand]");

function setClock() {
  const date = new Date();

  const second = date.getSeconds() / 60;
  const minute = (second + date.getMinutes()) / 60;
  const hour = (minute + date.getHours()) / 12;

  setRotation(hourHand, hour);
  setRotation(minuteHand, minute);
  setRotation(secondHand, second);
}

function setRotation(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360);
}

setClock();

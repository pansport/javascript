"use strict";

const inputElement = document.querySelector(".txt");
const submitBtn = document.querySelector(".submit");
const clearBtn = document.querySelector(".clear");

submitBtn.addEventListener("click", () => {
  const inputElementValue = inputElement.value;

  const html = `<li>${inputElementValue} <input type="button" value="X" class='delete-item' /></li>`;

  document.querySelector(".list-items").innerHTML += html;

  inputElement.value = "";

  document.querySelectorAll(".delete-item").forEach((item) => {
    item.addEventListener("click", (event) => {
      event.target.closest("li").remove();
    });
  });
});

clearBtn.addEventListener("click", () => {
  document.querySelector(".list-items").innerHTML = "";
});

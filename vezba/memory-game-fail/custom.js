"use strict";

const overlays = document.querySelectorAll(".overlay");
let opened = 0;
let ids = [];

overlays.forEach((overlay) => {
  overlay.addEventListener("click", () => {
    if (opened < 2) {
      overlay.style.display = "none";
      ids.push(overlay.dataset.id);
      opened++;
      if (opened == 2) {
        if (checkCards(ids)) {
          setTimeout(() => {
            alert("correct!");
            opened = 0;
          }, 500);
        } else {
          opened = 0;
          overlay.style.display = "grid";
        }
      }
    }
  });
});

function checkCards(idsList) {
  if (idsList[0] === idsList[1]) {
    return true;
  } else {
    return false;
  }
}

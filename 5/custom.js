"use strict";

const overlays = document.querySelectorAll(".overlay");

overlays.forEach((overlay) => {
  overlay.addEventListener("click", () => {
    overlay.style.display = "none";
    const id1 = overlay.dataset.id;
    console.log(id1);
    const id2 = overlay.dataset.id;
    console.log(id2);
  });
});

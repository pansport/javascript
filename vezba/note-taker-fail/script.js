"use strict";

let isEmpty = true;
let counter = 0;

document.querySelector(".addBtn").addEventListener("click", () => {
  let text = document.querySelector("#note").value;

  const html = `
  <div class="card" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">Note ${counter + 1}</h5>
      <p class="card-text">${text}</p>
      <button onclick='showModal(this)' type="button" class="btn btn-primary">View Details</button>
    </div>
  </div>
  `;

  if (isEmpty) {
    document.querySelector(".cards").innerHTML = "";
    isEmpty = false;
  }

  document.querySelector(".cards").innerHTML += html;
  counter++;
  document.querySelector("#note").value = "";
});

function showModal(element) {
  let text = document.querySelector("#note").value;
  console.log(text);

  document.querySelector(".popup-modal").style.display = "grid";
  document.querySelector(".overlay").style.display = "grid";

  document.querySelector(".modal-title").innerHTML = `Note ${counter}`;
  document.querySelector(".modal-text").innerHTML = text;
}

function closeModal() {
  document.querySelector(".popup-modal").style.display = "none";
  document.querySelector(".overlay").style.display = "none";
}

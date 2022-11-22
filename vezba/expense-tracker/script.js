"use strict";

const input1 = document.querySelector(".input-1-1");
const input2 = document.querySelector(".input-2-2");
const input3 = document.querySelector(".input-3-3");

const addBtn = document.querySelector(".addBtn");
const table = document.querySelector("table");

addBtn.addEventListener("click", () => {
  const input1Value = input1.value;
  let input3Value = input3.value;

  if (input1Value == "") {
    document.querySelector(".name").style.color = "red";
    setTimeout(() => {
      document.querySelector(".name").style.color = "black";
    }, 1000);
    return;
  }

  if (input3Value == "") {
    document.querySelector(".amount").style.color = "red";
    setTimeout(() => {
      document.querySelector(".amount").style.color = "black";
    }, 1000);
    return;
  }

  let date = new Date(input2.value);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const html = `
    <tr>
      <td>${input1Value}</td>
      <td>${day}.${month}.${year}.</td>
      <td>€${input3Value}</td>
      <td><button onclick='deleteExpense(this)' class='btn-x'>X</button></td>
    </tr>
  `;

  table.innerHTML += html;

  input1.value = "";
  input2.value = "";
  input3.value = "";
});

function deleteExpense(element) {
  element.closest("tr").remove();
}

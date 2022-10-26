'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (event) {
  event.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////

// creating and inserting elements

const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent
message.innerHTML = `We use cookies for improved functionality and analytics. <button class='btn btn--class-cookie'>Got it!</button>`;

document.querySelector('.header').append(message);

document.querySelector('.btn--class-cookie').addEventListener('click', () => {
  message.remove();
});

// styles

message.style.backgroundColor = '#37383d';
message.style.width = '103%';

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

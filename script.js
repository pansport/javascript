'use strict';

let number = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (guess > 0 && guess < 21) {
    if (!guess) {
      document.querySelector('.message').textContent = '⛔ No number!';
    } else if (guess === number) {
      document.querySelector('.message').textContent = '🎉Correct number!';
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = guess;

      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else if (guess !== number) {
      if (score > 1) {
        document.querySelector('.message').textContent =
          guess < number ? '📉To low!' : '📈To high!';
        score -= 1;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent = '💥You lost the game!';
        document.querySelector('.score').textContent = 0;
      }
    }
  } else {
    document.querySelector('.message').textContent = '⛔ Wrong number!';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';

  document.querySelector('.guess').value = '';

  document.querySelector('.message').textContent = 'Start guessing...';

  document.querySelector('.score').textContent = '20';
});

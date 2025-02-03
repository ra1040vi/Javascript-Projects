'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number!';
  }
  // when guess is correct
  else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    //css style manipulation
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    if (score > highscore) {
        highscore=score
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  // when guess is too high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.score').textContent = --score;
      document.querySelector('.message').textContent = '📈 Too High!';
    } else {
      document.querySelector('.message').textContent = '💥You Lost!';
      document.querySelector('.score').textContent = 0;
    }
  }
  // when guess is too low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.score').textContent = --score;
      document.querySelector('.message').textContent = '📉 Too low!';
    } else {
      document.querySelector('.message').textContent = '💥You Lost!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').style.width = '15rem';
});

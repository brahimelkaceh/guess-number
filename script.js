'use strict';
// ! 08/08/2022
let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let highScore = 0;

const displayMessage = function (classe, message) {
  document.querySelector(classe).textContent = message;
};

// ! Check Button :
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('.message', '⛔ No Number..!!');
  } else if (guess === secretNumber) {
    displayMessage('.number', secretNumber);
    displayMessage('.message', '✅ Correct Number..!!');

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      displayMessage('.highscore', highScore);
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '⬆ High Number..!!' : '⬇ Low Number..!!';
      score--;
      displayMessage('.score', score);
    } else {
      displayMessage('.score', 0);
      displayMessage('.message', '📛 Lost The Game..!!');
    }
  }
});

// ! CODING CHALLENGE 1
/*
* Implement a game rest functionality, so that the player can make a new guess!

! Your tasks:

? 1. Select the element with the 'again' class and attach a click event handler
? 2. In the handler function, restore initial values of the 'score' and 'secretNumber' variables
? 3. Restore the initial conditions of the message, number, score and guess input fields
? 4. Also restore the original background color (#222) and number width (15rem)
*/

// ! Agian Button
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  document.querySelector('.guess').value = '';
  displayMessage('.score', score);
  displayMessage('.message', 'Start Guessing...');
  displayMessage('.number', '?');

  document.querySelector('body').style.backgroundColor = '#333';
  document.querySelector('.number').style.width = '15rem';
});
// ! 12/08/2022

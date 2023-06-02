const windowWidth = window.innerWidth || document.documentElement.clientWidth;
const windowHeight = window.innerHeight || document.documentElement.clientHeight;
const cakeImage = document.querySelector('.target');
const cakeWidth = 100;
const cakeHeight = 100;
const maxX = windowWidth - cakeWidth;
const maxY = windowHeight - cakeHeight;
const randomX = Math.floor(Math.random() * maxX);
const randomY = Math.floor(Math.random() * maxY);

const scoreArea = document.getElementById('score');
let score = localStorage.getItem('score');

cakeImage.style.top = randomY + 'px';
cakeImage.style.left = randomX + 'px';

cakeImage.addEventListener('click', function() {
const modal = document.getElementById('modal');
modal.style.display = 'block';
    score++; // Exercise 4
    scoreArea.textContent = score;
    localStorage.setItem('score', score); //Exercise 5
});

const playAgainBtn = document.getElementById('play-again-btn');
playAgainBtn.addEventListener('click', function() {
const modal = document.getElementById('modal');
modal.style.display = 'none';

const newRandomX = Math.floor(Math.random() * maxX);
const newRandomY = Math.floor(Math.random() * maxY);
cakeImage.style.top = newRandomY + 'px';
cakeImage.style.left = newRandomX + 'px';
});


// Exercise 5
/*
 window.addEventListener('beforeunload', function() {
    localStorage.setItem('score', score);
});
*/

// Exercise 6
const resetScoreButton = document.getElementById('reset-score-btn');
resetScoreButton.addEventListener('click', function() {
    score = 0;
    scoreArea.textContent = score;
    localStorage.setItem('score', score);
});
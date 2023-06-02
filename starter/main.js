// const windowWidth = window.innerWidth || document.documentElement.clientWidth;
// const windowHeight =
//   window.innerHeight || document.documentElement.clientHeight;

const LS_SCORE_KEY = "score";

const scoreArea = document.getElementById("score");
const modal = document.getElementById("modal");
const resetScoreButton = document.getElementById("reset-score-btn");
const playAgainBtn = document.getElementById("play-again-btn");
const cakeImage = document.querySelector(".target");

const cakeWidth = 100;
const cakeHeight = 100;
// const maxX = windowWidth - cakeWidth;
// const maxY = windowHeight - cakeHeight;

function setRandomPositionToCake() {
  const randomX = Math.floor(Math.random() * window.innerWidth - cakeWidth);
  const randomY = Math.floor(Math.random() * window.innerHeight - cakeHeight);
  cakeImage.style.top = randomY + "px";
  cakeImage.style.left = randomX + "px";
}

function hideModal() {
  modal.style.display = "none";
}

function showModal() {
  modal.style.display = "block";
}

setRandomPositionToCake();

let score = parseInt(localStorage.getItem(LS_SCORE_KEY)) || 0;

cakeImage.addEventListener("click", function () {
  showModal();
  score++; // Exercise 4
  scoreArea.textContent = score;
  localStorage.setItem(LS_SCORE_KEY, score); //Exercise 5
});

playAgainBtn.addEventListener("click", function () {
  hideModal();
  setRandomPositionToCake();
});

// Exercise 5
/*
 window.addEventListener('beforeunload', function() {
    localStorage.setItem('score', score);
});
*/

// Exercise 6
resetScoreButton.addEventListener("click", function () {
  score = 0;
  scoreArea.textContent = score;
  localStorage.removeItem(LS_SCORE_KEY);

  hideModal();
  setRandomPositionToCake();
});

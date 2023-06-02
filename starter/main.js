const windowWidth = window.innerWidth || document.documentElement.clientWidth;
const windowHeight = window.innerHeight || document.documentElement.clientHeight;
const cakeImage = document.querySelector('.target');
const cakeWidth = 100;
const cakeHeight = 100;
const maxX = windowWidth - cakeWidth;
const maxY = windowHeight - cakeHeight;
const randomX = Math.floor(Math.random() * maxX);
const randomY = Math.floor(Math.random() * maxY);

cakeImage.style.top = randomY + 'px';
cakeImage.style.left = randomX + 'px';

cakeImage.addEventListener('click', function() {
const modal = document.getElementById('modal');
modal.style.display = 'block';
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
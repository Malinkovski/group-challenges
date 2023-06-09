let logos = [
  {
    id: 1,
    img: "./img/apple.png",
  },
  {
    id: 2,
    img: "./img/brainster.png",
  },
  {
    id: 3,
    img: "./img/github.png",
  },
  {
    id: 4,
    img: "./img/google.png",
  },
  {
    id: 5,
    img: "./img/lyft.png",
  },
  {
    id: 6,
    img: "./img/paypal.png",
  },
  {
    id: 7,
    img: "./img/ripple.png",
  },
  {
    id: 8,
    img: "./img/spotify.png",
  },
  {
    id: 9,
    img: "./img/tesla.png",
  },
  {
    id: 10,
    img: "./img/uber.png",
  },
  {
    id: 11,
    img: "./img/youtube.png",
  },
];

const ARRAY_SIZE = 4;

const clearHTML = (item) => (item.innerHTML = "");

function printArray(logos) {
  logos.forEach((logo) => {
    const item = document.createElement("div");
    item.classList.add("col-3", "mb-3", "logo-item");

    const logoImage = document.createElement("img");
    logoImage.src = logo.img;

    item.appendChild(logoImage);
    logosArray.appendChild(item);
  });
}
//Exercise I

const logosArray = document.querySelector(".logos-wrapper");
printArray(logos);

//Exercise II

const shuffledLogosArray = logos.sort(() => Math.random() - 0.5);
clearHTML(logosArray);
printArray(logos);

//Exercise III

const chunksOfArrays = [];

for (let i = 0; i < shuffledLogosArray.length; i += ARRAY_SIZE) {
  const arrayChunk = shuffledLogosArray.slice(i, i + ARRAY_SIZE);
  chunksOfArrays.push(arrayChunk);
}
console.log(chunksOfArrays);

//Exercise IV
/* 
const firstChunkArray = chunksOfArrays[0];
clearHTML(logosArray);
printArray(firstChunkArray);
 */
//Exercise V

let counter = 0;

function showChunk() {
  clearHTML(logosArray);
  const currentChunk = chunksOfArrays[counter];
  printArray(currentChunk);
  counter++;
  if (counter >= chunksOfArrays.length) {
    counter = 0;
  }
}

setInterval(showChunk, 6000);
showChunk();
//animal data
let animalData = [
  ["Lion", "./img/lion.jpg", "4"],
  ["Australian pelican", "./img/pelican.jpg", "5"],
  ["Campo flicker", "./img/flicker.jpg", "4"],
  ["Deer, Rein", "./img/deer.jpg", "5"],
  ["Panda, John", "./img/panda.jpg", "6"],
  ["Owl, Charlie", "./img/owl.jpg", "6"],
  ["Red-tailed phascogale", "./img/zebra.jpg", "7"],
  ["Greylag goose", "./img/goose.jpg", "7"],
  ["Cat, toddy", "./img/cat.jpg", "7"],
  ["Hippopotamus", "./img/hippo.jpg", "5"],
];
// Function to create an animal box
function createBox(animal) {
  // Create outer div
  const outerDiv = document.createElement('div');
  outerDiv.className = 'col-6 col-md-3 text-center mb-4';

  // Create inner div
  const innerDiv = document.createElement('div');
  innerDiv.className = 'border h-100 p-2';

  // Create h2 element for animal name
  const nameHeading = document.createElement('h2');
  nameHeading.className = 'h4 mt-3';
  nameHeading.textContent = animal[0];

  // Create img element for animal image
  const imageElement = document.createElement('img');
  imageElement.style.maxWidth = '100%';
  imageElement.src = animal[1];

  // Create p element for animal age
  const ageParagraph = document.createElement('p');
  ageParagraph.textContent = `Age: ${animal[2]}`;

  // Append elements to the inner div
  innerDiv.appendChild(nameHeading);
  innerDiv.appendChild(imageElement);
  innerDiv.appendChild(ageParagraph);

  // Append the inner div to the outer div
  outerDiv.appendChild(innerDiv);

  // Return the fully-created animal box
  return outerDiv;
}

// Get the boxes wrapper element
const boxesWrapper = document.querySelector('.boxes-wrapper');

// Iterate through the animal data and create animal boxes
animalData.forEach((animal) => {
  const animalBox = createBox(animal);
  boxesWrapper.appendChild(animalBox);
});


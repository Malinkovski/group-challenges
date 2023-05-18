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

const boxesWrapperClear = () => {
  const boxesWrapper = document.querySelector('.boxes-wrapper');
  boxesWrapper.innerHTML = '';
}
const newAnimalBoxes = () =>{
  animalData.forEach((animal) => {
    const animalBox = createBox(animal);
    boxesWrapper.appendChild(animalBox);
  });
};


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
newAnimalBoxes();


function removeContainer () {
  boxesWrapperClear();
  animalData = [];
}
document.addEventListener('DOMContentLoaded', function() {
  const removeAll = document.getElementById('remove-all');
  removeAll.addEventListener('click', removeContainer);
});

//Exercise III

const addAnimal = document.getElementById('add-animal');

addAnimal.addEventListener('click', () => {
  const animalName = document.getElementById('animal-name').value;
  const animalImg = document.getElementById('animal-img').value;
  const animalAge = document.getElementById('animal-age').value;
  
  if (animalName && animalImg && animalAge) {
    const newAnimal = [animalName, animalImg, animalAge];
    animalData.push(newAnimal);
    
    boxesWrapperClear();
    newAnimalBoxes();
    
    document.getElementById('animal-name').value = '';
    document.getElementById('animal-img').value = '';
    document.getElementById('animal-age').value = ''; 
  }
});

//Exercise IV




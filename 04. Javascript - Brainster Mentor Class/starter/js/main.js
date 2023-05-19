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

const boxesWrapper = document.querySelector(".boxes-wrapper");

const clearBoxesWrapper = () => {
  boxesWrapper.innerHTML = "";
};

const renderAnimalBoxes = (data) => {
  data.forEach((animal) => {
    const animalBox = createBox(animal);
    boxesWrapper.appendChild(animalBox);
  });
};

// Function to create an animal box
function createBox(animal) {
  // Create outer div
  const outerDiv = document.createElement("div");
  outerDiv.className = "col-6 col-md-3 text-center mb-4";

  // Create inner div
  const innerDiv = document.createElement("div");
  innerDiv.className = "border h-100 p-2";

  // Create h2 element for animal name
  const nameHeading = document.createElement("h2");
  nameHeading.className = "h4 mt-3";
  nameHeading.textContent = animal[0];

  // Create img element for animal image
  const imageElement = document.createElement("img");
  imageElement.style.maxWidth = "100%";
  imageElement.src = animal[1];

  // Create p element for animal age
  const ageParagraph = document.createElement("p");
  ageParagraph.textContent = `Age: ${animal[2]}`;

  // Append elements to the inner div
  innerDiv.appendChild(nameHeading);
  innerDiv.appendChild(imageElement);
  innerDiv.appendChild(ageParagraph);
  // innerDiv.append(nameHeading, imageElement, ageParagraph);

  // Append the inner div to the outer div
  outerDiv.appendChild(innerDiv);

  // Return the fully-created animal box
  return outerDiv;
}

// Iterate through the animal data and create animal boxes
renderAnimalBoxes(animalData);

function removeContainer() {
  clearBoxesWrapper();
  animalData = [];
}

const removeAll = document.getElementById("remove-all");
removeAll.addEventListener("click", removeContainer);

//Exercise III

const addAnimal = document.getElementById("add-animal");

addAnimal.addEventListener("click", () => {
  const animalName = document.getElementById("animal-name");
  const animalImg = document.getElementById("animal-img");
  const animalAge = document.getElementById("animal-age");

  if (animalName.value && animalImg.value && animalAge.value) {
    const newAnimal = [animalName.value, animalImg.value, animalAge.value];
    animalData.push(newAnimal);

    clearBoxesWrapper();
    renderAnimalBoxes(animalData);

    animalName.value = "";
    animalImg.value = "";
    animalAge.value = "";
  } else {
    alert("Please enter all data");
  }
});

//Exercise IV
const filterButtons = document.querySelectorAll(".filters button");

filterButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const filter = event.target.getAttribute("data-age");

    clearBoxesWrapper();

    if (filter === "all") {
      renderAnimalBoxes(animalData);
    } else {
      const filteredAnimals = animalData.filter(
        (animal) => animal[2] === filter
      );
      renderAnimalBoxes(filteredAnimals);
    }
  });
});

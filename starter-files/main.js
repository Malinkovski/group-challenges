// Your code starts here
// Que class
class Que {
  static queCount = 0;

  constructor() {
    Que.queCount++;
    this.name = `Que ${Que.queCount}`;
    this.age = Math.floor(Math.random() * (50 - 14 + 1)) + 14;
  }

  isAdult() {
    return this.age >= 18;
  }
}

const queList = [];

//Guest class
class Guest {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const guestList = [];

// Que function
function addToQue() {
  const queInstance = new Que();
  queList.push(queInstance);

  const queTableBody = $("#queList tbody");
  const newRow = $("<tr>");
  const nameCell = $("<td>").text(queInstance.name);
  const ageCell = $("<td>").text(queInstance.age);
  const actionsCell = $("<td>");

  const acceptButton = $("<button>")
    .addClass("btn btn-sm btn-outline-success")
    .text("Accept")
    .hide();

  const declineButton = $("<button>")
    .addClass("btn btn-sm btn-outline-danger mr-1")
    .text("Decline");

  actionsCell.append(acceptButton, declineButton);

  newRow.append(nameCell, ageCell, actionsCell);
  queTableBody.append(newRow);

  if (queInstance.isAdult()) {
    acceptButton.show();
  }
}

$(document).ready(function () {
  $("#addToQue").click(addToQue);
});


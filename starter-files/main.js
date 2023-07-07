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

function createTableRow(name, age) {
  const newRow = $("<tr>");
  const nameCell = $("<td>").text(name);
  const ageCell = $("<td>").text(age);
  newRow.append(nameCell, ageCell);
  return newRow;
}

// Que function
function addToQue() {
  const queInstance = new Que();
  queList.push(queInstance);

  const queTableBody = $("#queList tbody");
  const newRow = createTableRow(queInstance.name, queInstance.age);
  const actionsCell = $("<td>");

  const acceptButton = $("<button>")
    .addClass("btn btn-sm btn-outline-success mr-lg-1")
    .text("Accept")
    .hide();

  const declineButton = $("<button>")
    .addClass("btn btn-sm btn-outline-danger")
    .text("Decline");

  actionsCell.append(acceptButton, declineButton);
  newRow.append(actionsCell);
  queTableBody.append(newRow);

  if (queInstance.isAdult()) {
    acceptButton.show();
  }
}

$(document).ready(function () {
  $("#addToQue").click(addToQue);
});

//exercise III

//AddToGuestList function
function addToGuestList(name, age) {
  const guestInstance = new Guest(name, age);
  guestList.push(guestInstance);

  if (guestList.length >= 15) {
    alert("Sorry we are full, come back another night!");
    return;
  }

  const guestTableBody = $("#guestList tbody");
  const newRow = createTableRow(guestInstance.name, guestInstance.age);
  const actionsCell = $("<td>");

  const editButton = $("<button>")
    .addClass("btn btn-sm btn-outline-info")
    .text("Edit");

  actionsCell.append(editButton);
  newRow.append(actionsCell);
  guestTableBody.append(newRow);
}

//Accept button
$("#queList").on("click", ".btn-outline-success", function () {
  const row = $(this).closest("tr");
  const name = row.find("td:first-child").text();
  const age = +row.find("td:nth-child(2)").text();
  addToGuestList(name, age);
  row.remove();
});

//Decline button
$("#queList").on("click", ".btn-outline-danger", function () {
  $(this).closest("tr").remove();
});

//Exercise IV/V

//Edit/Save button

function editName() {}

$("#guestList").on("click", ".btn-outline-info", function () {
  const row = $(this).closest("tr");
  const nameCell = row.find("td:first-child");
  const originalNameValue = nameCell.text();  

  if ($(this).text() === "Edit") {
    const nameInputForm = $("<input>")
      .addClass("form-control-sm form-control")
      .val(originalNameValue);
          
    nameCell.text("").append(nameInputForm);
    $(this).text("Save");
  } else {
    const nameInputFormValue = nameCell.find("input").val();
    const indexOfRow = row.index();
    guestList[indexOfRow].name = nameInputFormValue;
    nameCell.text(nameInputFormValue);
    $(this).text("Edit");
  }
});

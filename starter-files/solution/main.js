// Your code starts here
// Que class
class Que {
  static queCount = 0;

  constructor() {
    Que.queCount++;
    this.name = `Que ${Que.queCount}`;
    this.age = Math.floor(Math.random() * (50 - 14 + 1)) + 14;
    this.id = new Date().valueOf()
  }

  isAdult() {
    return this.age >= 18;
  }
}

const queTableBody = $("#queList tbody");
const guestTableBody = $("#guestList tbody");

let queList = [];
const guestList = [];

//Guest class
class Guest {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.editing = false
  }
}



function createTableRow(name, age) {
  const newRow = $("<tr>");
  const nameCell = $("<td>").text(name);
  const ageCell = $("<td>").text(age);
  newRow.append(nameCell, ageCell);
  return newRow;
}


function removeItemFromList(list = [], item) {
  return list.filter(i => i.id !== item.id)
}

// Que function
function addToQue() {
  const queInstance = new Que();
  queList.push(queInstance);


  const newRow = createTableRow(queInstance.name, queInstance.age);
  const actionsCell = $("<td>");

  const acceptButton = $("<button>")
    .addClass("btn btn-sm btn-outline-success mr-lg-1")
    .text("Accept")
    .hide();


  acceptButton.on('click', function () {
    addToGuestList(queInstance.name, queInstance.age);
    queList = removeItemFromList(queList, queInstance)
    newRow.remove();
  })

  const declineButton = $("<button>")
    .addClass("btn btn-sm btn-outline-danger")
    .text("Decline");


  declineButton.on('click', function () {
    queList = removeItemFromList(queList, queInstance)
    newRow.remove()
  })

  actionsCell.append(acceptButton, declineButton);
  newRow.append(actionsCell);
  queTableBody.append(newRow);

  if (queInstance.isAdult()) {
    acceptButton.show();
  }
}

$("#addToQue").click(addToQue);


//exercise III

//AddToGuestList function
function addToGuestList(name, age) {
  const guestInstance = new Guest(name, age);
  guestList.push(guestInstance);

  if (guestList.length >= 15) {
    alert("Sorry we are full, come back another night!");
    return;
  }


  const newRow = createTableRow(guestInstance.name, guestInstance.age);
  const actionsCell = $("<td>");

  const editButton = $("<button>")
    .addClass("btn btn-sm btn-outline-info")
    .text("Edit");

  editButton.on('click', function () {

    const nameCell = newRow.find("td:first-child")

    if (guestInstance.editing) {
      // update guestList and table

      const nameInputFormValue = nameCell.find("input").val();

      guestInstance.name = nameInputFormValue;

      nameCell.text(nameInputFormValue);
      editButton.text("Edit");

      guestInstance.editing = false
    } else {
      // prepare row for updateing
      const nameInputForm = $("<input>")
        .addClass("form-control-sm form-control")
        .val(guestInstance.name);

      nameCell.text("").append(nameInputForm);
      editButton.text("Save");

      guestInstance.editing = true
    }

  })

  actionsCell.append(editButton);
  newRow.append(actionsCell);
  guestTableBody.append(newRow);
}

//Accept button
// $("#queList").on("click", ".btn-outline-success", function () {
//   const row = $(this).closest("tr");
//   const name = row.find("td:first-child").text();
//   const age = +row.find("td:nth-child(2)").text();
//   addToGuestList(name, age);
//   row.remove();
// });

//Decline button
// $("#queList").on("click", ".btn-outline-danger", function () {
//   $(this).closest("tr").remove();
// });

//Exercise IV/V

//Edit/Save button

// $("#guestList").on("click", ".btn-outline-info", function () {
//   const row = $(this).closest("tr");
//   const nameCell = row.find("td:first-child");
//   const originalNameValue = nameCell.text();

//   if ($(this).text() === "Edit") {
//     const nameInputForm = $("<input>")
//       .addClass("form-control-sm form-control")
//       .val(originalNameValue);

//     nameCell.text("").append(nameInputForm);
//     $(this).text("Save");
//   } else {
//     const nameInputFormValue = nameCell.find("input").val();
//     const indexOfRow = row.index();
//     guestList[indexOfRow].name = nameInputFormValue;
//     nameCell.text(nameInputFormValue);
//     $(this).text("Edit");
//   }
// });


// // mutating vs non-mutating methods

// const arr = [1, 2, 3]

// const filteredArr = arr.filter(i => i >= 2)

// console.log(arr) // [1, 2, 3]
// console.log(filteredArr) // [2, 3]

// arr.splice(0, 2)
// console.log(arr) // [3]

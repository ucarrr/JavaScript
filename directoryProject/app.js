//Select element
const name = document.getElementById("name");
const surname = document.getElementById("surname");
const mail = document.getElementById("mail");

const personList = document.querySelector(".person-list");

//console.log(name, surname, mail);

const form = document.getElementById("form-directory");

//Event Listener
form.addEventListener("submit", saveFunction);

let selectedLine = undefined;

personList.addEventListener("click", doPersontransactions);

//For all persons Array
const allPersonArray = [];

function doPersontransactions(event) {
  //console.log(event.target);
  if (event.target.classList.contains("btn--delete")) {
    console.log("Delete Button");

    const deletedTr = event.target.parentElement.parentElement;
    const deletedMail =
      event.target.parentElement.previousElementSibling.textContent;
    directoryDelete(deletedTr, deletedMail);
  } else if (event.target.classList.contains("btn--edit")) {
    console.log("Edit Button");
    document.querySelector(".saveAndUpdate").value = "Update";

    const selectedTr = event.target.parentElement.parentElement;
    const updatedMail = selectedTr.cells[2].textContent;
    name.value = selectedTr.cells[0].textContent;
    surname.value = selectedTr.cells[1].textContent;
    mail.value = selectedTr.cells[2].textContent;

    selectedLine = selectedTr;
  }
}

function directoryDelete(deletedTrElement, deletedMailElement) {
  console.log(deletedTrElement, deletedMailElement);
  //deletedTrElement.remove();

  allPersonArray.forEach((person, index) => {
    if (person.mail === deletedMailElement) {
      allPersonArray.splice(index, 1);
    }
  });

  console.log("Deleted Element in Array...");
  console.log(allPersonArray);

  clearInput();

  document.querySelector(".saveAndUpdate").value = "kaydet";
}

function saveFunction(e) {
  e.preventDefault();
  console.log("Submit");

  const addedPerson = {
    name: name.value,
    surname: surname.value,
    mail: mail.value,
  };

  //console.log(addedPerson);
  const result = checkData(addedPerson);
  if (result.status) {
    console.log("Devamkee");
    if (selectedLine) {
      //update
      updatedPerson(addedPerson);
    } else {
      createPerson(addedPerson);
    }

    //createInfo(result.message, result.status);
  } else {
    console.log(result.message);
    createInfo(result.message, result.status);
  }
}

function updatedPerson(person) {
  //person parametresinde seçilen kişinin yeni değerleri

  for (let i = 0; i < allPersonArray.length; i++) {
    if (allPersonArray[i].mail === selectedLine.cells[2].textContent) {
      allPersonArray[i] = person;
      break;
    }
  }

  selectedLine.cells[0].textContent = person.name;
  selectedLine.cells[1].textContent = person.surname;
  selectedLine.cells[2].textContent = person.mail;

  document.querySelector(".saveAndUpdate").value = "save";
  selectedLine = undefined;
}

function checkData(person) {
  //objects in uses
  for (const val in person) {
    if (person[val]) {
      console.log(person[val]);
    } else {
      return {
        status: false,
        message: "Dont leave blank space",
      };
      console.log("Boş değer var");
    }
  }
  clearInput();
  return {
    status: true,
    message: "Successful",
  };
}

function createInfo(message, status) {
  const cretedInfo = document.createElement("div");
  cretedInfo.textContent = message;
  cretedInfo.className = "info";
  /* if (status) {
    cretedInfo.classList.add('info--succses');
} else {
    cretedInfo.classList.add('info--error');
} */
  cretedInfo.classList.add(status ? "info--succses" : "info--error");
  document.querySelector(".container").insertBefore(cretedInfo, form);

  //setTimeout setInterval
  setTimeout(function () {
    console.log("workk..");
    const deletedDiv = document.querySelector(".info");
    if (deletedDiv) {
      deletedDiv.remove();
    }
  }, 2000);
}

function clearInput() {
  name.value = "";
  surname.value = "";
  mail.value = "";
}

function createPerson(addedPerson) {
  const trElementCreate = document.createElement("tr");
  trElementCreate.innerHTML = `
    <td>${addedPerson.name}</td>
    <td>${addedPerson.surname}</td>
    <td>${addedPerson.mail}</td>
    <td>
      <button class="btn btn--edit">
        <i class="far fa-regular fa-pen-to-square"></i>
      </button>
      <button class="btn btn--delete">
        <i class="far fa-solid fa-trash-can"></i>
      </button>
    </td>
    `;

  personList.appendChild(trElementCreate);
  allPersonArray.push(addedPerson);
  createInfo("Successful", true);
  console.log(addedPerson);
}

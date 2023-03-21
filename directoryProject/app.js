//Select element
const name = document.getElementById("name");
const surname = document.getElementById("surname");
const mail = document.getElementById("mail");

const personList = document.getElementById("person-list");

//console.log(name, surname, mail);

const form = document.getElementById("form-directory");

//Event Listener
form.addEventListener("submit", saveFunction);

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
    createPerson(addedPerson);
    createInfo(result.message, result.status);
   
  } else {
    console.log(result.message);
    createInfo(result.message, result.status);
  }
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

function createPerson(person) {
  const trElementCreate = document.createElement("tr");
  trElementCreate.innerHTML = `
    <td>${person.name}</td>
    <td>${person.surname}</td>
    <td>${person.mail}</td>
    <td>
      <button class="btn btn--edit">
        <i class="fa-regular fa-pen-to-square"></i>
      </button>
      <button class="btn btn--delete">
        <i class="fa-solid fa-trash-can"></i>
      </button>
    </td>
    `;

    personList.appendChild(trElementCreate);
}

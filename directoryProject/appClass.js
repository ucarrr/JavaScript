//With ES6

class Person {
  constructor(name, surname, mail) {
    this.name = name;
    this.surname = surname;
    this.mail = mail;
  }
}

class Util {
  static checkFreeFields(...fields) {
    let result = true;
    fields.forEach((field) => {
      if (field.length == 0) {
        result = false;
        return result;
      }
    });

    return result;
  }

  static checkEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(String(email).toLowerCase());
  }
}

class UI {
  constructor() {
    this.name = document.getElementById("name");
    this.surname = document.getElementById("surname");
    this.mail = document.getElementById("mail");
    this.saveButton = document.querySelector(".saveAndUpdate");
    this.form = document.getElementById("form-directory");
    this.form.addEventListener("submit", this.saveAndUpdate.bind(this));
    this.store = new Store();

    this.personList = document.querySelector(".person-list");
    this.personList.addEventListener("click", this.updateOrDelete.bind(this));
    //update ve delete buttonlarına basıldığında
    //ilgili tr elementi burada tutulur
    this.printPersonUI();
    this.selectedLine = undefined;
  }
  clearInputs() {
    this.name.value = "";
    this.surname.value = "";
    this.mail.value = "";
  }
  updateOrDelete(e) {
    // console.log(this);
    const clickedBtn = e.target;
    if (clickedBtn.classList.contains("btn--delete")) {
      console.log("DEleted");
      this.selectedLine = clickedBtn.parentElement.parentElement;
      //console.log(this.selectedLine);
      this.deletePersonUI();
    } else if (clickedBtn.classList.contains("btn--edit")) {
      //console.log("Edit");
      this.selectedLine = clickedBtn.parentElement.parentElement;

      this.saveButton.value = "Update";
      this.name.value = this.selectedLine.cells[0].textContent;
      this.surname.value = this.selectedLine.cells[1].textContent;
      this.mail.value = this.selectedLine.cells[2].textContent;
    }
  }
  updatedPersonUI(person) {
    const result = this.store.personUpdate(
      person,
      this.selectedLine.cells[2].textContent
    );

    if (result) {
      this.selectedLine.cells[0].textContent = person.name;
      this.selectedLine.cells[1].textContent = person.surname;
      this.selectedLine.cells[2].textContent = person.mail;

      this.clearInputs();
      this.selectedLine = undefined;

      this.saveButton.value = "save";
    } else {
      this.createInfo("mail is being used by someone else, not update", false);
    }
  }
  deletePersonUI() {
    this.selectedLine.remove();
    // console.log(this.selectedLine);
    const deletedMail = this.selectedLine.cells[2].textContent;
    // console.log(deletedMail);
    this.store.deletePerson(deletedMail);
    this.clearInputs();
    this.selectedLine = undefined;
  }
  printPersonUI() {
    this.store.allPersonArr.forEach((person) => {
      this.addToIUPerson(person);
    });
  }
  saveAndUpdate(e) {
    e.preventDefault();
    console.log("Work...");

    const person = new Person(
      this.name.value,
      this.surname.value,
      this.mail.value
    );
    console.log(person);

    const result = Util.checkFreeFields(
      person.name,
      person.surname,
      person.mail
    );

    const isEmailTrue = Util.checkEmail(this.mail.value);

    console.log(this.mail.value + "email result: " + isEmailTrue);

    if (result) {
      if (!isEmailTrue) {
        this.createInfo("Please Enter Valid Email..", false);
        return;
      }
      if (this.selectedLine) {
        //seçilen satır undefined değilse güncellenecek demektir
        this.updatedPersonUI(person);
        this.createInfo("Upasddate", true);
      } else {
        const result = this.store.addPerson(person);
        console.log(result + " blablabla");
        if (result) {
          this.createInfo("Successfully", true);

          //seçilen satır undefined ise ekleme yapılacaktır
          this.addToIUPerson(person);
          this.clearInputs();
        } else {
          this.createInfo("Mail is being used by someone else", false);
        }
      }
      // console.log("Successfuly");
      // console.log(this);
    } else {
      console.log("There is Free Space");
      this.createInfo("There is Free Space", false);
    }
  }

  addToIUPerson(person) {
    const createdTrElement = document.createElement("tr");
    createdTrElement.innerHTML = `
    <td>${person.name}</td>
    <td>${person.surname}</td>
    <td>${person.mail}</td>
    <td>
      <button class="btn btn--edit">
        <i class="far fa-regular fa-pen-to-square"></i>
      </button>
      <button class="btn btn--delete">
        <i class="far fa-solid fa-trash-can"></i>
      </button>
    </td>
    `;
    this.personList.appendChild(createdTrElement);
  }

  createInfo(message, status) {
    const createdInfo = document.createElement("div");
    createdInfo.textContent = message;
    createdInfo.className = "info";

    createdInfo.classList.add(status ? "info--succses" : "info--error");
    document.querySelector(".container").insertBefore(createdInfo, this.form);

    //setTimeout setInterval
    setTimeout(function () {
      console.log("workk..");
      const deletedDiv = document.querySelector(".info");
      if (deletedDiv) {
        deletedDiv.remove();
      }
    }, 2000);
  }
}

class Store {
  //uygulama ilk açıldığında verileri getirir

  constructor() {
    this.allPersonArr = this.getPerson();
  }

  getPerson() {
    let allPersonlocal;
    if (localStorage.getItem("AllPerson") === null) {
      allPersonlocal = [];
    } else {
      allPersonlocal = JSON.parse(localStorage.getItem("AllPerson"));
    }

    //this.allPersonArr = allPersonlocal;

    return allPersonlocal;
  }

  addPerson(person) {
    if (this.isEmailUniqe(person.mail)) {
      this.allPersonArr.push(person);
      localStorage.setItem("AllPerson", JSON.stringify(this.allPersonArr));
      return true;
    } else {
      return false;
    }
  }
  deletePerson(mail) {
    this.allPersonArr.forEach((person, index) => {
      if (person.mail === mail) {
        this.allPersonArr.splice(index, 1);
      }
    });
    localStorage.setItem("AllPerson", JSON.stringify(this.allPersonArr));
  }
  personUpdate(updatedPerson, mail) {
    if (this.isEmailUniqe(updatedPerson.mail)) {
      console.log(
        updatedPerson.mail + "is checking and result : you can update"
      );

      this.allPersonArr.forEach((person, index) => {
        if (person.mail === mail) {
          this.allPersonArr[index] = updatedPerson;
          localStorage.setItem("AllPerson", JSON.stringify(this.allPersonArr));
          return true;
        }
      });

      return true;
    } else {
      console.log(
        updatedPerson.mail + "is checking and result : you can not update"
      );

      return false;
    }
  }

  isEmailUniqe(mail) {
    const result = this.allPersonArr.find((person) => {
      return person.mail === mail;
    });

    //Mail Uniqe değilse -->Bu Mail kullanılıyor
    if (result) {
      console.log(mail, " Mail is not available ");
      console.log("Not Uniqe");
      return false;
    } else {
      console.log(mail, " Mail available ");
      return true;
    }
  }
}

document.addEventListener("DOMContentLoaded", function (e) {
  const screen = new UI();
});

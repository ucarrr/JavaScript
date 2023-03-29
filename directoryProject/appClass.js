//With ES6

class Person {
  constructor(name, surname, mail) {
    this.name = name;
    this.surname = surname;
    this.mail = mail;
  }
}


class Util{
    static checkFreeFields(...fields){

    }
}

class UI {
  constructor() {
    this.name = document.getElementById("name");
    this.surname = document.getElementById("surname");
    this.mail = document.getElementById("mail");
    this.saveButton = document.querySelector(".saveAndUpdate");
    this.form = document
      .getElementById("form-directory")
      .addEventListener("submit", this.saveAndUpdate);
    this.store = new Store();
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
  }
}

class Store {
  //uygulama ilk açıldığında verileri getirir

  constructor() {
    this.allPersonArr = [];
  }

  getPerson() {
    let allPersonlocal;
    if (localStorage.getItem("AllPerson") === null) {
      allPersonlocal = [];
    } else {
      allPersonlocal = JSON.parse(localStorage.getItem("AllPerson"));
    }

    this.allPersonArr = allPersonlocal;

    return allPersonlocal;
  }

  addPerson(person) {
    const allPersonLocal = this.getPerson();
    allPersonLocal.push(person);
    localStorage.setItem("AllPerson", JSON.stringify(allPersonLocal));
  }
}

document.addEventListener("DOMContentLoaded", function (e) {
  const screen = new UI();
});

const fs = require("fs");

const add = function (name, tel) {
  console.log("name: " + name + " Tel no: " + tel);

  const personArr = readPersonToFile();

  const checkTelNumber = personArr.filter(function (person) {
    return person.tel === tel;
  });

  if (checkTelNumber.length === 0) {
    personArr.push({
      name: name,
      tel: tel,
    });
    writePersonTOFile(personArr);
  } else {
    console.log(tel + " tel number alreay have");
  }
};

const deleteName = function (tel) {
  const allPeople = readPersonToFile();
  const rewWriteFilePeople = allPeople.filter(function (person) {
    return person.tel !== tel;
  });

  if (allPeople.length > rewWriteFilePeople.length) {
    console.log("People Found and delete");
    writePersonTOFile(rewWriteFilePeople);
  } else {
    console.log("Deleting Tel Not Found: " + tel);
  }
};

const show = function (name) {
  console.log("person name shown: " + name);
  const personArr = readPersonToFile();
  const findPeson = personArr.find(function (person) {
    return (person.name === name);
  });

  if (findPeson) {
    console.log("Found Person Tel: " + findPeson.tel);
  } else {
    console.log("Person Not Found");
  }
};

const list = function () {
  console.log("Telephone Directory List");
  const personArr = readPersonToFile();
  personArr.forEach(function (person) {
    console.log("Name: " + person.name + " Tel Number: " + person.tel);
  });
};

const writePersonTOFile = function (personArr) {
  const jsonData = JSON.stringify(personArr);
  fs.writeFileSync("people.json", jsonData);
};

const readPersonToFile = function () {
  try {
    //Work senkron --> readFileSync
    const dataBuffer = fs.readFileSync("people.json");
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
  } catch (e) {
    return [];
  }
};

module.exports = {
  add: add,
  deleteName: deleteName,
  show: show,
  list: list,
};

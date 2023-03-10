let arr = [1, 2, 3];

console.log("Array : " + arr);

//first class function
const multiplyByTwo = function (number) {
  return number * 2;
};

const divideByTwo = function (number) {
  return number / 2;
};

const addThree = function (number) {
  return number + 3;
};

const arraysOperation = function (arr, func) {
  let tempArr = [];
  for (let i = 0; i < arr.length; i++) {
   //tempArr[i] = arr[i] + 3;
    tempArr[i] = func(arr[i]);
  }
  console.log(tempArr);
};

 
//Higher order function : parametre olarak fonksiyon alan ve/veya
//return olarak fonksiyon dödüren fonksiyonlardır
//arraysOperation higher order fonksiyondur
//multiplyByTwo, divideByTwo ve addThree fonksiyonları callback fonksiyonlarıdır

arraysOperation(arr, multiplyByTwo);
arraysOperation(arr, divideByTwo);
arraysOperation(arr, addThree);

console.log("*****************************");
//foreach

let number = [1, 2, 3, 4, 5, 6];

console.log("Foreach");

number.forEach(function (number, i) {
  console.log(number, i);
});

/* 
//Yukarıdaki mantık
function functionTakesTwoParameters(number, index) {
  console.log(number, index);
}

number.forEach(functionTakesTwoParameters) 

*/

console.log("-----------------------");
console.log("My foreach");

//Higher order function : parametre olarak fonksiyon alan
printArray(number, function (value, index) {
  console.log("Value: " + value + " index: " + index);
});

//Kendi foreach fonksiyonumuz
function printArray(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i);
  }
}

//console.log();
console.log(
  "-------------------------------------------------------------------------------------------------"
);

//*********************************************************************************************** */

//Arrays

//map function
console.log("Map funtion");

const number2 = [1, 2, 3, 4];

const newNumber = number2.map(function (number) {
  return number * 2;
});

console.log(number2);
console.log(newNumber);

const book = [
  { name: "ince Mehmet", numberOfPage: 555 },
  { name: "Kaşağı", numberOfPage: 999 },
  { name: "Aya Yolculuk", numberOfPage: 755 },
];

const newBookName = book.map(function (book) {
  return book.name;
});

console.log(newBookName);

const persons = [
  { name: "Yaşar", surName: "Kemal" },
  { name: "Ömer", surName: "seyfettin" },
  { name: "Jules", surName: "Verne" },
];

const newPersons = persons.map(
  (person) => person.name + " " + person.surName
);

console.log(newPersons);

console.log("My map");

function myMap(arr, func) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(func(arr[i]));
  }

  return newArr;
}

const newMymap = myMap(number2, function (number) {
  return number * 10;
});

console.log(newMymap);

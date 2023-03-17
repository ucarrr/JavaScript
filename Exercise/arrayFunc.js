//map: in Higher order callback page

console.log("Array Filter");
//Array Filter
const plants = [
  { name: "üzüm", type: "meyve" },
  { name: "çilek", type: "meyve" },
  { name: "muz", type: "meyve" },
  { name: "ıspanak", type: "sebze" },
  { name: "kereviz", type: "sebze" },
];

const fruits = plants.filter((plant) => {
  return plant.type === "meyve";
});

const vegetables = plants.filter(function (plant) {
  return plant.type === "sebze";
});

console.log(fruits);
console.log(vegetables);

console.log("*******************************");
console.log("My Filter");

function myFilter(arr, filterCondition) {
  const tempArr = [];
  for (let i = 0; i < arr.length; i++) {
    const result = filterCondition(arr[i], "sebze");
    if (result) {
      tempArr.push(arr[i]);
    }
  }

  return tempArr;
}

function filtre(plant, condition) {
  return plant.type === condition;
}

const myFruit = myFilter(plants, filtre);

console.log(myFruit);
console.log("*******************************");

console.log("find");

const persons1 = [
  { id: 1, name: "emre1" },
  { id: 11, name: "emre11" },
  { id: 111, name: "emre111" },
  { id: 1111, name: "emre1111" },
  { id: 11111, name: "emre11111" },
  { id: 12, name: "emre12" },
  { id: 13, name: "emre13" },
  { id: 14, name: "emre14" },
];

const result = persons1.find(function (person) {
  return person.id === 111;
});
console.log(result);

console.log("*******************************");

console.log("Reduce");

const numbers = [1, 2, 3, 4, 5];

const total = numbers.reduce(function (sum, curr, index) {
  return (sum = sum + curr);
},0);

console.log(total);
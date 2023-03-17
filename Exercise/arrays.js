let carBrand = ["bmw", "audi", "mercedes"];

console.log(carBrand);

console.log("Car Brand" + carBrand.toString());

console.log(carBrand.join(" | "));

carBrand.push("Volvo"); //new element add array last index

console.log("Car Brand" + carBrand.toString());

let sizeArray = carBrand.push("toyata");

console.log(
  "Car Brand" + carBrand.toString() + " size of array : " + sizeArray
);

let deletedElement = carBrand.pop(); //carBrand.pop delete last element

console.log(carBrand.join(" | ") + " deletedElement " + deletedElement);

carBrand.shift(); // delete fist element

carBrand.unshift("ferrari"); //new alement array 0 index

delete carBrand[1];
console.log("Car Brand" + carBrand.toString() + " " + carBrand[1]);

//carBrand.splice()

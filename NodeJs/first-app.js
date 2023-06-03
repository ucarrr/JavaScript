//const name=require('./module.js');

const myModule = require("./module.js");

function sayHello() {
  console.log("Maraba");
  //console.log(window);
  global.console.log("Heyyy");
}

sayHello();

console.log(myModule.name);
myModule.sum(15, 10);
myModule.sub(15, 10);

console.log(myModule.personel);

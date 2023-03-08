function sayHello() {
  console.log("Maraba");
}
sayHello();

const sayHelloVarriable = function () {
  console.log("Hello Varriable function");
};

sayHelloVarriable();

const fatArrow = () => {
  console.log("Hello fatArrow function");
};

fatArrow();

const getSquareVarriable = function (number) {
  return number * number;
};

console.log(getSquareVarriable(5));

const getSquareVarriableFatArrow = (number) => {
  return number * number;
};

console.log(getSquareVarriableFatArrow(8));

const getSquareVarriableFatArrowShort = (number) => number * number;

console.log(getSquareVarriableFatArrowShort(9));

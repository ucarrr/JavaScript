console.log("Events");
document.querySelector(".link").addEventListener("click", function (e) {
  console.log("Click Event");
  let val = e;
  console.log(val);
  e.preventDefault();
});

document.querySelector(".link").addEventListener("click", clickEventFunc);
document.querySelector(".link").addEventListener("dblclick", clickEventFunc);
document.querySelector(".link").addEventListener("mousedown", clickEventFunc);
document.querySelector(".link").addEventListener("mouseup", clickEventFunc);

//link dışındakilerde çalışmıyor
document.querySelector(".link").addEventListener("mouseenter", clickEventFunc);
document.querySelector(".link").addEventListener("mouseleave", clickEventFunc);

//link dışındakilerdede çalışıyor
document
  .querySelector(".container")
  .addEventListener("mouseover", clickEventFunc);
document
  .querySelector(".container")
  .addEventListener("mouseout", clickEventFunc);

document
  .querySelector(".container")
  .addEventListener("mousemove", changeBackgroundColor);

function clickEventFunc(e) {
  let val = e.type;

  console.log(val);
  e.preventDefault();
}

function changeBackgroundColor(e) {
  document.querySelector(
    "#event-title"
  ).textContent = `X: ${e.clientX} Y: ${e.clientY}`;
  document.querySelector(".container").style.backgroundColor = `rgb(${
    e.clientX % 255
  }, ${e.clientY % 255}, ${(e.clientX + e.clientX) % 255})`;
}

//Keyboard and Form Event
console.log("Keyboard and Form Event");

const myForm = document.querySelector("#form2ID");
const myName = document.querySelector("#name2");

myForm.addEventListener("submit", catchEvent);

function catchEvent(e) {
  console.log(myName.value);
  console.log("Event Name: " + e);
  document.querySelector(".link2").textContent = myName.value;
  e.preventDefault;
}

//Key Down , UP, Press
console.log("Key Down and UP");

/* 

myName.addEventListener("keydown", catchEvent2);
myName.addEventListener("keyup", catchEvent2);
myName.addEventListener("keypress", catchEvent2);

myName.addEventListener("focus", catchEvent2);
myName.addEventListener("blur", catchEvent2);


myName.addEventListener("cut", catchEvent2);
myName.addEventListener("paste", catchEvent2); 

*/

myName.addEventListener("input", catchEvent2); //Her şeyde tetiklenir focus hariç

function catchEvent2(e) {
  //console.log(myName.value);
  console.log(e.target.value); //<==> console.log(myName.value) --> e.targer = myName

  console.log("Event Name: " + e.type);
  e.preventDefault;
}

const myCity = document.querySelector("#city");

myCity.addEventListener("change", catchEvent2);


console.log('------------------------------------------------------------');

console.log('Event Bubbling and Delegation ');


//Event Bubbling ve Delegation Kavramları
//Event Bubbling: en alttaki childtan başlayıp bütün parentları çağırıyor --> item -> child -> parent 
//yukarı doğru yayıla yayıla ilerliyor

//Event Delegation: tam tersi aşağı doğru inmiyor ama yukarı doğru gidiyor 

document.querySelector(".parent").addEventListener("click", (e) => {
  console.log("parent");
});

document.querySelector(".child").addEventListener("click", (e) => {
  console.log("child");
});

document.querySelector(".item").addEventListener("click", (e) => {
  console.log("item");
});



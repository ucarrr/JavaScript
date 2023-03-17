/*
    DOM Concept
    Document Object Model 
    Browser tarafından oluşturulan node/elementlerin ağacıdır
    JS ile DOM yapısındaki elemanlar okunabilir, değiştirilebilir veya sıfırdan oluşturulabilir
*/

let value;

value = window;

value = window.document;
console.log(value);

console.log(document.getElementById("title"));

const title = document.getElementById("title");

//css değiştirme
title.style.backgroundColor = "black";
title.style.color = "white";
title.style.padding = "2rem";

//content değiştirme

title.textContent = "This is a new Title";
const newTitleText = title.textContent;
console.log(title.textContent);

title.innerText = "This is innerText a new Title"; //textContent as same
title.innerHTML = '<img src="chess_figures_dark_130841_240x320.jpg" />';

console.log(document.querySelector("h1"));
console.log(document.querySelector("#formID"));

const myList = document.querySelector("li");
myList.style.color = "red";

//Tek bir tane eleman seçiyor
document.querySelector("li:last-child").style.color = "yellow";
document.querySelector("li:nth-child(2)").style.color = "orange";
document.querySelector("li:nth-child(3)").style.color = "purple";
document.querySelector("li:nth-child(odd)").style.color = "teal";
document.querySelector("li:nth-child(even)").style.color = "green";

//Creating a New Element

const newElementCreation = document.createElement("li");

newElementCreation.className = "liste-item";
newElementCreation.id = "new-id";

newElementCreation.textContent = "Muğla";

document.querySelector("ul").appendChild(newElementCreation);
console.log(newElementCreation);

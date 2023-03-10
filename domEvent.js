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

//local And Session Storage

//local storage: veriler kod veya kullanıcı tarafından silinir
//Session Storage: veriler browser açıp kapanınca silinir
console.log("local And Session Storage");

localStorage.setItem("Name", "Emre");
localStorage.setItem("Age", "27");

sessionStorage.setItem("City", "Antalya");

console.log(localStorage.getItem("Name"));

localStorage.removeItem("Age");
//localStorage.clear();// Hepsini siler

const ulList = document.querySelector(".list");
const ulNameArray = JSON.parse(localStorage.getItem("nameList"));

if (ulNameArray != null) {
  ulNameArray.forEach(function (name) {
    const newLi = document.createElement("li");
    newLi.textContent = name;
    ulList.appendChild(newLi);
  });
}

document.querySelector("#form").addEventListener("submit", function (e) {
  const newName = document.querySelector(".nameClass").value;
  let nameArray;

  if (localStorage.getItem("nameList") === null) {
    nameArray = [];
  } else {
    nameArray = JSON.parse(localStorage.getItem("nameList"));
  }

  //JSON.parse()//Verilen string değeri json dönüştürüyor
  //JSON.stringify() --> json'ı string dönüştürüyor.

  nameArray.push(newName);

  localStorage.setItem("nameList", JSON.stringify(nameArray));

  //localStorage.setItem("nameList", newName);

  const newLi = document.createElement("li");
  newLi.textContent = newName;
  ulList.appendChild(newLi);
  e.preventDefault();
});

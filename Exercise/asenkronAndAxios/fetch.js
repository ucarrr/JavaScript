console.log("fetch");

const btnTextGET = document.getElementById("btn-txt-get");

const btnJsonGET = document.getElementById("btn-json-get");

btnTextGET.addEventListener("click", getText);
btnJsonGET.addEventListener("click", getJSON);

const resultDiv = document.getElementById("result");

function getText(e) {
  e.preventDefault();
  /* 
  const fetchResult = fetch("deneme.txt");
  fetchResult.then((response) => {
    const responseText = response.text();
    responseText.then((result) => {
      console.log(result);
    });
    console.log(response);
  });
  console.log(fetchResult); 
  */

  fetch("deneme.txt")
    .then((response) => response.text())
    .then((result) => (resultDiv.innerText = result))
    .catch((err) => console.log(err));
}

function getJSON(e) {
  fetch("student.json")
    .then((response) => response.json())
    .then((result) => {
      let output = "";
      console.log(result);
      result.forEach((student) => {
        output += `Student Name: ${student.name} ${student.id} \n`;
      });
      resultDiv.innerText = output;
    });
}

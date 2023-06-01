console.log("fetch");

const btnTextGET = document.getElementById("btn-txt-get");

const btnJsonGET = document.getElementById("btn-json-get");

const btnApiGET = document.getElementById("btn-api-get");

const btnApiPOST = document.getElementById("btn-api-post");

btnTextGET.addEventListener("click", getText);
btnJsonGET.addEventListener("click", getJSON);
btnApiGET.addEventListener("click", getJSONfromAPI);
btnApiPOST.addEventListener("click", JSONDataPost);

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

function getJSONfromAPI(e) {
  e.preventDefault();
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json()) //Json'a Dönüştürür
    .then((result) => printScreen(result));
}

function printScreen(data) {
  let output = "";

  data.forEach((user) => {
    output += `<li>${user.name}</li>`;
  });
  resultDiv.innerHTML = output;
}

/* 
function JSONDataPost(e) {
  e.preventDefault();
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "Deneme",
      body: "body alanı",
      userID: 5,
    }),
    headers: { "content-type": "application/json" },
  })
    .then((response) => response.json())
    .then((reult) => console.log(reult));
}
 */

async function JSONDataPost(e) {
  e.preventDefault();
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "Deneme",
      body: "body alanı",
      userID: 5,
    }),
    headers: { "content-type": "application/json" },
  });

  const result = await response.json();
  console.log(result);
}

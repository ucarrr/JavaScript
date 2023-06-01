console.log("Axios");
//https://github.com/axios/axios

const btnAxiosGET = document.getElementById("btn-axios-get");

const btnAxiosPOST = document.getElementById("btn-axios-post");

const btnAxiosPUT = document.getElementById("btn-axios-put");

const btnAxiosPATCH = document.getElementById("btn-axios-patch");

const btnAxiosDELETE = document.getElementById("btn-axios-delete");

const btnAxiosSameTime = document.getElementById("btn-axios-sameTime");

const btnAxiosHEADER = document.getElementById("btn-axios-header");

const btnAxiosERROR = document.getElementById("btn-axios-error");

const btnAxiosRESETTEXT = document.getElementById("btn-axios-reset");

btnAxiosGET.addEventListener("click", getData);

btnAxiosPOST.addEventListener("click", postData);

btnAxiosPUT.addEventListener("click", putData);

btnAxiosPATCH.addEventListener("click", patchData);

btnAxiosDELETE.addEventListener("click", deleteData);

btnAxiosSameTime.addEventListener("click", sameTimeData);

btnAxiosRESETTEXT.addEventListener("click", resetTEXT);

const resultAxiosDiv = document.getElementById("resultAxios");



function getData() {
  /*
   axios({
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/users",
    params: {
      _limit: 2,
    },
  })
    .then((response) => printScreen(response))
    .catch((err) => console.log(err))
    .then(() => console.log("GET isteği tamamlandı")); 
    
    */

  /*     
    axios.get("https://jsonplaceholder.typicode.com/users",{
        params:{
            _limit:1,
        }
    })
    .then((response) => printScreen(response))
    .catch((err) => console.log(err))
    .then(() => console.log("GET isteği tamamlandı"));  */

  axios("https://jsonplaceholder.typicode.com/users?_limits=1") //Axios Bütün yapılar default GET
    .then((response) => printScreen(response))
    .catch((err) => console.log(err))
    .then(() => console.log("GET isteği tamamlandı"));
}

function postData() {
  axios
    .post("https://jsonplaceholder.typicode.com/users", {
      name: "Muhammet UÇAR",
      username: "ucar07",
      email: "deneme@gmail.com",
    })
    .then((response) => {
      printScreen(response);
      console.log(response);
    })
    .catch((err) => console.log(err))
    .then(() => console.log("POST isteği tamamlandı"));
}

function putData() {
  //PUT aşağıdaki verileri güncelliyor ve kullanıcının diğer verilerini siliyor
  //Yani id 1 olan kullanıcının verilerini aşağıdaki gibi oluyor diğer verileri hepsi siliniyor
  //company, phone, website verileri siliniyor
  axios
    .put("https://jsonplaceholder.typicode.com/users/1", {
      name: "Muhammet UÇAR",
      username: "ucar07",
      email: "deneme@gmail.com",
    })
    .then((response) => {
      printScreen(response);
      console.log(response);
    })
    .catch((err) => console.log(err))
    .then(() => console.log("PUT isteği tamamlandı"));
}

function patchData() {
  //PATCH ta sadece aşağıdaki verileri güncelliyor
  //Yani id 1 olan kullanıcının aşağıdaki verilerini güncelliyor güncellemek istemedilerimiz ise
  //Aynı kalıyor company, phone, website verileri aynı kalıyor
  axios
    .patch("https://jsonplaceholder.typicode.com/users/1", {
      name: "Muhammet UÇAR",
      username: "ucar07",
      email: "deneme@gmail.com",
    })
    .then((response) => {
      printScreen(response);
      console.log(response);
    })
    .catch((err) => console.log(err))
    .then(() => console.log("PATCH isteği tamamlandı"));
}

function deleteData() {
  axios
    .delete("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => {
      printScreen(response);
      console.log(response);
    })
    .catch((err) => console.log(err))
    .then(() => console.log("DELETE isteği tamamlandı"));
}

function sameTimeData() {
  /* axios
    .all([
      axios.get("https://jsonplaceholder.typicode.com/users"),
      axios.get("https://jsonplaceholder.typicode.com/posts"),
    ])
    .then((response) => {
      printScreen(response[0]);
      console.log(response[0].data);
      console.log(response[1].data);
    })
    .catch((err) => console.log(err))
    .then(() => console.log("SAME TIME isteği tamamlandı")); */

  axios
    .all([
      axios.get("https://jsonplaceholder.typicode.com/users"),
      axios.get("https://jsonplaceholder.typicode.com/posts"),
    ])
    .then(
      axios.spread((users, posts) => {
        console.log(users.data);
        console.log(posts.data);
        printScreen(users);
        printScreen(posts);
      })
    )
    .catch((err) => console.log(err))
    .then(() => console.log("SAME TIME isteği tamamlandı"));
}

function printScreen(response) {
  let output = "";

  //JSON.stringify Bir js değerini JSON formatında bir string dönüştürür.
  output += `Status: ${response.status} \n
             Headers: ${JSON.stringify(response.headers, null, 20)} \n 
             Config: ${JSON.stringify(response.config)} \n
             Data: ${JSON.stringify(response.data)}
             `;

  resultAxiosDiv.innerText = output;
}

function resetTEXT(e) {
  e.preventDefault();
  resultAxiosDiv.innerText = "";
}

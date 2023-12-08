//Callback => Bir fonkisyona parametre olarak verdiğimiz ve daha geri çağırdığımız fonksiyondur.

console.log("Start");

getUser(1245, (userObj) => {
  console.log("Getirilen user " + userObj.name);
  getCourse(userObj.name, (courseArr) => {
    console.log("Kurs dizisi: " + courseArr);
  });
});

function getUser(id, callback) {
  console.log(id + " idli user getiriliyor");
  setTimeout(() => {
    callback({ id: id, name: "Muhammet" });
  }, 1500);
}

function getCourse(username, callback) {
  console.log(username + " Kişinin kursları getiriliyor");
  setTimeout(() => {
    callback(["JAVA", "JS", "C"]);
  }, 2000);
}

console.log("Finish");

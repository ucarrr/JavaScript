//Promise
console.log("Promise");

const myPromise = new Promise((resolve, reject) => {
  //Uzun sürecek işlem buraya yazılır

  setTimeout(() => {
    //console.log("3 saniyelik işlem bitti");
    //resolve("3 saniyelik işlem bitti");
    //resolve({ name: "emere", id: 1 });

    reject("Hata veriyor");
  }, 3000);
});

myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

console.log("====================================");
console.log("Student Example");
console.log("====================================");

function getStudent() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const arr = [];

      for (let i = 0; i < 30; i++) {
        arr.push({ name: "student" + (i + 1), id: i + 1 });
      }

      //resolve(arr);
      reject("Hata VAr");
    }, 2000);
  });
}

getStudent()
  .then((studentArr) => {
    console.log(studentArr);
  })
  .catch((err) => console.log(err));

console.log("====================================");
console.log("Promise yapısının sunduğu fonksiyonlar");
console.log("====================================");

const promiseSuccesfull = Promise.resolve("Succesfull Promise");
const promiseError = Promise.reject("Error");

promiseSuccesfull.then((snc) => console.log(snc));

promiseError
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("3 saniyelik işlem bittiiiiii");
  }, 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("6 saniyelik işlem bitti");
  }, 6000);
});

//Promisler den en son hagisi biterse onu bekliyor. ve her ikisinide yayınlıyor
//en uzun süre kadar bekler ve yayınlar
Promise.all([p1, p2]).then((result) => console.log(result));

//Promisler hangisi daha önce biterse onu veriyor
Promise.race([p1, p2]).then((result) => console.log(result));

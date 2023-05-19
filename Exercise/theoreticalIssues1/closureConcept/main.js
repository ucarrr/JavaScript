//Closure

//Bir fonksiyonda bulunan local değişkenlerin fonksiyon return edildikten sonra bile saklanmasıdır.

//Bir fonksiyonun kendi lexical scope alanı dışında çağrılsa bile lexical scope'nu hatırlayabilmesi
//ve de bu alana erişebilmesidir.

//Closure; kendi parent function'ı çalıştırılıp sonlansa bile parent scope'a erişebilen bir fonksiyondur.

const multipleTwo = (num) => num * 2;

const n1 = multipleTwo(9);

const n2 = multipleTwo(8);

console.log(n1, n2);

//Bu yapı ==> Higher order function : parametre olarak fonksiyon alan veya geriye bir fonksiyon dödüren yapılar
const out = () => {
  let counter = 0;

  const increase = () => {
    counter++;
    console.log(counter);
  };

  return increase;
};

const result = out(); //out return increase function
//Bu yüzden result = increase function oluyor

const r2 = result();
result();
result();
result();

//Closure Example 1

console.log("====================================");
console.log("Closure Example 1");
console.log("====================================");

const sumOfNumber = () => {
  console.log("Function Start...");

  const a = 20,
    b = 30;

  const sum = () => {
    console.log("Toplam: " + (a + b));
  };
  setTimeout(sum, 6000);
  //return sum;
  console.log("Function Finish...");
};

//sumOfNumber()();
sumOfNumber();

console.log("====================================");
console.log("Closure Example 2");
console.log("====================================");

const operateFunction = () => {
  console.log("Fonksiyon Başladı.");

  let counter = 0;

  const h3 = document.querySelector("h3");
  const h2 = document.querySelector("h2");

  h3.addEventListener("click", () => {
    counter++;
    console.log("Arttır: " + counter);
  });
  h2.addEventListener("click", () => {
    counter--;
    console.log("Azalt: " + counter);
  });

  console.log("Fonksiyon Bitti.");
};

operateFunction();

console.log("====================================");
console.log("Closure Example 3");
console.log("====================================");

const calculater = (s1, s2) => {
  function sum() {
    console.log("Toplam: " + s1 + s2);
  }
  function multiplication() {
    console.log("multiplication: " + s1 * s2);
  }

  return {
    sum: sum,
    multiplication: multiplication,
  };
};

const app = calculater(5, 7);

console.log(app);
app.multiplication();
app.sum();

calculater(9, 5).multiplication();

console.log("====================================");
console.log("Closure Example 2");
console.log("====================================");

function timer() {
  let startTime = Date.now();

  function long() {
    let elapsedTime = Date.now() - startTime;
    console.log("Geçen zaman: " + elapsedTime);
  }
  return long;
}

const timeApp = timer();

for (let i = 0; i < 50000; i++) {
  let temp = Math.random() * 50000;
}

timeApp();

console.log("====================================");
console.log("Closure Faydaları");
console.log("====================================");

//Closure Faydaları
//1- Memory 2-Encapsulation

/* function findStudent(id) {
  const studentArr = new Array(10)
    .fill({ name: "", id: 0 })
    .map(function (std, index) {
      return {
        name: "student " + index,
        id: index,
      };
    });

  console.log("Dizi oluşturuldu ve de dolduruldu");
  console.log(studentArr);
}

findStudent(50); */

let db;

function workOnes() {
  let counter = 0;

  return function () {
    if (counter > 0) {
      console.log("db bağlantısı zaten yapıldığı için işlem yapılmayacak");
      return;
    } else {
      counter++;
      db = "baglanıldı";
      console.log("db bağlantısı yapıldı");
    }
  };
}

const initialize = workOnes();
initialize();
initialize();
initialize();
initialize();
initialize();

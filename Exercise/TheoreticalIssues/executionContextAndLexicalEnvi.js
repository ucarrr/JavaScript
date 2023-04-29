//Execution Context, Lexical Environment and Hosting

//Execution Context = Çağırılan her fonksiyon için ayrı bir execution contex oluşuturulur.
//Bu çağrılan fonksiyonlar CALL STACK denilen bir yapıda tutulur.
//En son çağrılan fonksiyon bu yapının en üstünde yer alır ve
//bittiğinde bir alttaki foksiyondan program çalışmaya devam eder.
//Tüm bu yapıların olduğu temel execution contexte ise GLOBAL EXECUTİON contex denir.

//Bir js dosyası çalıştırılınca js engine tüm bu çalışmalar için bir execution context oluşturur.
//Buna GLOBAL EXECUTİON contex denir. Bu yapı call stack yapısının en altında yer alır.
//Bu yapı oluştulurken 2 aşama gerçekleşir.
// 1. Creation Phase   2.Execution Phase

// 1. Creation Phasede global object, this oluşturulur. Hoisting gerçekleştirilir.(window, this)
// 2. Execution Phase fonksiyon çalıştırmaları yapılır.

//Hoisting = Bir fonksiyon yada değişkenin daha tanımlanmadan çağırılıp kullanılabilmesi özelliği

console.log(ad);

d();

var ad = "Emre";

function d() {
  console.log("Merhaba..");

  function b() {}

  b();
}

console.log(ad);
d();

//Lexical Environment, Lexical Analysis
//Her bir fonksiyon oluşturulduğunda Lexical Environment yada Lexical Analysis diye bir yapı oluşur.
//Bir değişkeni yada bir fonksiyonu nerede çağırdığımızdan değil nerede oluşturduğumuz önemli.
//Her bir fonksiyon birbirinden bağımsızdır
//JS ENGINE programımızı çalıştırırken fonksiyonlarımız nerede oluşturduğumuzla ilgilenir.
//Fonksiyon nerede tanımlanmış ona bakar. Buna Lexical Environment denir.
//Compile time da bir fonksiyon nerede tanımlanmış, lexically nerede duruyor.
//A fonksiyonu lexically globalde tanımlanmış.
//B fonksiyonu lexically a fonksiyonunda tanımlanmış
//Bu sayede compiler neyi nereye koyacağını, nasıl aksiyon alacağını,
//o lexical Environment da nelerin ulaşabilir olduğunu anlar
//Her fonksiyon tanımlandğında bir Lexical Environment oluşturulur.
//Her fonksiyon çağrılmasıyla bir Execution Context oluşturulur.

console.log("-------------------------------------------------");

console.log(sayi);

a();

console.log(sayi);

var sayi = 1;
var sayi = 2;

console.log(sayi);

a();

function a() {
  console.log("naberr");
}

a();

function a() {
  console.log("Marabaaa");
}
a();

console.log("-------------------------------------------------");

console.log(renk);
var renk = "mavi";

var sayColor = function () {
  console.log("En sevdiğim renk: " + renk);

  var renk = "yeşil";

  console.log("Şİmdi en sevdiğim renk: " + renk);
};

sayColor();

console.log("====================================");
console.log("funtion");
console.log("====================================");

//Function Expression
//Bu fonksiyon runtime da oluşturulmuştur
var sayName = () => {
  console.log("Muhammet");
};
/*
 var sayName = function () {
  console.log("Muhammet");
};
 */



//Function Declaration
//Bu fonksiyon compiler time da oluşturulmuştur
function saySurname() {
  console.log("UÇAR");
}

sayName();
saySurname();

//Arguments, Variable, Environment ve Scope Chain Kavramı

//Her Execution Contexde bir de arguments diye bir nesne  oluşturulur.
//Bu nesne fonksiyonun aldığı parametreleri içerir.

//Her bir fonksiyon çağrıldığında o fonksiyon bir execution context oluşturur.
//ve bu alanda o fonksiyondaki değişkenler için variable environment oluşturulur.

//Bu alan içinde fonksiyon içerisinde tanımlanan değişkenler bulunur.

//Peki fonksiyon içerisinde kullanılan bir değişken bu alanda yoksa ne olacak?Hata mı verir?

//Hayır!! Bu değişkenin değeri için parent yapıda yani fonksiyonun tanımlandığı yerin bir
//üst yapısına bakılır. Buna Scope Chain denir.

//Scope Kapsam kavramı bir değişkenin tanımlı olduğu yeri temsil etti.

console.log("Arguments");
function a() {
  console.log(arguments);
}

a();

function sum(num1, num2) {
  console.log(arguments);
  //Array.from(arguments); //Arguments bir array değildir. Bir nesnedir. Array'e dönüştürebiliriz.
  return num1 + num2;
}

var number = sum(5, 6);
console.log(number);

console.log("Function ve Block Scope");

//Function ve Block Scope

//Scope yani kapsam bir değişkenin tanımlı olduğu alan demektir.

//JS Function scope bir dildir. Bir fonksiyonun içerisinde
//tanımlandıysa fonksiyon içerisinde herhangi bir yerden erişebilir.

//Diğer dillerin çoğu block scope'dur. Yani süslü parantez içerisinde tanımlanmış olan
//bir değişken sadece o süslü parantezler yani block içerisinde geçerlidir.

//Neden var yerine let const Kullanmalıyız? Farkları nelerdir



console.log("====================================");
console.log("Function Scope");
console.log("====================================");

//var değişkeni Function Scope özelliktedir.
//var global objedir. Tanımladğımız değeri this ile global objede görebiliriz
var test='test';
console.log(this);

function functionScope() {
  var name = "emre";

  if (5 > 4) {
    console.log(name);
    var surName = "kara";
  }

  for (var i = 0; i < 3; i++) {
    console.log(name);
    console.log(surName);
  }

  console.log(++i);

  var surName = "UÇAR";
  console.log(surName);
}

functionScope();

console.log("====================================");
console.log("Block Scope");
console.log("====================================");

//let ve const ile oluşturulan değişkenler block scope


function blockScope() {
  let name = "Muhammet";

  if (5 > 4) {
    console.log(name);

    let surName = "UÇAR";
  }

  //console.log(surName);//<-- ERROR

  for (let i = 0; i < 3; i++) {
    console.log(i);
  }

  //console.log(i);//<-- ERROR
  
  //let name='Emre';//<-- ERROR 
  //-- let veya const ile tanımaladığımız bir değeri aynı şekilde aynı isimle bir daha tanımlayamıyoruz
  name="emre";
  console.log(name);

  const val='JAvaScript';
  //val="Angular";//<-- ERROR

  // let ve const'ta Hoisting özelliği yoktur.

}

blockScope();


console.log('====================================');
console.log("Global Variable");
console.log('====================================');


//Bir fonksiyon içerisinde belirtilmeyen tüm değişken ve fonksiyonlar global contex'te buluşur.

//Bu değişken ve fonksiyonlara uygulamanın her yerinden erişilebilir ama uygulama büyüdükçe farkında olmadan 
//burada tanımlanan değişkenlerin değerleri değiştirilebilir.

//O yüzden mümkün olduğunca global değişken tanımlamamak gerekir.

//JS Modül sistemi bu sorun için çıkmıştır. Ama bu çözümden önce IIFE(Immediately invoked function expression)
//ile JS yazımlıcıları bu soruna çözüm bulmuşlardır.

//(function(){})() şeklinde bir tanımla değişkenleri global olarak tanımlamamış oluruz.

let globalName='emre';
let globalAge=27;

//Function Declaration
function g(){
    console.log(`Benim adım ${globalName} ve yaşım ${globalAge}`);
}

f();
g();

//Function Declaration
function f(){
    globalName='Hasan'
    globalAge=35;
}

console.log('====================================');
console.log("function Expression");
console.log('====================================');

//Function Expression
(function(){
    let name="Muhammet";
    let age=27;

    console.log('Merhaba ben '+ name+ " yaşım " + age);
})();
//(function(){})() şeklinde bir tanımla değişkenleri global olarak tanımlamamış oluruz.
// name ve age değişkenlerini dışarıdan alamayız
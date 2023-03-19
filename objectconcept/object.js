/* 

//object literals
const nameObject={
    name:'Muhammmet',
    age:25,
    isSingle:true,
    favoriteColor:['red','blue'],
    adress:{
        city:'Antalya',
        code:7,
    },

    printInfo:function(){
        return `name:  ${this.name} age: ${this.age}` ; //Template Literal
    },
    ['full-name']:'Muhammmet UÇAR',//Key değerlerinde tire vb. varsa bu şekilde kullanılır
}

nameObject.age=27;
nameObject.okul='Akdeniz Universitesi';
console.log(nameObject);

console.log(nameObject.adress.city);

console.log(nameObject.printInfo());

console.log(nameObject['favoriteColor']);
console.log(nameObject['name']);
console.log(nameObject['age']);
console.log(nameObject['full-name']); 

*/

console.log("--------------------------------------------------");

const emre = createStudent("emre", 30, false, "ege");
const hasan = createStudent("hasan", 29, true, "marmara");

//factory function
function createStudent(name, age, isSingle, school) {
  return {
    name: name,
    age: age,
    isSingle: isSingle,
    school: school,

    //method
    printInfo: function () {
      return `name: ${this.name} age: ${this.age} school: ${this.school}`;
    },
  };
}

console.log(emre.printInfo());
console.log(hasan.printInfo());

console.log("Constructor functions");
//Constructor functions

function Student(name, age, isSingle, school) {
  this.name = name;
  this.age = age;
  this.isSingle = isSingle;
  this.school = school;
  this.printInfo = function () {
    return `name: ${this.name} age: ${this.age} school: ${this.school}`;
  };
}

//new kullanıldığında 3 şey gerçekleşir
//1--> Yeni bir obje oluşturur.
//2--> return yazman zorunda kalmayız.
//3--> this kelimesini o an oluşturulan nesneye bağlar.

const yunus = new Student("Yunus", 20, false, "ege");
console.log(yunus);

const ali = new Student("Ali", 19, true, "itü");
console.log(ali);

//JS deki tüm objeler onu oluşturan constructor fonksiyonuna erişebilir
//JS ile beraber gelen built in constructor fonksiyonlar vardır.
//diziler ve fonksiyonlar aslında objecttir.

/* 
const denemeObject={};
console.log(denemeObject.constructor);

const arr=[];
console.log(arr.constructor);

const func=function(){};
console.log(func.constructor);
*/

//Prototype Property
//JS prototype miras modelini kullanır.
//Her constructor function/class aynı kurucu fonksiyonla oluşturulan
//instance'ların ortak olarak kullanabilecekleri prototype isimli propertye sahiptir.
//Prototype property de bir nesne döndürir

function StudentPrototypeEx(name, age, isSingle) {
  this.name = name;
  this.age = age;
  this.isSingle = isSingle;
}

StudentPrototypeEx.prototype.school = "Akdeniz Universitesi";
StudentPrototypeEx.prototype.printInfo = function () {
  return `name: ${this.name} age: ${this.age} school: ${this.school}`;
};

const memo = new StudentPrototypeEx("memo", 24, true);
const selim = new StudentPrototypeEx("selim", 22, true);
console.log(memo.constructor.prototype);
console.log(Object.getPrototypeOf(selim));

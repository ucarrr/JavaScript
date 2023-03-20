console.log("object Inheritance");

//Person base function
function Person(name, surname) {
  this.name = name;
  this.surname = surname;
}

Person.prototype.seyHello = function () {
  return `Merhaba ben ${this.name} ${this.surname}`;
};

function Student(name, surname, age, grade) {
  //Propertylerin kalıtımı
  Person.call(this, name, surname);
  this.age = age;
  this.grade = grade;
}

//Prototype fonksiyonların kalıtımı
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.sayAge = function () {
  return `Age: ${this.age} `;
};

const salih = new Person("salih", "kara");
const melih = new Person("melih", "kara");

console.log(salih.seyHello());
console.log(melih.seyHello());

const fatma = new Student("fatma", "kara", 20, 9);
console.log(fatma.seyHello());

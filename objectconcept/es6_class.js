//JS object oriented bir dildir ama bu onun JAVA, C# gibi olduğu anlamına gelmez
//OOP bir aile ise, class based onun bir parçasıdır diyebiliriz. prototype-base gibi.

//JS is a multi-paradigm language that supports procedurali object-oriented
//(prototype based) and functional programming styles.

//Yine aynı bir person nesnesi oluşturuyor - class yapılarındaki gibi olmuyor 
//Class kullanarak okunabilirliği artıyor
class Person {
  static counter = 0;

  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
    Person.counter++;
  }

  sayHello() {
    return `merhaba ben ${this.name + " " + this.surname}`;
  }

  static testMetod() {
    console.log("Static Metod...");
  }
}

class Student extends Person {
  constructor(name, surname, age) {
    super(name, surname);
    this.age = age;
  }

  sayGrade() {
    return `merhaba be ${this.name + " " + this.surname} ve ${this.age}. sınıf`;
  }
}

const emre = new Person("emre", "yeşil");
console.log(emre.sayHello());

const ayse = new Student("ayşe", "sarı", 5);
console.log(ayse.sayGrade());

console.log("Counter: " + Person.counter);

Person.testMetod();

//Encapsulation
//JS de Encapsulation (private) olmuyor. Veriler yine çağırılabiliyor.
// Private alan yok sadece getter ve setter metodların kullanımı aynı
//Sadece kulanan kişiye bilgi veriyor
class Person2 {
  constructor(name, surname) {
    this._name = name; //JAVA Private Same meaning but not same thing
    this._surname = surname;
  }

  get nameGet() {
    return this._name;
  }
  set nameSet(name) {
    this._name = name;
  }

  get surnameGet() {
    return this._surname;
  }
  set surnameSet(surname) {
    this._surname = surname;
  }
}

console.log("Encapsulation Person");

const hasan = new Person2("Hasan", "mavi");

console.log(hasan);

hasan.surnameSet = "kırmızı";

console.log(hasan);
console.log("new Surname: " + hasan.surnameGet);

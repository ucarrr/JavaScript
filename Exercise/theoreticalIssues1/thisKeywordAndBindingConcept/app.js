//this Keyword ve Binding

//this aşağıdaki 4 duruma göre değer değiştirir.
// 1) Implicit Binding
// 2) Expcilit Binding
// 3) new Binding
// 4) Window Binding

//this'in aldığı değeri öğrenmek için ilk olarak şunu sormalıyız.
//Fonksiyon nasıl çağırılmış? Fonksiyonun nasıl çağrıldığı bilinmezse
//this'in alacağı değeri de bilemeyiz.

//Peki ya arrow functionslarda ve eventlistenerlarda durum nasıl?

console.log("====================================");
console.log("Implicit Binding");
console.log("====================================");

// 1) Implicit Binding --> fonksiyonun çağrıldığı noktanın solunda ne var this onu temsil eder

//Object Literal
const student = {
  name: "emre",
  age: 27,
  sayName: function () {
    console.log(this);
    console.log(this.name);
  },

  sayMyage: function () {
    console.log(this);
    console.log(this.age);
  },
};

//implicit binding

//nokta olması önemli nokta varsa this farklı bir şey yoksa farklı bir şey gösterir
student.sayName(); // --> nokta olduğu için student gösterecek
student.sayMyage();

const emre = {
  name: "emre",
  age: 27,
  sayName: function () {
    console.log(this);
    console.log(this.name);
  },

  sayMyage: function () {
    console.log(this);
    console.log(this.age);
  },
};

const sayMyName = emre.sayName;
sayMyName(); //--> Window gösterecek

const hasan = {
  name: "hasan",
  age: 27,
  sayName: function () {
    console.log(this);
    console.log(this.name);
  },

  sayMyage: function () {
    console.log(this);
    console.log(this.age);
  },
  girlfriend: {
    name: "Ayşe",
    sayGirlfriendName() {
      console.log(this);
      console.log(this.name);
    },
  },
};

//noktalı oluduğu için noktanın solunda girlfriend var.
//Bu yüzden this girlfriend temsil ediyor.
//girlfriend objesinin içindeki name boş olsa undefined olur.
hasan.girlfriend.sayGirlfriendName();

const hasanObje = hasan.girlfriend.sayGirlfriendName;

//Çağırıldğında solunda bir nokta ve bir obje yok direct Window Gösterir
hasanObje(); //-->Window Gösterir Window içinde de name olmadığı için undefined

console.log("====================================");
console.log("Expcilit Binding");
console.log("====================================");

// 2. Expcilit Binding --> 3 farklı fonksiyon vardır --> this'in ne çağıracağını fonksiyonu çağırmadan direkt belirtiyoruz
// call, bind, apply

const ahmet = {
  name: "ahmet",
  age: 25,
  school: "ege",
};
const mehmet = {
  name: "mehmet",
  age: 27,
  school: "akdeniz",
};

const printInfo = function (...args) {
  console.log(this);
  console.log(
    `Benim adım ${this.name} yaşım ${this.age} okulum ${this.school} `
  );
  console.log(`Sevdiğim renkler ${args}}  `);
};

console.log("Call");
//printInfo.call(mehmet);
printInfo.call(ahmet, "mavi", "yeşil"); //parametreleri Tek tek alır

console.log("Apply");
printInfo.apply(mehmet, ["Mavi", "Yeşil", "Kırmızı"]); //Verilen argumentleri bir dizi olarak alır

console.log("Bind");
//Bind bir fonksiyon döndürüyor. Hemen çağırmıyor
//Verilen parametreyi ister dizi ister tek tek alabiliriz
const sayBind = printInfo.bind(mehmet, ["Mavi", "Yeşil", "Kırmızı", "Sarı"]);
sayBind();

//New Binding

console.log("====================================");
console.log("New Binding");
console.log("====================================");

const car = function (color, model) {
  this.color = color;
  this.model = model;
  this.info = function () {
    console.log(this);
  };
};

const honda = new car("red", "civic");
honda.info();

console.log("====================================");
console.log("Arrow function");
console.log("====================================");

//Arrow function larda this yoktur.Parent bakar. Parent --> Global context gidip ordan çağırır.
//call, apply, bind yoktur.

/* 
 const func=()=>{
    console.log(this);
 
}

func(); 
*/
console.log(
  "---------------------------------------------------------------------"
);
const veli = {
  name: "veli",
  sayName: () => {
    console.log(this);
    console.log(this.name);
  },
};

veli.sayName(); //Arrow func. larda this kullanımı olmadığı için
//Çağırılıdğı yerin parent'ına yani bir üs yapısına bakıyor.
//Parent--> Global Context --> Window gelir --> window name olmadığı için undefined
//veli.sayName.call(veli);//-->Yinede çalışmaz

console.log("----------------------------------------------");

const salih = {
  name: "salih",
  arrowFunc: null,

  normalFunc: function () {
    console.log(this);

    this.arrowFunc = () => {
      console.log(this);
    };
  },
};

salih.normalFunc();
salih.arrowFunc(); //fonksiyon arrow function olduğu için this bir anlamı olmuyor.
//this bir anlamı olmadığı için bir üst scope(parent) gidecek
//normal bir fonksiyonun içinde olduğu için onun içinde this alacak

console.log("----------------------------------------");
//normal functionlarda this çalışır
/* 
function func1() {
  console.log(this);
}

func1(); 
*/

//console.log("------------------------------------------");

//Callbacklerde this için arrow function kullanımı
console.log("====================================");
console.log("Callbacklerde this için arrow function kullanımı");

const school = {
  names: ["emre", "hasan", "ali"],
  id: [1566, 2541, 56161],

  printStudent() {
    const that = this;

    //Bu Fonksiyon dışarıda da olabilirdi. Bu yüzden this çağırınca hata veriyor.
    this.names.forEach(function (name, index) {
      //console.log(this); //Window çağırıyor
      console.log(that);
      console.log(name, that.id[index]);
    });
  },

  printID() {
    this.id.forEach(
      function (id, index) {
        console.log(id);
      }.bind(this)
    );
  },

  //Bunların yerine this kullanmak için aşağıdaki gibi arrow function kullanabilriz.
  getNumberStudent() {
    setTimeout(() => {
      console.log(this);
      console.log("Toplam öğrenci sayısı: " + this.names.length);
    }, 2000);
  },
};

//school.printStudent();
//school.printID();
school.getNumberStudent();

//EventListener'larda this tıklanılan veya o anda işlem yapılan e.target gösterir
//EventListener özel durumdur. Mantık arama
//
/* 
const title1 = document.querySelector("h1");
const title2 = document.querySelector("h2");
const title3 = document.querySelector("h3");

title1.addEventListener("click", function (e) {
  console.log(this);
});

title2.addEventListener("click", title2Clicked);

function title2Clicked(e) {
  console.log(e.target);
  console.log(this);
} 
*/

class Screen {
  constructor() {
    this.title1 = document.querySelector("h1");
    this.title2 = document.querySelector("h2");
    this.title3 = document.querySelector("h3");
    this.number = 15;

    this.title1.addEventListener("click", this.title1Clicked.bind(this));

    this.title2.addEventListener("click", () => this.title2Clicked());

    this.title3.addEventListener("click", function () {
      console.log(this);
    });
  }

  title1Clicked() {
    console.log("work1");
    console.log(this);
    console.log(this.number);
  }
  title2Clicked() {
    console.log("work2");
    console.log(this);
  }
}

const screen = new Screen();

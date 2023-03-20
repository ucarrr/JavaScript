//array destructuring
let fullName = ["Muhammet", "UÇAR"];
const name = fullName[0];
const surname = fullName[1];

const [first, last] = fullName;
console.log(first, last);

const colors = ["yellow", "green", "blue", "red", "brown", "orange", "purple"];

const [c1, c2, c3, , c4] = colors;
console.log(c1, c2, c3, c4);

const [r1, r2, ...otherColors] = colors;
console.log(r1, r2, otherColors);

//default value assigment
const team = ["Galatasaray", "Beşiktaş", "Fenerbahçe"];
const [t1, t2, t3 = "Bilinmiyor", t4 = "Tanımlanmadı"] = team;
console.log(t1, t2, t3, t4);

//object destructuring
let settings = {
  title: "JS",
  weight: "300px",
  height: "300px",
  //size: 200,
};

const { title: t, weight: w, height: h, size: s = "DEFAULt SiZE" } = settings;
console.log(t, w, h, s);

const province = "Antalya";
const town = "Konyaaltı";

const city = {
  province: province,
  town: town,
};

const city2 = { province, town };
console.log(city2);

const person = {
  name2: {
    firstName: "emre",
    lastname: "blue",
  },
  age: 25,
  province: "Antalya",
  town: "Konyaaltı",

  colors: ["red", "blue", "greeen"],
};

const { age } = person;
console.log(age);

const {
  name2: { firstName, lastname },
} = person;
//console.log(name2);
console.log(firstName, lastname);

const {
  colors: [color1, color2],
} = person;
console.log(color1, color2);

//JS bazı yapılara direkt erişip kullanabiliriz. Bunlara global object denir.
//console, settimeout, cleartimeout, setinternal, clearinternal gibi

//browserdaki JS de tüm değişkenleri fonksiyonları ekranı barındıran window isimli global bir nesnemiz vardı.
//window.console.log
//Bu tanımın node bir tanımı yoktur. Karşılığı ise global'dir

//NodeJs uygulamalarında her bir js dosyası bir module'dür. Bu modulde de tanımlanan tüm değişkenler ve fonksiyonlar
//bu dosyaya özeldir.

//Yani private bunlar erişebilir yapmak bizim elimizde

//console.log(module) //ilgili dosyayla ilgili tüm detaylar

let name = "Muhammet UÇAR";
let sum = function (a, b) {
  console.log(a + b);
};

exports.name = name;
exports.sum = sum;

exports.sub = function (a, b) {
  console.log(a - b);
};

exports.personel={
    'name':"muhammet",
    'age':27,

}


console.log(module);
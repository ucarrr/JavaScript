//CallBack

console.log("Başladı");

getStudent(setStudent);

console.log("Finish");

function getStudent(callBack) {
  setTimeout(function () {
    const arr = [];
    for (let i = 0; i < 30; i++) {
      arr.push({ name: "" + (i + 1), id: i + 1 });
    }

    callBack(arr);
  }, 3000);
}

function setStudent(arrStudent){
    console.log(arrStudent);
}
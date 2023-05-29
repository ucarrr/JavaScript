console.log("Async and Await");

function getUser(id) {
  console.log(`${id} idli kullanıcının kursları getiriliyor`);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "Muhammet", id: id });
    }, 2000);
  });
}

function getCourses(userName) {
  console.log(`${userName} isimli kullanıcının kursları getiriliyor`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["JAVA", "JS", "Python"]);
    }, 2000);
  });
}

function getCommets(courseName) {
  console.log(`${courseName} isimli kursun yorumları getiriliyor`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Kurs Harika");
    }, 2000);
  });
}

// const user=getUser(1234);
//console.log(user);

/* 
getUser(1245).then((user) => {
  getCourses(user.name).then((courseArr) => {
    getCommets(courseArr[0]).then((comment) => {
      console.log(comment);
    });
  });
});

console.log("--------");

getUser(1324568).then((user) =>
  getCourses(user.name).then((courseArr) =>
    getCommets(courseArr[0])
      .then((comment) => console.log(comment))
      .catch((err) => console.log(err))
  )
); 
*/

//ES7 ile beraber geldi
async function showCommnet() {
  try {
    const userObje = await getUser(954624);
    const courseArr = await getCourses(userObje.name);
    const comment = await getCommets(courseArr[0]);
    console.log(comment);
  } catch (err) {
    console.log("Error: " + err);
  }
}

showCommnet();

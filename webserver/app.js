const express = require("express");
const app = express();


app.use(express.json())

const usersArr = [
  { id: 1, ad: "muhammet", age: 27 },
  { id: 2, ad: "kasım", age: 28 },
  { id: 3, ad: "egemen", age: 25 },
  { id: 4, ad: "ahmet", age: 23 },
  { id: 5, ad: "kerem", age: 20 },
];

app.get("/", (req, res) => {
  console.log("Anasayfaya Hoşgeldiniz..");
  res.send("Merhaba");
});

/*
app.get("/users", (req, res) => {
  console.log("users'a Hoşgeldiniz..");
  res.send([
    {
      id: 1,
      ad: "muhammet",
      age: 27,
    },
    {
      id: 2,
      ad: "kasım",
      age: 28,
    },
  ]);
});*/

app.get("/users", (req, res) => {
  console.log("users'a Hoşgeldiniz..");
  res.send(users);
});

app.get("/users/:id", (req, res) => {
  const desiredUser = usersArr.find(
    (user) => user.id === parseInt(req.params.id)
  );

  if (desiredUser) {
    res.send(desiredUser);
  } else {
    res.status(404).send(req.params.id + " id'li user Bulunamadı");
  }
});

app.listen(3000, () => {
  console.log("Server 3000 portunu dinliyor");
});


app.post('/users',(req,res)=>{
    const newUser={
        id:usersArr.length+1,
        name:req.body.name,
        age:req.body.age,        
    }

    usersArr.push(newUser)
    res.send(newUser)
})
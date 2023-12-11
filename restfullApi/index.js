const express = require("express");
const mongoose = require("mongoose");

const app = express();



mongoose
  .connect("mongodb://http://127.0.0.1:3000/restful_api")
  .then(() => console.log("Veritabanına bağlanıldı"))
  .catch((err) => console.log(err));

app.use(express.json());

app.listen(3000, () => {
  console.log("Server 3000 portunu dinliyor");
});

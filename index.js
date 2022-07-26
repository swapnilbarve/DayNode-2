const express = require("express"); // it will load the express package in our app

const port = 9000;

// Creating app Object
const app = express();

// Route Creation

app.get("/", (req, res) => {
  res.send("I am root route");
});

app.get("/api/main", (req, res) => {
  res.send("Hello Express"); // text response
//   res.send("<h1>Hello Node</h1>"); // html response
//   res.send({
//     name: "Tron",
//     age: 55,
//   }); // json response
});

// listening to the port

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
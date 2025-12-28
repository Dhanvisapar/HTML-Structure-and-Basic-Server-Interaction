const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", { name: "" });
});

app.post("/submit", (req, res) => {
  const name = req.body.username;
  res.render("index", { name });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

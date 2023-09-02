const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://127.0.0.1:27017/techxlDB", {
  useNewUrlParser: true,
});

const examSchema = new mongoose.Schema({
  user: String,
  pass: String,
});

const Exam = mongoose.model("user", examSchema);

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/sign-up", function (req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.get("/login", function (req, res) {
  res.sendFile(__dirname + "/login.html");
});

app.listen(3000, function () {
  console.log("The server is running on port 3000💻");
});

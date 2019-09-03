const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/root.html");
})

app.get("/math", function(req, res) {
  res.sendFile(__dirname + "/math.html");
});

app.post("/math", function(req, res) {

var num1 = Number(req.body.n1);
var num2 = Number(req.body.n2);

var add = num1 + num2;
var subtract = num1 - num2;
var multiply = num1 * num2;
var divide = num1 / num2;

//create if statements for each button click to add multiply etc...
res.send("Answer: " + add);
});

app.get("/bmi", function(req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmi", function(req, res) {

  var height = parseFloat(req.body.height);
  var weight = parseFloat(req.body.weight);

  var bmi = weight/ (height * height);

  res.send("Your BMI is " + bmi);
})

app.listen(3000, function() {
  console.log("server running on port 3000");
})

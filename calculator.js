const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

// Regular Calculator
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
  // console.log(__dirname);
});

app.post("/", function(req, res) {

  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1 + num2;

  res.send("The result of the calculation is " + result);
})

//BMI Calculator
app.get("/bmicalculator", function(req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
  // console.log(__dirname);
});

app.post("/bmiCalculator", function(req, res) {

  var weight = Number(req.body.weight);
  var height = Number(req.body.height);

  // var weight = parseFloat(req.body.weight);
  // var height = parseFloat(req.body.height);

  var bmi = (weight/Math.pow(height,2)).toFixed(3);

  res.send("Your BMI is " + bmi);
})

app.listen(3000, function() {
  console.log("Server started on port 3000.");
});

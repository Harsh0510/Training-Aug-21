var express = require("express");
var app = express();
const students = require("./student.json");
var cors = require("cors");
app.use(express.json());

app.options(
  "*",
  cors({ origin: "http://localhost:3000", optionsSuccessStatus: 200 })
);
app.use(cors({ origin: "http://localhost:3000", optionsSuccessStatus: 200 }));

var server = app.listen(5000, function () {
  console.log("node server is running");
});

// Create a RESTFUL API which will return a Studentlist.

app.get("/students", (req, res) => {
  if (!students) {
    res.status(404).send("Ooops... Cant find what you are looking for");
  }
  res.send(students);
});

// Create RESTFUL API which will return a Particular Student Record

app.get("/students/:ID", (req, res) => {
  var student = students.find((c) => c.ID === parseInt(req.params.ID));
  if (!student) {
    res.status(404).send("Ooops... Cant find what you are looking for");
  }
  res.send(student);
});

// Create a RESTFUL API which return a particular student FEES Record.

app.get("/students/:ID/fees", (req, res) => {
  var student = students.find((c) => c.ID === parseInt(req.params.ID));
  if (!student) {
    res.status(404).send("Ooops...Cant find what you are looking for");
  }
  res.send(student.Fees);
});

//   Create a RESTFUL API which will return a particular student Exam Result.
//  Result Fields are http://localhost:/3000/students/1/result

app.get("/students/:ID/result", (req, res) => {
  var student = students.find((c) => c.ID === parseInt(req.params.ID));
  if (!student) {
    res.status(404).send("Ooops... Cant find what you are looking for");
  }
  res.send(student.Result);
});

// Create a RESTFUL API which will update a result of result of student id 1. Update the marks for English Subject.

app.put("/students/:ID/result", (req, res) => {
  var student = students.find((c) => c.ID === parseInt(req.params.ID));
  if (!student) {
    res.status(404).send("Not Found!!");
  }
  student.Result.Eng = 90;
  res.send(student);
});
// delete
app.delete("/students/:id", (req, res) => {
  var student = students.find((c) => c.ID === parseInt(req.params.id));
  if (!student) res.status(404).send("Not Found!!");

  var index = students.indexOf(student);
  // console.log(index);
  students.splice(index, 1);
  res.send(student);
  next();
});

// post

app.post("/students", (req, res) => {
  const student = {
    ...req.body,
    ID: students.length + 1,
  };
  students.push(student);
  res.send(student);
});

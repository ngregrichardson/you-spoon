const express = require("express");
const app = express();
const gen = require("sentencer");

app.use(express.static("public"));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", function(request, response) {
  response.sendFile(__dirname + "/index.html");
});

app.get("/css", function(request, response) {
  response.sendFile(__dirname + "/index.css");
});

app.get("/js", function(request, response) {
  response.sendFile(__dirname + "/index.js");
});

app.get("/get", function(request, response) {
  response.send(gen.make("{{ adjective }} {{ noun }}"));
});

const listener = app.listen(process.env.PORT || 4000, function() {});

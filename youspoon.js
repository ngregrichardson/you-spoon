const express = require("express");
const favicon = require("express-favicon");
const app = express();
const gen = require("sentencer");

app.use(express.static("public"));
app.use(favicon(__dirname + "/assets/icon.png"));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/css", (req, res) => {
  res.sendFile(__dirname + "/index.css");
});

app.get("/js", (req, res) => {
  res.sendFile(__dirname + "/index.js");
});

app.get("/icon", (req, res) => {
  res.sendFile(__dirname + "/assets/icon.png");
});

app.get("/twitter", (req, res) => {
  res.sendFile(__dirname + "/assets/twitter.svg");
});

app.get("/get", (req, res) => {
  res.send(gen.make("{{ adjective }} {{ noun }}"));
});

app.listen(process.env.PORT || 4000, function() {});

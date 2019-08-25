var express = require("express");
var app = express();
var router = express.Router();
var bodyParser = require("body-parser");
var expressHandlebars = require("express-handlebars");
var mongoose = require("mongoose");
var logger = require("morgan")

var PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));

var db = process.env.MONGODB_UR || "mongodb://localhost/mongoNEWS";
mongoose.connect(db, function(error) {
  if (error) {
    console.log(error);
  } else {
    console.log("connection is successful");
  }
});

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.engine(
  "handlebars",
  expressHandlebars({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

app.use(router);

app.listen(PORT, function() {
  console.log("listening on port:" + PORT);
});

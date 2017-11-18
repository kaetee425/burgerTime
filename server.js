var express = require("express");
var override = require("method-override");
var bodyParse = require("body-parser");

var port = process.env.PORT || 3022;

var app = express();

app.use(express.static("public"));
app.use(bodyParse.urlencoded({extended: false}));

var exphbhs = require("express-handlebars");

app.engine("handlebars", exphbhs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgerControls.js");

app.use("/", routes);
app.listen(port);
console.log("App Listening on PORT", port)
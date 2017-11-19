var express = require("express");

var app = express.Router();
//router() --> case sensitive does not matter
var burger = require("../model/burger.js");

app.get("/", function(req, res){
	burger.selectAll(function(data){
		var hbsObj = {
			burgers: data
		};
		console.log(hbsObj);
		res.render("index", hbsObj);
	});
});

app.post("/api/burgers", function(req, res){
	burger.insertOne(["burger_name"], [req.body.name], function(result){
		res.redirect("/");
	});
});

app.put("/api/burgers/:id", function(req, res){
	var condition = "id = " + req.params.id;

	console.log("condition", condition);

	burger.updateOne({devoured: true}, condition, function(result){
		res.send(result);
	})
});


module.exports = app;
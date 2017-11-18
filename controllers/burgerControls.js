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
	burger.insertOne(["burger_name", "devoured"], [req.body.name, req.body.devoured], function(result){
		res.json({id: result.insertId});
	});
});

app.put("/api/burgers/:id", function(req, res){
	var condittion = "id = " + req.params.id;

	console.log("condition", condition);

	burger.updateOne({devoured: req.body.devoured}, condition, function(result){
		if (err){
			return res.status(500).end();
		}
		else if (result.changedRows === 0){
			return res.status(404).end();
		} else {
			res.status(200).end();
		}
	});
});


module.exports = app;
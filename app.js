var app = require("connect");
var path = require("path");
var express = require("express");
var web = express();
const bodyParser = require("body-parser");
web.use(express.static("public"));
const port = 3000;
const url = require("url");

web.use(
	bodyParser.urlencoded({
		extended: true,
	})
);
var count = 0;
var marks = 0;
web.use(bodyParser.json());
const directoryPath = __dirname + "/img";
var answ = {
	1: 1,
	2: 1,
	3: 1,
	4: 3,
	6: 1,
	7: 1,
	8: 2,
	9: 1,
	10: 1,
};

web.use("/img", express.static("img"));

web.post("/letter", function (req, res) {
	var bl = Object.keys(req.body);
	for (var j = 1; j <= bl.length; j++) {
		if (j == 5) {
			marks++;
		} else if (req.body[j] == answ[j]) {
			marks++;
		}
		count++;
	}
	console.log(marks);
	console.log(count);
	res.send({
		count: count,
		marks: marks
	});
	count = 0;
	marks = 0;
});

web.get("/", function (req, res) {
	res.sendFile(__dirname + "/pages/index.html");
});

web.get("/css/style.css", function (req, res) {
	res.sendFile(__dirname + "/css/style.css");
});

web.get("/js/script.js", function (req, res) {
	res.sendFile(__dirname + "/js/script.js");
});

web.listen("3000", function () {
	console.log("OK");
});
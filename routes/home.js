const express = require("express");
const template = require("../controllers/renderfile");
const home = express();
home.get(["/", "/home"], (req, res) => {
  template("views/index.ejs", (data) => {
    res.end(data);
  });
});
home.get("/about", (req, res) => {
  template("views/about.ejs", (data) => {
    res.end(data);
  });
});
module.exports = home;

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
home.get("/secondyearsyllbus", (req, res) => {
  res.redirect(
    "http://www.mediafire.com/file/4xintn3s2c3uaru/MCA_2017-18_and_2018-19_final%255Bdocument%255D.doc/file"
  );
});
module.exports = home;

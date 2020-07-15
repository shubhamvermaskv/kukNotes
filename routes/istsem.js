const express = require("express");
const template = require("../controllers/renderfile");
const istsem = express();
istsem.get("/firstsemester", (req, res) => {
  template("views/firstsemester.ejs", (data) => {
    res.end(data);
  });
});

istsem.get("/javazip", (req, res) => {
  res.redirect(
    "http://www.mediafire.com/file/ivoz8mt5lpa1gr9/JAVA_PROGRAMMING%252C_%2528MCA-16-33%2529%255BZIP%255D.zip/file"
  );
});
istsem.get("/javarar", (req, res) => {
  res.redirect(
    "http://www.mediafire.com/file/9spq5o7g564lyza/JAVA_PROGRAMMING%252C_%2528MCA-16-33%2529%255BRAR%255D.rar/file"
  );
});
module.exports = istsem;

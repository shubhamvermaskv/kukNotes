const express = require("express");
const app = express();
const morgan = require("morgan");
const firstSemester = require("./routes/istsem");
const secondSemester = require("./routes/iindsem");
const thirdSemester = require("./routes/iiirdsem");
const fourthSemester = require("./routes/ivthsem");
const home = require("./routes/home");

app.set("view-engine", "ejs");
app.set("port", process.env.PORT || 5000);
app.use(express.static("public"));

app
  .get(["/", "/home"], home)
  .get("/about", home)
  .get("/firstsemester", firstSemester)
  .get("/secondsemester", secondSemester)
  .get("/thirdsemester", thirdSemester)
  .get("/fourthsemester", fourthSemester);

app.listen(app.get("port"), (error) => {
  if (error) {
    throw error;
  } else {
    console.log(`at 5000`);
  }
});

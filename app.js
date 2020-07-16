const express = require("express");
const app = express();
const morgan = require("morgan");
const firstSemester = require("./routes/istsem");
const secondSemester = require("./routes/iindsem");
const thirdSemester = require("./routes/iiirdsem");
const fourthSemester = require("./routes/ivthsem");
const home = require("./routes/home");
const fs = require("fs");
//css minifier
// var uglifycss = require("uglifycss");

// var uglified = uglifycss.processFiles([
//   "./public/css/about.css",
//   "./public/css/s1.css",
//   "./public/css/semsester.css",
// ]);

// fs.writeFile("./public/css/style.min.css", uglified, (err) => {
//   if (err) {
//     throw err;
//   }
// });

app.set("view-engine", "ejs");
app.set("port", process.env.PORT || 5000);
app.use(express.static("public"));

app
  .get(["/", "/home"], home)
  .get("/about", home)
  .get("/firstsemester", firstSemester)
  .get("/secondsemester", secondSemester)
  .get("/thirdsemester", thirdSemester)
  .get("/fourthsemester", fourthSemester)
  .get("/downlaod", home)
  .get("/javazip", firstSemester)
  .get("/javarar", firstSemester)
  .get("/secondyearsyllbus", home);

app.listen(app.get("port"), (error) => {
  if (error) {
    throw error;
  } else {
    console.log(`at 5000`);
  }
});

// var ast = csso.syntax.parse(".test { color: #ff0000; }");
// var compressedAst = csso.syntax.compress(ast).ast;
// var minifiedCss = csso.syntax.generate(compressedAst);
// minify({
//   compressor: cleanCSS,
//   input: "./public/css/about.css",
//   output: "output.css",
//   callback: function (err, min) {
//     if (err) throw err;
//     else console.log(min);
//   },
// });

// const fs = require("fs");
// const uglifyJS = require("uglify-js");
// const about = require("./public/css/about.css");
// const file = uglifyJS.minify([about]);
// fs.writeFile("output.min.js", file.code, (err) => {
//   if (err) throw err;
//   else console.log("done");
// });

// var CleanCSS = require("clean-css");
// var input = "./public/css/about.css";
// var options = {
// };
// var output = new CleanCSS().minify(input);

// console.log(output);
// const minify = require("minify");
// const mollify = require("mollify");
// const options = {
//   html: {
//     removeAttributeQuotes: false,
//     removeOptionalTags: false,
//   },
// };
// app.use(
//   mollify({
//     dir: "public",
//     is: true, // default
//   })
// );

// minify("./public/css/about.css", options)
//   .then(console.log)
//   .catch(console.error);

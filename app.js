const express = require('express');
const app = express();
const ejs = require('ejs');
const morgan = require('morgan');
const istSemester = require('./routes/istsem');
const iindSemester = require('./routes/iindsem');
const iiirdSemester = require('./routes/iiirdsem');
const ivthSemester = require('./routes/ivthsem');
const home = require('./routes/home');

app.set('view-engine', 'ejs');
app.set("port", process.env.PORT || 5000);
app.use(express.static('public'));

app
  .get(['/', '/home'], home)
  .get('/firstsemester', istSemester)
  .get('/secondsemester', iindSemester)
  .get('/thirdsemester', iiirdSemester)
  .get('/fourthsemester', ivthSemester)


app.listen(app.get("port"), (error) => {
  if (error) {
    throw error;
  } else {
    console.log("server is running at 8000");
  }
});
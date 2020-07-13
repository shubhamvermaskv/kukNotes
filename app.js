const express = require('express');
const app = express();
app.set('view-engine', 'ejs');
app.set("port", process.env.PORT || 5000);
app.use(express.static('public'));

app
  .get(['/', '/home'], (req, res) => {
    res.render('index.ejs');
  })
  .get('/firstsemester', (req, res) => {
    res.render('firstsemester.ejs');
  })
  .get('/secondsemester', (req, res) => {
    res.render('secondemester.ejs');
  })
  .get('/thirdsemester', (req, res) => {
    res.render('thirdsemester.ejs');
  })
  .get('/fourthsemester', (req, res) => {
    res.render('fourthsemester.ejs');
  });

app.get('/download', (req, res) => {
  res.redirect('https://drive.google.com/file/d/1NnZFC0xyCec22RoNXYwoBnA0XL4VEKgO/view?usp=sharing');
});

app.listen(app.get("port"), (error) => {
  if (error) {
    throw error;
  } else {
    console.log("server is running at 8000");
  }
});
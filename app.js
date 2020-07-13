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

app.get('/syllbus', (req, res) => {
  res.redirect('https://vc536.pcloud.com/dpZTMFnIfZVrGbdWZ3pXp7ZZYMsH37Z2ZZDUHZZ3r0qLsYeKSf6yEYpg1kq4kQGiiHX/MCA%202017-18%20and%202018-19%20final%20%282%29.doc');
});

app.listen(app.get("port"), (error) => {
  if (error) {
    throw error;
  } else {
    console.log("server is running at 8000");
  }
});
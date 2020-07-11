const express = require('express');
const app = express();
app.set('view-engine', 'ejs');
app.use(express.static('public'));
app.get('/', (req, res) => {
  res.render('home_page.ejs');
});
app.listen('8000', (error) => {
  if (error) {
    throw error;
  } else {
    console.log("server is running at 8000");
  }
});
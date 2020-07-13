const express = require('express');
const template = require('../controllers/renderfile');
const istsem = express();
istsem.get('/firstsemester', (req, res) => {
  template('views/firstsemester.ejs', (data) => {
    res.end(data);
  });
});
module.exports = istsem;
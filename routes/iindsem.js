const express = require('express');
const template = require('../controllers/renderfile');
const iindsem = express();
iindsem.get('/secondsemester', (req, res) => {
  template('views/secondemester.ejs', (data) => {
    res.end(data);
  });
});
module.exports = iindsem;
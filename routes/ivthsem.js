const express = require('express');
const template = require('../controllers/renderfile');
const ivthsem = express();
ivthsem.get('/fourthsemester', (req, res) => {
  template('views/fourthsemester.ejs', (data) => {
    res.end(data);
  });
});
module.exports = ivthsem;
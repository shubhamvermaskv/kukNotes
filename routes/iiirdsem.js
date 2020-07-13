const express = require('express');
const template = require('../controllers/renderfile');
const iiirdsem = express();
iiirdsem.get('/thirdsemester', (req, res) => {
  template('views/thirdsemester.ejs', (data) => {
    res.end(data);
  });
});
module.exports = iiirdsem;
const ejs = require('ejs');
module.exports = (path, callback) => {
  ejs.renderFile(path, {}, {}, (err, template) => {
    if (err) {
      throw err;
    } else {
      callback(template);
    }
  });
};
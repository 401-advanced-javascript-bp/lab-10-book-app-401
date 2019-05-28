'use strict';
//requires the express dependency
const express = require('express');
const router = express.Router();

//keep getting an error saying that getBooks is undefined
router.get('/', getBooks);

module.exports = {
  getBooks: (request, response, next) => {
    return getBooks((request, response) => {
      let SQL = 'SELECT * FROM books;';
            
      return client.query(SQL)
        .then(results => {
          if (results.rows.rowCount === 0) {
            response.render('pages/searches/new');
          } else {
            response.render('pages/index.ejs', { books: results.rows })
          }
        })
        .catch(err => handleError(err, response));
    })
  }
},






module.exports = router;


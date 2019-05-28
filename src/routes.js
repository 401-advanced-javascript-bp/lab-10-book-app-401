'use strict';
//requires the express dependency
const express = require('express');
const routes = express.Router();

//keep getting an error saying that getBooks is undefined
// router.get('/', getBooks);

const getBooks = (request, response, next) => {
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
};
//exports these definitions back to the file that called this file, server.js
module.exports = { routes, getBooks };


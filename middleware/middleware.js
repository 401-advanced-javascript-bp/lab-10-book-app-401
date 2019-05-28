'use strict';
//requires the method-override dependency
const methodOverride = require('method-override');

const override = (request, response, next) => {
  return methodOverride((request, response) => {
    if (request.body && typeof request.body === 'object' && '_method' in request.body) {
      // look in urlencoded POST bodies and delete it
      let method = request.body._method;
      delete request.body._method;
      return method;
    }
  })
};
//exports these definitions back to the file that called this file, server.js
module.exports = { override };


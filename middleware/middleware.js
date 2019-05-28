'use strict';
//requires the method-override dependency
const methodOverride = require('method-override');

module.exports = {
  override: (request, response, next) => {
    return methodOverride((request, response) => {
      if (request.body && typeof request.body === 'object' && '_method' in request.body) {
        // look in urlencoded POST bodies and delete it
        let method = request.body._method;
        delete request.body._method;
        return method;
      }
    })
  }
};


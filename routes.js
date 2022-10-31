/**
   * Main application routes
*/

'use strict';

module.exports = (app) => {
  app.use('/api/user', require('./api/users'));
  
};
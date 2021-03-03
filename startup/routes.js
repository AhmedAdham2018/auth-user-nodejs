const express = require('express');
const routes = require('../routes/routes');

module.exports = function(app) {
  app.use(express.json());
  app.use('/api' , routes);
}
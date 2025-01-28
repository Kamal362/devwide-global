const express = require('express');
const Controller = require('../Controller/Controller');
const Router = express.Router();

Router.get('/', Controller.getHomePage)
      .post('/', Controller.postFormData);
Router.get('/about', Controller.getAboutPage);
Router.get('/contact', Controller.getContactPage);
Router.get('/projects', Controller.getProjectsPage);

module.exports = Router; // Correctly export the Router
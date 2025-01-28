const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const Router  = require('./Routers/Routers');
const path = require('path');
const morgan = require('morgan');

// Set up EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'Views')); // Correctly set the views directory
app.use(express.static(path.join(__dirname, 'Public')));
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logging middleware
app.use(morgan('dev'));

// Use the router middleware
app.use('/', Router);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, (err, res) => {
  if (!err)  {
    console.log(`Server is running on http://localhost:${PORT}`);
  }
  else {
    console.log(`Error starting server on port ${PORT}: ${err} `);
  }
});
import { Router } from "express"

===== CREATING NODE APPLICATION USING MVC APPROACH ====

1. always make sure you set the views joining it with the path 
   
    # app.set('views', path.join(__dirname, 'Views')); // Correctly set the views directory

2. when calling the Router in the server, let it be this way
   
   # server.js file or in your server
   # const Router  = require('./Routers/Routers');
   # app.use('/', Router);
   
   let export be this way
   # module.exports = Router;


Deploying To Rendar cloud services

1. set your build command to 
   #npm install

2. start command 
   #node start

Don't 
 add package.json files to .gitignore before deploying to github

Do's
alway joined the path to the root directory

  #app.set('views', path.join(__dirname, 'Views')); // Correctly set the views directory
  #app.use(express.static(path.join(__dirname, 'Public')));



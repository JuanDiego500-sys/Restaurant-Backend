require('./DataBase/sync.js');

const express = require('express');
const connection = require('./DataBase/connection.js');
const app = express();
const port = process.env.PORT || 1336;
//routers
const restaurantRouter = require('./Routers/restaurantRouter');

app.use(express.json());
app.use(express.urlencoded({extended: false}));

connection.sync({force: false})
  .then(() => { 
    console.log('DataBase synchronized'); 
    app.listen(port, ()=>{
        console.log("the application is running at the port: " + port);
    })
  })
  .catch((error) => {
    console.error('Mistake synchronizing the DataBase ' + error);
  });
   
  //api
  app.use('/api',restaurantRouter);
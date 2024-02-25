require('./DataBase/sync.js');

const express = require('express');
const connection = require('./DataBase/connection.js');
const app = express();
const port = process.env.PORT || 1337;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

connection.sync({force: false})
.then(() => { 
    console.log('Base de datos sincronizada'); 
    app.listen(port, ()=>{
        console.log("la aplicación corre en el puerto: " + port);
    })
  })
  .catch((error) => {
    console.error('Error al sincronizar la base de datos ' + error);
  }); 
const expres = require('express');
const connection = require(' ./database/connection');
const app = express();

const port = process.env.PORT || 1337;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

connection.sync()
.then(() => { 
    console.log('Base de datos sincronizada'); 
    app.listen(port , ()=>{
        console.log("la aplicación corre en el puerto: " + port);
    })
  })
  .catch((error) => {
    console.error('Error al sincronizar la base de datos',error);
  }); 
require('./DataBase/sync.js');

const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 1336;
//routers
const restaurantRouter = require('./Routers/restaurantRouter');
const productRouter = require('./Routers/productRouter');
const departmentRouter = require('./Routers/departmentRouter.js');
const cityRouter = require('./Routers/cityRouter.js')
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
  origin: 'http://localhost:3000'
}));

app.listen(port, () => {
  console.log("the application is running at the port: " + port);
})



//api
app.use('/api', restaurantRouter);
app.use('/api', productRouter);
app.use('/api', departmentRouter);
app.use('/api', cityRouter)

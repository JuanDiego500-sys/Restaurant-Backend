const connection = require('./connection');

//Models
//there we will create the roads between models and their relationships.
const restaurant = require('../Models/restaurant');
const product = require('../Models/product');
const department = require('../Models/department');
const city = require('../Models/city');

const departmentjson = require('./jsonFiles/departmentjson');
const cityjson = require('./jsonFiles/cityson');
async function sync() {
    restaurant.hasMany(product, {
        foreignKey: 'restaurantId',//this is the foreign key between product and restaurant
        onDelete: 'restrict',// i wont be able to delete a restaurant if i have products of its restaurant, its a dependence.
        onUpdate: 'cascade'//if i want to update a restaurant i have to update the product too.
    });
    product.belongsTo(restaurant, {
        foreignKey: 'restaurantId'//the product belongs to the restaurant and is related with it by the foreign key.
    }),
        department.hasMany(city, {
            foreignKey: 'departmentId',//this is the foreign key between product and restaurant
            onDelete: 'restrict',// i wont be able to delete a restaurant if i have products of its restaurant, its a dependence.
            onUpdate: 'cascade'//if i want to update a restaurant i have to update the product too.
        });
    city.belongsTo(department, {
        foreignKey: 'city',
        onDelete: 'restrict',
        onUpdate: 'cascade'
    });
    //Foreign key city -restaurant
    city.hasMany(restaurant, {
        foreignKey: 'cityId',
        onDelete: 'restrict',
        onUpdate: 'cascade'
    });
    restaurant.belongsTo(city, {
        foreignKey: 'cityId'
    });
    await connection.sync({ force: false })
        .then(() => {
            console.log('DataBase synchronized');

        })
        .catch((error) => {
            console.error('Mistake synchronizing the DataBase ' + error);
        });
    //create json 
    departmentjson.createDepartments();
    cityjson.createCities();
}

sync();
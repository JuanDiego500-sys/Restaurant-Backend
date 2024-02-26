const connection = require('./connection');

//Models
//there we will create the roads between models and their relationships.
const restaurant = require('../Models/restaurant');
const product = require('../Models/product');

function sync(){
    restaurant.hasMany(product, {
        foreignKey: 'restaurantId',//this is the foreign key between product and restaurant
        onDelete: 'restrict',// i wont be able to delete a restaurant if i have products of its restaurant, its a dependence.
        onUpdate: 'cascade'//if i want to update a restaurant i have to update the product too.
    });
    product.belongsTo(restaurant,{
        foreignKey: 'restaurantId'//the product belongs to the restaurant and is related with it by the foreign key.
    })
}

sync();
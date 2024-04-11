const { Model, DataTypes } = require('sequelize');
const connection = require('../DataBase/connection');

class restaurant extends Model { }

restaurant.init({
    restaurantId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    restaurantName: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    restaurantNit: {
        type: DataTypes.STRING,
        allowNull: false
    },
    restaurantAddress: {
        type: DataTypes.STRING,
        allowNull: false
    },
    restaurantPhone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cityId: {
        type: DataTypes.STRING,
        allowNull: false
    }

}, {
    sequelize: connection,
    modelName: 'restaurant',
    paranoid: true,
    deletedAt: 'destroyTime'
});

module.exports = restaurant;

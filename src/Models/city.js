const { Model, DataTypes } = require('sequelize');
const connection = require('../DataBase/connection');

class city extends Model { }

city.init({
    cityId: {
        type: DataTypes.STRING,
        primaryKey: true,
        unique: true
    },
    cityName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    departmentId: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: connection,
    modelName: 'city',
    paranoid: true,
    deletedAt: 'destroyTime'
});

module.exports = city;
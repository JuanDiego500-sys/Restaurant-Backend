const { Model, DataTypes } = require('sequelize');
const connection = require('../DataBase/connection');

class department extends Model { };

department.init({
    departmentId: {
        type: DataTypes.STRING,
        primaryKey: true,
        unique: true
    },
    departmentName: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: connection,
    modelName: 'department',
    paranoid: true,
    deleteAt: 'destroyTime'
});

module.exports = department;

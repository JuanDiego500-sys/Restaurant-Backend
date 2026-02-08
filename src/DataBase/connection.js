const { Sequelize } = require('sequelize');
require('dotenv').config();

const dataBase = process.env.DB_NAME;
const userName = process.env.DB_USER;
const password = process.env.DB_PASS;
const host = process.env.DB_HOST;

const connection = new Sequelize(dataBase, userName, password, {
    host: host,
    dialect: 'postgres'
});

module.exports = connection;
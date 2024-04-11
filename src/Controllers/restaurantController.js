require('express');
const restaurant = require('../Models/restaurant');
//create restaurant

async function createRestaurant(req, res) {
    try {
        await restaurant.create({
            restaurantName: req.body.restaurantName,
            restaurantNit: req.body.restaurantNit,
            restaurantAddress: req.body.restaurantAddress,
            restaurantPhone: req.body.restaurantPhone,
            cityId: req.body.cityId
        }).then(function (data) {
            return res.status(200).json({
                data: data
            });
        }).catch(error => {
            return res.status(400).json({
                error: error
            });
        })
    }
    catch (e) {
        console.log(e);
    }
}
async function listRestaurant(req, res) {
    try {
        await restaurant.findAll({
            attributes: [
                'restaurantName',
                'restaurantNit',
                'restaurantAddress',
                'restaurantPhone',
                'cityId'
            ],
            order: ['restaurantName']
        }).then(function (data) {
            return res.status(200).json({
                data: data
            });
        }).catch(error => {
            return res.status(400).json({
                error: error
            });

        })
    }
    catch (e) {
        console.log(e);
    }
}
async function updateRestaurant(req, res) {
    try {
        await restaurant.update({
            restaurantName: req.body.restaurantName,
            restaurantAddress: req.body.restaurantAddress,
            restaurantPhone: req.body.restaurantPhone,
            cityId: req.body.cityId
        }, {
            where: { restaurantId: req.params.restaurantId }
        }).then(function (data) {
            return res.status(200).json({
                data: data
            });
        }).catch(error => {
            return res.status(400).json({
                error: error
            });

        })
    } catch (e) {
        console.log(e);
    }
}

async function disableRestaurant(req, res) {
    try {
        await restaurant.destroy({
            where: { restaurantId: req.params.restaurantId }
        }).then(function (data) {
            return res.status(200).json({
                data: data
            });
        }).catch(error => {
            return res.status(400).json({
                error: error
            });

        })
    } catch (e) {
        console.log(e);
    }
}
async function enableRestaurant(req, res) {
    try {
        await restaurant.restore({
            where: { restaurantId: req.params.restaurantId }
        }).then(function (data) {
            return res.status(200).json({
                data: data
            });
        }).catch(error => {
            return res.status(400).json({
                error: error
            });
        })
    } catch (e) {
        console.log(e);
    }
}


module.exports = {
    createRestaurant,
    listRestaurant,
    updateRestaurant,
    disableRestaurant,
    enableRestaurant
}
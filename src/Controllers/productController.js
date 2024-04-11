require('express');
const product = require('../Models/product');
const restaurant = require('../Models/restaurant');

async function createProduct(req, res) {
    try {
        await product.create({
            productName: req.body.productName,
            productDescription: req.body.productDescription,
            productPrice: req.body.productPrice,
            restaurantId: req.body.restaurantId
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
async function listProducts(req, res) {
    try {
        await product.findAll({
            attributes: [
                'productId',
                'productName',
                'productDescription',
                'productPrice'


            ],
            order: ['productName'],
            include: {
                model: restaurant,
                where: { restaurantId: req.params.restaurantId },
                attributes: ['restaurantName']
            }
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
async function updateProduct(req, res) {
    try {
        await product.update({
            productName: req.body.restaurantName,
            productDescription: req.body.productDescription,
            productPrice: req.body.productPrice,
            restaurantId: req.body.restaurantId
        }, {
            where: { productId: req.params.productId }
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

async function disableProduct(req, res) {
    try {
        await product.destroy({
            where: { productId: req.params.productId }
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
async function enableProduct(req, res) {
    try {
        await product.restore({
            where: { productId: req.params.productId }
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
    createProduct,
    listProducts,
    disableProduct,
    enableProduct,
    updateProduct
}
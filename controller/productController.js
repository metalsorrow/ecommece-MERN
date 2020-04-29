const mongodb = require('mongoose');
const Product = require('../model/product')


const getProducts = (req,res,next) => {
    Product.find()
        .then( products  => {
            return res.status(200).json({
                ok: true, products
            });
        })
        .catch( err => {
            return res.status(500).json({
                ok: false,
                message: 'Error in product list ' + err
            });
        })

}

const getProduct = (req, res, next) => {
    const productId = req.query.productId;
    Product.findById(productId)
        .then( product => {
            return res.status(200).json({
                ok: true,
                product
            })
        })
        .catch( err => {
            return res.status(500).json({
                ok: false,
                message: 'Error searching Product: ' +  err
            })
        })
}

const getFilterProducts = (req,res,next) => {
    const textFilter = req.query.filter;
    const regExp = new RegExp(textFilter,'ig')

    // Filter with regular functions
    Product.find({nombre: regExp })
        .then( products => {
            return res.status(200).json({
                ok: true,
                products
            })
        })
        .catch( err => {
            return res.status(500).json({
                ok: false, 
                message: 'Error Filter Products: ' + err
            })
        })
}

const postNewProduct = (req,res,next) => {
    //Problema de logica aqui, soy imbecil, esto es ahora in middleware
    // if(req.user.userType !== 'admin' || req.user.userType !== 'mod'){
    //     req.status(401).json({
    //         ok: false,
    //         message: 'Privilegios Requeridos: usuario invalido para esa accion'
    //     })
    //     return;
    // }

    const { nombre, categoria, descripcion, precio } = req.body

    const newProduct = new Product({nombre, categoria, descripcion, precio});

    newProduct.save()
        .then( () => {
            return res.status(201).json({
                ok: true,
                newProduct
            })
        })
        .catch( err => {
            return res.status(500).json({
                ok: false,
                message: 'Error saving new Product: '+ err
            })
        })
    





}

module.exports = {
    getProducts,
    getProduct,
    getFilterProducts,
    postNewProduct
}
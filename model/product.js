const mongo = require('mongoose');
const category = require('../model/category')



const ProductSchema = new mongo.Schema({
    nombre: {
        type: String,
        required:[true, 'Nombre de Producto requerido']
    },
    categoria: {
        type: mongo.Schema.Types.ObjectId,
        ref:'Category',
        required:[true, 'Categoria de producto requerida']
    },
    descripcion: {
        type: Number,
        required:[true, 'Descripcion de producto requerida']
    },
    precio: {
        type: Number,
        required:[true, 'Precio de Producto Requerido']  
    },
    stock: {
        type: Number,
        required:[true, 'Cantidad en stock requerida']
    }
    //TODO: Calificacion
})


module.expors = mongo.model('Product',ProductSchema)
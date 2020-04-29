const mongo = require('mongoose');

const categoryScheme = new mongo.Schema({
    nombre:{
        type: String,
        required:[true,'Nombre de categoria requerido']
    },
    descripcion:{
        type:String
    }
})


module.exports = mongo.model('Category', categoryScheme)
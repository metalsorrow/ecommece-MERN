//USER MODEL MONGO
const mongo = require('mongoose');

let userSchema = new mongo.Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    correo: {
        type: String,
        required: [true, 'El correo es necesario']
    },
    clave: {
        type:String,
        required: [true, 'La clave es necesaria']
    },
    userType: {
        type: String,
        required: [true, 'Se necesita un tipo de usuario valido']
    }
});

userSchema.methods.toJSON = function(){
    let user = this;
    let userObject = user.toObject();
    delete userObject.clave;
    
    return userObject;
}



module.exports = mongo.model('User', userSchema);
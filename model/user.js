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
    }
});

userSchema.methods.toJSON = function(){
    let user = this;
    let userObject = user.toObject();
    delete userObject.clave;
    
    return userObject;
}


module.exports = mongo.model('User', userSchema);
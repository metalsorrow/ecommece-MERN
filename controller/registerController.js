const User = require('../model/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const {KEY} = require('../utils/tokenKey');



const getRegister = (req, res, next) => {
    //sendView
}

const postLogin = (req, res, next) => {
    const body = req.body;

    User.findOne({correo: body.correo})
        .then( user => {
            if(!user){
                return res.status(400).send({
                    ok: false,
                    message: "Credenciales Incorrectas"
                })
            }

            if(!bcrypt.compareSync(body.clave, user.clave)){
                return res.status(400).send({
                    ok:false,
                    message:"Credenciales Incorrectas"
                })
            }

            jwt.sign({usuariobd: user},KEY,{expiresIn: '24h'},(err, token) => {
                if(err){
                    throw err;
                }

                return res.status(200).send({
                    ok: true,
                    user,
                    token
                })
            })

        })
        .catch(err => {
            return res.status(301).send(err)
        })


}

const postNewRegister = (req, res, next) => {
    const SALT_ROUNDS = 10;
    const body = req.body;

    User.find({correo: body.correo})
        .then( user => {
            if( !user.length === 0){
                return res.json({err:"Ya existe un usuario registrado con este correo", status: 301})
            }
            bcrypt.genSalt(SALT_ROUNDS,(err, salt) => {
                if(err){
                    throw err; 
                }
                bcrypt.hash(body.clave, salt, (err, passEncripted) => {
                    const user = new User({ nombre: body.nombre, correo: body.correo, clave: passEncripted, userType: {type: 'user'}})

                    user.save()
                        .then(() =>{
                            return res.send(user)
                        })
                        .catch( err => {
                            return res.send({err})
                        })
                })
            })

        })
        .catch( err => {
            return res.json(err)
        })
}




module.exports = {
    postLogin,
    postNewRegister,
    getRegister
}
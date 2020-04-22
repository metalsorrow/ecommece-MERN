const User = require('../model/user');


const getRegister = (req, res, next) => {
    //sendView
}

const postLogin = (req, res, next) => {
    const body = req.body;


}

const postNewRegister = (req, res, next) => {
    const body = req.body;

    User.find({correo: body.correo})
        .then( res => {
            console.log(res)
        })
        .catch( err => {
            console.log(err)
        })
}




module.exports = {
    postLogin,
    postNewRegister,
    getRegister
}
const User = require('../model/user');


const getUsers = ( req, res) => {
     User.find( (err, users) =>{
          if(err){
               return res.status(300).json({
                    ok: false,
                    err
               })
          }

          return res.status(200).json({
               ok: true,
               users
          })

     })
}



module.exports = {
     getUsers
}

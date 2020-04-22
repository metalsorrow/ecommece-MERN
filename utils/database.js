const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/ecommerce';

const  mongooseInstance = ( cb ) => {
    
    mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then( res => {
        cb('db On')
    } )
    .catch( err => {
        console.log(err, 'error');
        cb(err)
    } )
}

module.exports = mongooseInstance;
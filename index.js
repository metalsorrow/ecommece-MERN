const express = require('express');
const morgan = require('morgan');
const mongo = require('./utils/database');
const bodyParser = require('body-parser')

const app = express(morgan('tiny'));

//Middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Variables
app.set('port', process.env.PORT || 3000);


//Routes

const registerRoutes = require('./routes/registerRoutes')
const userRoutes = require('./routes/userRoutes')
// const productRoutes = require('./routes/productRoutes')
const categoryRoutes = require('./routes/categoryRoutes')

app.use('/register', registerRoutes)
app.use('/user', userRoutes);
// app.use('/products', productRoutes)
app.use('/category',categoryRoutes)
app.use((req,res,next)=> {
    res.status(404).json({ok: false, message: 'Method not Found'})
})





mongo( (stateDb) => {
    app.listen(app.get('port'), () => {
        console.log('ok')
        console.log(stateDb)
    });
} )

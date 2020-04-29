module.exports.permissionValidator = (req,res,next) => {
    const {userType} = req.user;

    console.log(`${req.user.nombre} login as a ${userType}`)

    if(userType === 'user'){
        return res.status(401).json({
            ok: false,
            message: 'Privilegios de bajo nivel, no se puede ingresar'
        })
    } else if( userType === 'admin' ){
        req.user.admin = true;
        next();
    } else if( userType === 'mod'){
        next();
    }
}
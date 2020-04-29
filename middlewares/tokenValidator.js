const jwt = require('jsonwebtoken');

const { KEY } = require('../utils/tokenKey');


module.exports.tokenValidator = (req, res, next) => {

    let token = req.get("Authorization");//headers

    jwt.verify(token, KEY, (err, tokenData) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err
            })
        }

        req.user = tokenData;
        next();

    })
}
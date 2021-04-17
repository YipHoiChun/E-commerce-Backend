const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req, res, next) {
    const token = req.header('x-auth-token');
    if(!token){
        return res.status(401).json({msg: 'Cannot find token'})

    }
    try {
        const decodetoken = jwt.verify(token, config.get('SecretKey'));
        req.user = decodetoken.user;
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Invalid token'})

    }
    res.send('login Successful');
}

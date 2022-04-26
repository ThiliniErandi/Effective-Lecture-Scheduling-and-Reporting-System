let User = require('../models/User');
const jwt = require('jsonwebtoken');

module.exports.checkUser = (req, res, next) => {
    const token = req.cookies.jwt;
    const screte = process.env.SECRETE_KEY;

    if (!token) {
        return res.send("A token is required for authentication");
    }

    try {
        const decoded = jwt.verify(token, screte);
        req.user = decoded;
    } catch (err) {

        return res.send("Invalid Token");
    }
    return next();
}
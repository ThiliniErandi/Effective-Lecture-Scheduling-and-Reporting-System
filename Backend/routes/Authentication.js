let User = require('../models/User');
const jwt = require('jsonwebtoken');

module.exports.checkUser = (req, res, next) => {
    const token = req.cookies.jwt;
    const screte = process.env.SECRETE_KEY;

    if (!token) {
        return res.status(403).send("A token is required for authentication");
    }

    try {
        const decoded = jwt.verify(token, screte);
        req.user = decoded;
    } catch (err) {
        return res.status(401).send("Invalid Token");
    }
    return next();
}
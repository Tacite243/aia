const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET || 'your_secret_key';

exports.authenticateToken = (req, res, next) => {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
    if (token) {
        jwt.verify(token, secretKey, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            };
            req.user = user;
            next();
        });
    } else {
        return res.sendStatus(401);
    }
};

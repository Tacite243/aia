const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET || 'your_secret_key';

exports.signToken = (payload) => {
    return jwt.sign(payload, secretKey, { expiresIn: '1h' });
};

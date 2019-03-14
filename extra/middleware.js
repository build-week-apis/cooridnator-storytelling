const jwt = require('jsonwebtoken');
const secret = "CoordinateSecret";

function generateToken(user) {
    const payload = {
      subject: user.id, 
      username: user.username,
      country: user.country,
      role: ['coordinator']
    };
  
    const options = {
      expiresIn: '1d',
    };
  
    return jwt.sign(payload, secret, options);
}

function restricted(req, res, next) {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, secret, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ msg: "Authentication Failed" });
      } else {
        req.decodedJwt = decodedToken;
        next();
      }
    });
  } else {
    res.status(400).json({ msg: 'No Authentication' });
  }
}

module.exports = {
    generateToken,
    restricted
}
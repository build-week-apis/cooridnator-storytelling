function generateToken(user) {
    const secret = "Coordinate";
    const payload = {
      subject: user.id, // sub in payload is what the token is about
      username: user.username,
      role: 'coordinator'
    };
  
    const options = {
      expiresIn: '1d',
    };
  
    return jwt.sign(payload, secret, options);
}

function restricted(req, res, next) {
  const token = req.headers.authorization;
  const secret = "Coordinate";

  if (token) {
    // is it valid?
    jwt.verify(token, secret, (err, decodedToken) => {
      if (err) {
        // record the event
        res.status(401).json({ you: "can't touch this!" });
      } else {
        req.decodedJwt = decodedToken;
        next();
      }
    });
  } else {
    res.status(401).json({ you: 'shall not pass!' });
  }
}

module.exports = {
    generateToken,
    restricted
}
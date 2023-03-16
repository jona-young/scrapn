const jwt = require('jsonwebtoken');

const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;

    // Check jwt validation
    if (token)
    {
        jwt.verify(token, 'BOOKR-JWT', (err, decodedToken) => {
            if (err)
            {
                res.status(400).send({ error: 'jwt'})
            }
            else
            {
                console.log(decodedToken);
                next();
            }
        })
    }
    else
    {
        res.status(400).send({ error: 'jwt'})
    }
}

module.exports = {requireAuth}
const User = require('../models/users.js');
const jwt = require('jsonwebtoken');

// Error handling
const handleErrors = (err) => {
    console.log(err.message, err.code)
    let errors = { name: '', email: '', password: '' }

    // Incorrect login email
    if (err.message === 'incorrect email')
    {
        errors.email = "That email is not registered!";
    } 

    //Incorrect login password
    if (err.message === 'incorrect password')
    {
        errors.password = 'That password is incorrect';
    }

    // Duplicate email error
    if (err.code === 11000)
    {
        errors.email = 'That email is already registered!';
        return errors;
    }

    // Validation errors
    if (err.message.includes('user validation failed: '))
    {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        });
    }

    return errors;
}

const maxAge = 3 * 24 * 60 * 60
const createToken = (id) => {
    return jwt.sign({ id }, 'BOOKR-JWT', {
        expiresIn: maxAge
    })
}

module.exports.signup_post = async (req, res) => {
    const { name, email, password, privilige } = req.body;

    try {
        const user = await User.create({ name, email, password, privilige})
        const token = createToken(user._id);
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
        res.status(200).json({ isLoggedOn: true, name: name });
    }
    catch (err)
    {
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    }
}

module.exports.login_post = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.login(email, password);
        const token = createToken(user._id);
        const userInfo = await User.findById(user._id);
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
        res.status(200).json({ isLoggedOn: true, name: userInfo.name, privilige: userInfo.privilige, token: token });
    }
    catch (err) {
        const errors = handleErrors(err)
        res.status(400).json({ errors });
    }
}

module.exports.logout_get = (req, res) => {
    res.cookie('jwt', '', { httpOnly: true, maxAge: 1 });
    res.status(200).json({ message: 'Successfully logged out!' })
}

module.exports.validate = (req, res) => {
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
                User.findById(decodedToken.id).select('name privilige department')
                .exec(function(err, order) {
                    res.status(200).json({ user: order.name, isLoggedOn: true,
                                           privilige: order.privilige, 
                                           message: 'Validated jwt token' });
                });
            }
        })
    }
    else
    {
        res.status(400).send({ error: 'jwt'})
    }
}

// DELETE :id
module.exports.user_delete = (req, res) => {
    // const token = req.cookies.jwt;
    // const id = req.params.id;

    //  // Check jwt validation
    //  if (token)
    //  {
    //      jwt.verify(token, 'BOOKR-JWT', (err, decodedToken) => {
    //          if (err)
    //          {
    //              console.log(err.message);
    //              res.status(400).send({ errors: {jwt: "Invalid JWT token"}})
    //          }
    //          else
    //          {
                // User.findByIdAndDelete(id)
                // .then((result) => {
                    // res.status(200).cookie('jwt', '', { httpOnly: true, maxAge: 1 });send(result);
                    // })
                // .catch((err) => {
                //     res.status(400)
                // })
    //              })
    //          }
    //      })
    //  }    

     const id = req.params.id;

    User.findByIdAndDelete(id)
    .then((result) => {
        res.status(200).cookie('jwt', '', { httpOnly: true, maxAge: 1 });send(result);

    })
    .catch((err) => {
        res.status(400)
    })

}

module.exports.get_users = (req, res) => {
    User.find()
    .then((result) => {
        let userData = []
        for (let i = 0; i < result.length; i++)
        {
            userData.push({
                nameID: result[i]._id,
                name: result[i].name
            })
        }
        res.send(userData)
    })
    .catch((err) => {
        res.status(err);
    })
}
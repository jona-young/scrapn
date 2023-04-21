const User = require('../models/users.js');
const CourtBooking = require('../models/court-bookings.js')
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
    const rating = 0.00

    try {
        const user = await User.create({ name, email, password, privilige, rating})
        const token = createToken(user._id);
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
        res.status(200).json({ isLoggedOn: true, name: name, privilige: user.privilige, token: token,
            _id: user._id, bookings: [] });
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

            let currentDate = new Date()

            CourtBooking.find({date: {$gte: currentDate.setDate(currentDate.getDate() - 1)}})
            .then((result) => {
                let userCourts = []
    
                for (let i = 0; i < result.length; i++)
                {
                    for (let j = 0; j < result[i].players.length; j++)
                    {
                        if (result[i].players[j].nameID == user._id)
                        {
                            userCourts.push(result[i])
                        }
                    }
                }

                sortUserBookings(userCourts)

                res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
                res.status(200).json({ isLoggedOn: true, name: user.name, 
                                        privilige: user.privilige, token: token,
                                         _id: user._id, bookings: userCourts });
            })
            .catch((err) => {
                res.status(402).send({ error: 'court booking user load error'})
            })

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
                let currentDate = new Date()

                CourtBooking.find({ date: {$gte: currentDate.setDate(currentDate.getDate() - 1)}})
                .then((result) => {
                    let userCourts = []

                    for (let i = 0; i < result.length; i++)
                    {
                        for (let j = 0; j < result[i].players.length; j++)
                        {
                            if (result[i].players[j].nameID == decodedToken.id)
                            {
                                userCourts.push(result[i])
                            }
                        }
                    }

                    sortUserBookings(userCourts)

                    User.findById(decodedToken.id).select('name privilige department')
                    .exec(function(err, order) {
                        res.status(200).json({ user: order.name, _id: decodedToken.id, isLoggedOn: true,
                                                privilige: order.privilige, 
                                                message: 'Validated jwt token',
                                                bookings: userCourts });
                    });
                })
                .catch((err) => {
                    res.status(402).send({ error: 'court booking user load error'})
                    console.log(err)
                })

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
    const token = req.cookies.jwt;
    const id = req.params.id;

     // Check jwt validation
     if (token)
     {
         jwt.verify(token, 'BOOKR-JWT', (err, decodedToken) => {
             if (err)
             {
                 console.log(err.message);
                 res.status(400).send({ errors: {jwt: "Invalid JWT token"}})
             }
             else
             {
                User.findByIdAndDelete(id)
                .then((result) => {
                    res.status(200).cookie('jwt', '', { httpOnly: true, maxAge: 1 }).send(result);
                    })
                .catch((err) => {
                    res.status(400)
                })
             }
         })
     }    
}

module.exports.get_users = (req, res) => {
    User.find()
    .then((result) => {
        let userData = []
        for (let i = 0; i < result.length; i++)
        {
            userData.push({
                nameID: result[i]._id,
                name: result[i].name,
                email: result[i].email,
                rating: result[i].rating.toString()
            })
        }
        res.status(200).send(userData)
    })
    .catch((err) => {
        res.status(err);
    })
}

module.exports.get_user = (req, res) => {
    const id = req.params.id
    const token = req.cookies.jwt;

    // Check jwt validation
    if (token)
    {
        jwt.verify(token, 'BOOKR-JWT', async (err, decodedToken) => {
            if (err)
            {
                res.status(400).send({ errors: {jwt: "Invalid JWT token"}})
            }
            else
            {
                User.findById(id)
                .then((result) => {
                    res.status(200).json({ 
                                            _id: result._id,
                                            name: result.name,
                                           email: result.email,
                                           rating: result.rating.toString()
                                        });
                })
                .catch((err) => {
                    res.status(err);
                })  
            }
        })
    }  
}


module.exports.put_user = (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const token = req.cookies.jwt;

     // Check jwt validation
     if (token)
     {
        console.log('here yee here yee')
         jwt.verify(token, 'BOOKR-JWT', async (err, decodedToken) => {
            console.log('me dude: ', id)
             if (err)
             {
                 console.log(err.message);
                 res.status(400).send({ errors: {jwt: "Invalid JWT token"}})
             }
             else
             {
                console.log('mi goreng: ', body)

                User.findByIdAndUpdate(id, body)
                .then((result) => {
                    console.log('shin ramyun: ', result)
                    res.status(200).send({ result: 'Updated!'})
                })
                .catch((err) => {
                    console.log('deez nuts: ', err)
                    res.status(400);
                })
             }
         })
     }   
}

const sortUserBookings = (courts) => {
    courts.sort(function(a, b) {
        var keyA = new Date(a.date + " " + a.time),
          keyB = new Date(b.date + " " + b.time);
        // Compare the 2 dates
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
      });

    return courts
}
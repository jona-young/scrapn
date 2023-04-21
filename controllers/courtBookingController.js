require('dotenv').config();
const CourtBooking = require('../models/court-bookings.js')
const User = require('../models/users.js')
const jwt = require('jsonwebtoken');



// GET all
module.exports.courtBookings_get = (req, res) => {
    const id = req.params.id;

    CourtBooking.find({date: id})
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        res.status(err);
    })
}

// POST form
module.exports.courtBookings_post = async (req, res) => {
    const body = req.body;
    const bookedCourt = new CourtBooking(body);

    const rulesResult = await rulesCheck(body)

    if (rulesResult.length > 0)
    {
        console.log(rulesResult)
        res.status(444).send({errors: rulesResult})
    }
    else
    {
        bookedCourt.save()
        .then((result) => {
            res.status(200).send({ result: 'Entry posted!' });
        })
        .catch((err) => {
            console.log(err);
            res.status(400).send(err)
        })
    }
}

// GET :id CURRENTLY NOT USED
module.exports.courtBooking_get = (req, res) => {
    const id = req.params.id;

    CourtBooking.findById(id)
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        res.status(err);
    })
}

// PUT :id
module.exports.courtBooking_put = (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const token = req.cookies.jwt;

     // Check jwt validation
     if (token)
     {
         jwt.verify(token, 'BOOKR-JWT', async (err, decodedToken) => {
             if (err)
             {
                 console.log(err.message);
                 res.status(400).send({ errors: {jwt: "Invalid JWT token"}})
             }
             else
             {
                const rulesResult = await rulesCheck(body)

                if (rulesResult.length > 0)
                {
                    res.status(444).send({errors: rulesResult})
                }
                else
                {
                    CourtBooking.findByIdAndUpdate(id, body)
                    .then((result) => {
                        User.findById(decodedToken.id).select('privilige')
                        .exec(function(err, account) {
                            if (account.privilige > 1 || decodedToken.id == result.author)
                            {
                                
                                res.status(200).send({ result: 'Updated!'})
                            }
                            else
                            {
                                res.status(400).send({errors: {privilige: "Error - Only the court owner or staff may edit this court!"}})
                            }
                        })
                    })
                    .catch((err) => {
                        res.status(400);
                    })
                }
             }
         })
     }    
}

// DELETE :id
module.exports.courtBooking_delete = (req, res) => {
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
                CourtBooking.findByIdAndDelete(id)
                .then((result) => {
                    User.findById(decodedToken.id).select('privilige')
                    .exec(function(err, account) {
                        if (account.privilige > 1 || decodedToken.id == result.author)
                        {
                            res.status(200).send(result);
                        }
                        else
                        {
                            res.status(400).send({errors: {privilige: "Error - Account priviliges too low, contact site administrator"}})
                        }
                    })
                })
                .catch((err) => {
                    res.status(400)
                })

             }
         })
     }    
}

const rulesCheck = async (body) => {
    let restrictionMessages = []
    let over3Check = {}
    let players = body.players
    
    for (let i = 0; i < players.length; i++)
    {
        over3Check[players[i].nameID] = [players[i].name, 0];
    }

    let currentDate = new Date()

    const courtSearch = await CourtBooking.find({ date: {$gte: currentDate.setDate(currentDate.getDate() - 1)}})
    .then((result) => {

        for (let i = 0; i < result.length; i++)
        {
            for (let j = 0; j < result[i].players.length; j++)
            {
                if (result[i].players[j].nameID in over3Check)
                {
                    over3Check[result[i].players[j].nameID][1] += 1
                }
            }
        }

        for (const [key, value] of Object.entries(over3Check))
        {
            if (value[1] >= 3)
            {
                restrictionMessages.push(value[0] + " has " + value[1] + " bookings or more.")

            }
        } 

        if (restrictionMessages.length > 0)
        {
            return restrictionMessages
        }
        else
        {
            return []
        }   
    })
    .catch((err) => {
        console.log("Error - finding court bookings with date parameter")
        return []
    })

    return courtSearch
}

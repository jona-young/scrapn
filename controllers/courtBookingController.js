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
module.exports.courtBookings_post = (req, res) => {
    var body = req.body;
    const bookedCourt = new CourtBooking(body);

    let restrictionMessages = []
    let over3Check = {}
    let players = req.body.players
    
    for (let i = 0; i < players.length; i++)
    {
        over3Check[players[i].nameID] = [players[i].name, 0];
    }

    CourtBooking.find()
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
            console.log(restrictionMessages)
            res.status(444).send({errors: restrictionMessages})
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

    })
    .catch((err) => {
        res.status(err);
    })
   
}

// GET :id
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

    CourtBooking.findByIdAndUpdate(id, body)
    .then((result) => {
        res.status(200).send({ result: 'Updated!'})
    })
    .catch((err) => {
        res.status(400);
    })}

// DELETE :id
module.exports.courtBooking_delete = (req, res) => {
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
    //              User.findById(decodedToken.id).select('privilige')
    //              .exec(function(err, account) {
    //                  if (account.privilige > 0)
    //                  {
    //                     CourtBooking.findByIdAndDelete(id)
    //                     .then((result) => {
    //                         res.send(result);
    //                     })
    //                     .catch((err) => {
    //                         res.status(400)
    //                     })
    //                  }
    //                  else
    //                  {
    //                      res.status(400).send({errors: {privilige: "Error - Account priviliges too low, contact site administrator"}})
    //                  }
    //              })
    //          }
    //      })
    //  }    

     const id = req.params.id;

    CourtBooking.findByIdAndDelete(id)
    .then((result) => {
        res.status(200).send(result);
    })
    .catch((err) => {
        res.status(400)
    })

}
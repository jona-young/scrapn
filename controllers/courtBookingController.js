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

    // refactor to check users dynamically
    CourtBooking.find()
    .then((result) => {
        var counter = 0;
        for (var i = 0; i < result.length; i++)
        {
            if (result[i].players[0] == 'Albert Andersen')
            {
                counter++;
            }
        }
        if (counter >= 3)
        {
            res.status(444).send({errors: 'The current member ' + bookedCourt.players[0] + ' currently has 3 bookings'})
        }
        else
        {
            bookedCourt.save()
            .then((result) => {
                res.send({ result: 'Entry posted!' });
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
    const id = req.params.id;

    CourtBooking.findByIdAndDelete(id)
    .then((result) => {
        res.status(200).send(result);
    })
    .catch((err) => {
        res.status(400)
    })

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

}
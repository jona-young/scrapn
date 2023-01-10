require('dotenv').config();
const CourtBooking = require('../models/court-bookings.js')


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
    console.log('the bodeeeeh: ', bookedCourt)

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
            res.smtatus(444).send({errors: 'The current ember ' + bookedCourt.players[0] + ' currently has 3 bookings'})
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
    const id = req.params.id;

    CourtBooking.findByIdAndDelete(id)
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
        res.status(400)
    })
}
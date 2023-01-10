const { Router } = require('express');
const courtBookingController = require('../controllers/courtBookingController.js');

const courtBookingRouter = Router();

// GET - Retrieve all court "infractions
courtBookingRouter.get('/api/court-bookings/:id',  courtBookingController.courtBookings_get);

// POST - Add court "infraction to database
courtBookingRouter.post('/api/court-bookings',  courtBookingController.courtBookings_post);

// GET :id - Find court infraction by id
courtBookingRouter.get('/api/court-bookings/:id', courtBookingController.courtBooking_get);

// PUT :id - Update court infraction by id
courtBookingRouter.put('/api/court-bookings/:id',  courtBookingController.courtBooking_put);

// DELETE :id - Delete court infraction by id
courtBookingRouter.delete('/api/court-bookings/:id',  courtBookingController.courtBooking_delete);

module.exports = courtBookingRouter;
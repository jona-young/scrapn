const { Router } = require('express');
const courtBookingController = require('../controllers/courtBookingController.js');

const courtBookingRouter = Router();

// GET - Retrieve all courts
courtBookingRouter.get('/api/court-bookings/:id',  courtBookingController.courtBookings_get);

// GET - Retrieve all user courts
courtBookingRouter.get('/api/user-bookings/:id',  courtBookingController.userBookings_get);

// POST - Add court "infraction to database
courtBookingRouter.post('/api/court-booking',  courtBookingController.courtBookings_post);

// GET :id - Find court infraction by id
courtBookingRouter.get('/api/court-booking/:id', courtBookingController.courtBooking_get);

// PUT :id - Update court infraction by id
courtBookingRouter.put('/api/court-booking/:id',  courtBookingController.courtBooking_put);

// DELETE :id - Delete court infraction by id
courtBookingRouter.delete('/api/court-booking/:id',  courtBookingController.courtBooking_delete);

module.exports = courtBookingRouter;
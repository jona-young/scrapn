const mongoose = require('mongoose');
const Schema = mongoose.Schema

const courtBookingSchema = new Schema({
    court: {
        type: String,
        required: false
    },
    date: {
        type: String,
        required: false
    },
    time: {
        type: String,
        required: false
    },
    players: [
        {
            type: String,
            required: false
        },
    ],
    author: {
        type: String,
        required: false
    },
    authorID: {
        type: String,
        required: false
    }
    
}, {timestamps: true});

const CourtBookings = mongoose.model('court-booking', courtBookingSchema);
module.exports = CourtBookings;
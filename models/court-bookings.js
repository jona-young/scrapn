const mongoose = require('mongoose');
const Schema = mongoose.Schema

const courtBookingSchema = new Schema({
    court: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    players: [{
        nameID: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        }
    }],
    author: {
        type: String,
        required: true
    },
    authorID: {
        type: String,
        required: false
    }
    
}, {timestamps: true});

const CourtBookings = mongoose.model('court-booking', courtBookingSchema);
module.exports = CourtBookings;
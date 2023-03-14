const mongoose = require('mongoose');
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: false
    },
    bookings: [
        {
            type: String,
            required: false
        },
    ],
}, {timestamps: true});

const Users = mongoose.model('user', userSchema);
module.exports = Users;
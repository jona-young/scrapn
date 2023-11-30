const mongoose = require('mongoose');
const Schema = mongoose.Schema

const tournamentSchema = new Schema({
    name: {
        type: String,
        required: false
    },
    startDate: {
        type: String,
        required: false
    },
    endDate: {
        type: String,
        required: false
    },
    location: { 
        type: String,
        required: false,
    },
    tournamentType: {
        type: String,
        required: false,
    },
    drawSize: {
        type:String,
        required: false,
    },
    matches: [{
        checker: {
            type: Number,
            required: false,
        },
        round: {
            type: String,
            required: false,
        },
        team1: [{
            type: String,
            required: false,
        }],
        score1: [{
            type: String,
            required: false
        }],
        team2: [{
            type: String,
            required: false,
        }],
        score2: [{
            type: String,
            required: false
        }],
        bestof: {
            type: String,
            required: false
        },
        winner: {
            type: String,
            required: false
        },
        location: {
            type: String,
            required: false
        },
        date: {
            type: String,
            required: false,
        },
        skip: {
            type: Boolean,
            required: false
        }
    }],
    author: {
        type: String,
        required: false,
    },
    players: [[{
        type: String,
        required: false
    }]],
    playerType: {
        type: String,
        required: false
    },
    seeds: {
        type: Number,
        required: false
    }
}, {
    timestamps: true
});

const Tournaments = mongoose.model('tournament', tournamentSchema);
module.exports = Tournaments;
const mongoose = require('mongoose');
const Schema = mongoose.Schema

const tournamentSeriesSchema = new Schema({
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
    tournaments: [{
        id: {
            type: String,
            required: true
        }
    }],
    author: {
        type: String,
        required: false,
    },
}, {
    timestamps: true
});

const TournamentSeries = mongoose.model('tournament-series', tournamentSeriesSchema);
module.exports = TournamentSeries;
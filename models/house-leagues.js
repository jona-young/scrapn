const mongoose = require('mongoose');
const Schema = mongoose.Schema

const houseLeagueSchema = new Schema({
    //schema here
}, {
    timestamps: true
});

const HouseLeagues = mongoose.model('house-league', houseLeagueSchema);
module.exports = HouseLeagues
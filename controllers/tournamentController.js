require('dotenv').config();
const mongoose = require('mongoose');
const Tournament = require('../models/tournaments.js')
const TournamentSeries = require('../models/tournament-series.js')
const User = require('../models/users.js')
const jwt = require('jsonwebtoken');
const populateMatchWinners = require('../helpers/populateMatchWinners.js');


// GET all tournaments
module.exports.get_tournaments = (req, res) => {
    Tournament.find()
    .then((result) => {
        let sortedTournaments = {}

        for (let i = 0; i < result.length; i++)
        {
            if (result[i].author in sortedTournaments)
            {
                sortedTournaments[result[i].author].push(result[i])
            }
            else
            {
                sortedTournaments[result[i].author] = []
            }
        }

        res.status(200).send(sortedTournaments)
    })
    .catch((err) => {
        res.status(err);
    })
}

// GET all tournaments for a given user
module.exports.get_usertournaments = (req, res) => {
    const id = req.params.id;

    Tournament.find({ author: id})
    .then((result) => {
        res.status(200).send(result)
    })
    .catch((err) => {
        res.status(err);
    })
}

// GET - Retrieve single tournament
module.exports.get_tournament = (req, res) => {
    const id = req.params.id;

    Tournament.findById(id)
    .then((result) => {
        res.status(200).send(result)
    })
    .catch((err) => {
        res.status(err);
    })
}

// POST - Create tournament
module.exports.post_tournament = (req, res) => {
    const body = req.body;
    const token = req.cookies.jwt;

    // Check jwt validation
    if (token)
    {
        jwt.verify(token, 'BOOKR-JWT', async (err, decodedToken) => {
            if (err)
            {
                console.log(err.message);
                res.status(400).send({ errors: {jwt: "Invalid JWT token"}})
            }
            else
            {
                let tournID = mongoose.Types.ObjectId()
                body.author = decodedToken.id
                body._id = tournID

                let tournament;
                tournament = new Tournament(body)

                tournament.save()
                .then((result) => {
                    TournamentSeries.findOneAndUpdate({"_id": body.seriesID, }, { "$push": {"tournaments": {"id": tournID.toString()}}}, { new: true})
                    .then((tResult) => {
                        res.status(200).send({result: 'success!'});
                    })
                    .catch((err) => {
                        res.status(400).send(err)
                    })
                })
                .catch((err) => {
                    console.log(err);
                    res.status(400).send(err)
                })
            }
        }
        )
    }
}

// PUT - Update tournament
module.exports.put_tournament = (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const token = req.cookies.jwt;

     // Check jwt validation
     if (token)
     {
         jwt.verify(token, 'BOOKR-JWT', async (err, decodedToken) => {
             if (err)
             {
                 console.log(err.message);
                 res.status(400).send({ errors: {jwt: "Invalid JWT token"}})
             }
             else
             {
                if (body.tournamentType !== "round-robin")
                {
                    // Process body matches to auto populate winners from previous rounds
                    const updatedMatchSet = populateMatchWinners(body.matches)
                    body.matches = updatedMatchSet
                }

                Tournament.findByIdAndUpdate(id, body)
                .then((result) => {

                    User.findById(decodedToken.id).select('privilige')
                    .exec(function(err, account) {
                        if (account.privilige > 1 || decodedToken.id == result.author)
                        {
                            res.status(200).send({ result: 'Updated!'})
                        }
                        else
                        {
                            res.status(400).send({errors: {privilige: "Error - Only the court owner or staff may edit this court!"}})
                        }
                    })
                })
                .catch((err) => {
                    res.status(400);
                })
             }
         })
     }    
}

module.exports.get_roundRobinResults = (req, res) => {
    const id = req.params.id;

    Tournament.findById(id)
    .then((result) => {
        //return as an array of rows where each row associates the player to the result
        // of a win/loss of the players as a series of columns
        let standings = {}
        for (let i = 0; i < result.players.length; i++)
        {   
            standings[result.players[i]] = {}
            for (let j = 0; j < result.players.length; j++)
            {
                if (result.players[i] === result.players[j])
                {
                    standings[result.players[i]][result.players[j]] = ""
                }
                else {standings[result.players[i]][result.players[j]] = "TBD"}
            }    
        }

        for (let i = 0; i < result.matches.length; i++)
        {
            let curMatch = result.matches[i]
            if (curMatch.winner === "1")
            {
                standings[curMatch.team1][curMatch.team2] = "WIN"

                standings[curMatch.team2][curMatch.team1] = "LOSS"
            }
            else if (curMatch.winner === "2")
            {
                standings[curMatch.team2][curMatch.team1] = "WIN"

                standings[curMatch.team1][curMatch.team2] = "LOSS"
            }
        }

        res.status(200).send(standings)
    })
    .catch((err) => {
        res.status(err);
    })
}

// DELETE - Delete tournament
module.exports.delete_tournament = (req, res) => {
    const token = req.cookies.jwt;
    const id = req.params.id;

     // Check jwt validation
     if (token)
     {
         jwt.verify(token, 'BOOKR-JWT', (err, decodedToken) => {
             if (err)
             {
                 console.log(err.message);
                 res.status(400).send({ errors: {jwt: "Invalid JWT token"}})
             }
             else
            {             
                Tournament.findByIdAndDelete(id)
                .then((result) => {
                    User.findById(decodedToken.id).select('privilige')
                    .exec(function(err, account) {
                        if (account.privilige > 1 || decodedToken.id == result.author)
                        {
                            TournamentSeries.findOneAndUpdate({"_id": result.seriesID, }, { "$pull": {"tournaments": {"id": id}}}, { new: true})
                            .then((tResult) => {
                                res.status(200).send(result);
                            })
                            .catch((err) => {
                                res.status(400).send(err)
                            })
                        }
                        else
                        {
                            res.status(400).send({errors: {privilige: "Error - Account priviliges too low, contact site administrator"}})
                        }
                    })
                })
                .catch((err) => {
                    res.status(400)
                })
             }
         })
     }    
}

// GET all tournaments for a given user
module.exports.get_usertournamentseries = (req, res) => {
    const id = req.params.id;

    TournamentSeries.find({ author: id})
    .then((result) => {
        res.status(200).send(result)
    })
    .catch((err) => {
        res.status(err);
    })
}

// GET - Retrieve single tournament series with it's respective tournaments
module.exports.get_tournamentseries = (req, res) => {
    const id = req.params.id;

    TournamentSeries.findById(id)
    .then((seriesResult) => {
        let tournIDs = []
        for (var i = 0; i < seriesResult.tournaments.length; i++)
        {
            tournIDs.push(seriesResult.tournaments[i].id)
        }
        
        Tournament.find({
            '_id': { $in: 
                tournIDs
            }
        })
        .then((result) => {
            res.status(200).send({ 
                name: seriesResult.name,
                tournaments: result})
        })
        .catch((err) => {
            res.status(err);
        })
    })
    .catch((err) => {
        res.status(err)
    })
}

// GET - Retrieve single tournament series information for update form
module.exports.get_tournamentseriesinfo = (req, res) => {
    const id = req.params.id;

    TournamentSeries.findById(id)
    .then((result) => {
        res.status(200).send(result)
    })
    .catch((err) => {
        res.status(err)
    })
}

// POST - Create tournament
module.exports.post_tournamentseries = (req, res) => {
    const body = req.body;
    const token = req.cookies.jwt;

    // Check jwt validation
    if (token)
    {
        jwt.verify(token, 'BOOKR-JWT', async (err, decodedToken) => {
            if (err)
            {
                console.log(err.message);
                res.status(400).send({ errors: {jwt: "Invalid JWT token"}})
            }
            else
            {
                body.author = decodedToken.id
                
                let series;
                series = new TournamentSeries(body)

                series.save()
                .then((result) => {
                    res.status(200).send({ result: 'Entry posted!' });
                })
                .catch((err) => {
                    console.log(err);
                    res.status(400).send(err)
                })
            }
        }
        )
    }
}

// PUT - Update tournament
module.exports.put_tournamentseries = (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const token = req.cookies.jwt;

     // Check jwt validation
     if (token)
     {
         jwt.verify(token, 'BOOKR-JWT', async (err, decodedToken) => {
             if (err)
             {
                 console.log(err.message);
                 res.status(400).send({ errors: {jwt: "Invalid JWT token"}})
             }
             else
             {
                TournamentSeries.findByIdAndUpdate(id, body)
                .then((result) => {

                    User.findById(decodedToken.id).select('privilige')
                    .exec(function(err, account) {
                        if (account.privilige > 1 || decodedToken.id == result.author)
                        {
                            res.status(200).send({ result: 'Updated!'})
                        }
                        else
                        {
                            res.status(400).send({errors: {privilige: "Error - Only the court owner or staff may edit this court!"}})
                        }
                    })
                })
                .catch((err) => {
                    res.status(400);
                })
             }
         })
     }    
}

// DELETE - Delete tournament
module.exports.delete_tournamentseries = (req, res) => {
    const token = req.cookies.jwt;
    const id = req.params.id;

     // Check jwt validation
     if (token)
     {
         jwt.verify(token, 'BOOKR-JWT', (err, decodedToken) => {
             if (err)
             {
                 console.log(err.message);
                 res.status(400).send({ errors: {jwt: "Invalid JWT token"}})
             }
             else
            {          
                TournamentSeries.findByIdAndDelete(id)
                .then((result) => {
                    User.findById(decodedToken.id).select('privilige')
                    .exec(function(err, account) {
                        if (account.privilige > 1 || decodedToken.id == result.author)
                        {
                            let delTournaments = []
                            for (var i = 0; i < result.tournaments.length; i++)
                            {
                                delTournaments.push(result.tournaments[i].id)
                            }

                            Tournament.deleteMany({ _id: { $in: delTournaments } })
                            .then((result) => {
                                res.status(200).send(result);
                            })
                            .catch((err) => {
                                res.status(400).send({ errors: "issue deleting tournaments"})

                            })
                        }
                        else
                        {
                            res.status(400).send({errors: {privilige: "Error - Account priviliges too low, contact site administrator"}})
                        }
                    })
                })
                .catch((err) => {
                    res.status(400)
                })

             }
         })
     }    
}
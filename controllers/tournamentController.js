require('dotenv').config();
const Tournament = require('../models/tournaments.js')
const User = require('../models/users.js')
const jwt = require('jsonwebtoken');
const pdf = require('html-pdf');
const drawTemplate = require('../helpers/drawsTemplate.js');
const populateMatchWinners = require('../helpers/populateMatchWinners.js');


// GET all
module.exports.get_tournaments = (req, res) => {
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
                body.author = decodedToken.id
                const tournament = new Tournament(body);

                tournament.save()
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
                // Process body matches to auto populate winners from previous rounds
                const updatedMatchSet = populateMatchWinners(body.matches)
                body.matches = updatedMatchSet

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

// DELETE - Delete tournament

// // GET - export tournament
// module.exports.export_tournament = (req, res) => {
//     const body = req.body;

//     pdf.create(drawTemplate(body, "download"), {}).toStream((err, stream) => {
//         if (err) {
//             res.send({error: err});
//         }
//         else
//         {
//             stream.on('end', () => {
//                 return res.end()
//             })    
            
//             stream.pipe(res)
//         }
//     })
// }

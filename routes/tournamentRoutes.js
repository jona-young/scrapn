const { Router } = require('express');
const tournamentController = require('../controllers/tournamentController.js');

const tournamentRouter = Router();

// GET - Retrieve all tournaments
tournamentRouter.get('/api/tournaments',  tournamentController.get_tournaments);

// GET - Retrieve all tournaments by user account
tournamentRouter.get('/api/user-tournaments/:id',  tournamentController.get_usertournaments);

// GET - Retrieve single tournament
tournamentRouter.get('/api/tournament/:id',  tournamentController.get_tournament);

// POST - Create tournament
tournamentRouter.post('/api/tournament', tournamentController.post_tournament);

// PUT - Update tournament
tournamentRouter.put('/api/tournament/:id', tournamentController.put_tournament);

// DELETE - Delete tournament
tournamentRouter.delete('/api/tournament/:id',  tournamentController.delete_tournament);

// GET - Retrieve round robin results
tournamentRouter.get('/api/round-robin/:id', tournamentController.get_roundRobinResults);

// GET - Retrieve all tournament series by user account
tournamentRouter.get('/api/user-tournament-series/:id',  tournamentController.get_usertournamentseries);

// GET - Retrieve single tournament series
tournamentRouter.get('/api/tournament-series/:id',  tournamentController.get_tournamentseries);

// GET - Retrieve single tournament series
tournamentRouter.get('/api/tournament-seriesinfo/:id',  tournamentController.get_tournamentseriesinfo);


// POST - Create tournament series
tournamentRouter.post('/api/tournament-series', tournamentController.post_tournamentseries);

// PUT - Update tournament series
tournamentRouter.put('/api/tournament-series/:id', tournamentController.put_tournamentseries);

// DELETE - Delete tournament series
tournamentRouter.delete('/api/tournament-series/:id',  tournamentController.delete_tournamentseries);

module.exports = tournamentRouter;
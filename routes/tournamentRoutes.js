const { Router } = require('express');
const tournamentController = require('../controllers/tournamentController.js');

const tournamentRouter = Router();

// GET - Retrieve all tournaments by user account
tournamentRouter.get('/api/tournaments/:id',  tournamentController.get_tournaments);

// GET - Retrieve single tournament
tournamentRouter.get('/api/tournament/:id',  tournamentController.get_tournament);

// POST - Create tournament
tournamentRouter.post('/api/tournament', tournamentController.post_tournament);

// PUT - Update tournament
tournamentRouter.put('/api/tournament/:id', tournamentController.put_tournament);

// DELETE - Delete tournament

// GET - Download tournament draw
// tournamentRouter.post('/api/download-draw/', tournamentController.export_tournament)

module.exports = tournamentRouter;
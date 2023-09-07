const { Router } = require('express');
const houseLeagueController = require('./controllers/houseLeagueController.js');

const houseLeagueRouter = Router();

// GET - Retrieve all house leagues
houseLeagueRouter.get('/api/house-leagues',  houseLeagueController.get_houseleagues);

// GET - Retrieve single house league
houseLeagueRouter.get('/api/house-league/:id',  houseLeagueController.get_houseleague);

// POST - Create house league
houseLeagueRouter.post('/api/house-league', houseLeagueController.post_houseleague);

// PUT - Update house league
houseLeagueRouter.put('/api/house-league/:id', houseLeagueController.put_houseleague);

// DELETE - Delete tournament
houseLeagueRouter.delete('/api/house-league/:id',  houseLeagueController.delete_houseleague);

module.exports = houseLeagueRouter;
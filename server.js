require ('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
var bodyParser = require('body-parser')
// routes
const courtBookingRoutes = require('./routes/courtBookingRoutes.js');
const userRoutes = require('./routes/userRoutes.js');
const tournamentRoutes = require('./routes/tournamentRoutes.js');


// Express app
const app = express();

// CORS settings
app.use(cors({
    origin: process.env.CLIENT_API,
    credentials: true, // <= Accept credentials (cookies) sent by the client
}))

// Connect to MongoDB and wait for data load to listen for requests
mongoose.connect(process.env.DBURI)
.then(() => app.listen(process.env.PORT))
.catch((err) => console.log(err));

mongoose.set('strictQuery', true);

// Middleware
app.use(express.static(path.join(__dirname, "client/build")));
app.use(express.json());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(cookieParser());

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Origin', req.headers.origin); 
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');     
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');   
    next(); 
});

app.use(courtBookingRoutes);

app.use(userRoutes);

app.use(tournamentRoutes);

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
 }); 
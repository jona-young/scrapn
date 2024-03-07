# SCRAPN - Tournament Draw Web Application

A lightweight tournament draw creation web application! Essentially you create a Tournament Series which acts as an event to house the tournaments contained within the event. At which point you may make multiple tournament draws (single-elimination up to 64 teams and round-robin up to 6 teams) in both singles and doubles. The draws are created and in the case of round robin, the matches are pre-determined.

This utility of this project is to create a platform allowing individuals or organizations running a competition, the ability to create tournament draws, update draws, and display draws online.

Getting Started
 1) In terminal, "git clone [repository link]
 2) Install MongoDB Community Edition (https://www.mongodb.com/docs/manual/administration/install-community/)
 4) In terminal, "npm install" or "npm install --legacy-peer-deps"
 5) Open 2 terminal instances and in one run "nodemon app" for the node js server and in the second one, cd to client and run "npm start" for the react client

Need Help?
 - Issues with connecting to the database?
     - mongoose connection to mongodb community edition is in the node server.js file setup as the default mongodb connection "mongodb://127.0.0.1:27017"

// JavaScript for FuturamaFriendFinder


// DEPENDENCIES ========================================
// 

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Will need to require friendsArray from 'friends.js' on one of these pages....
// const friends = require('./app/data/friends.js/friendsArray'); ***


// EXPRESS SETUP ========================================
// 

let app = express();
const PORT = process.env.PORT || 8080;

// Setup for Express to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// ROUTING SETUP ========================================
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);


// LISTENER ========================================
//

// 'Starts' the server  ~WORKS
app.listen(PORT, function() {
	console.log('App listening on PORT: ' + PORT);
	console.log("------------------------------------");
});

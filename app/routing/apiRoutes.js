// API Routes for FriendFinder App

// REQUIREMENTS ========================================
// 

let friends = require('../data/friends');
const path = require('path');


// ROUTING ========================================
//

module.exports = function(app) {
	
  // API GET Request
  app.get('/api/friends', function(req, res) {
    // Need to get the form data to SAVE here

    // app.get(path.join(__dir) )

  	res.json(friends);
  });


  // API POST Requests
  app.post('/api/friends', function(req, res) {
  	
    friends.push(req.body);

    // save the req.body to new var




  	// Will friend matching happen here?????? ~YES
    // Needs to compare newly entered scores with exisiting friends scores
    // Modulus doesn't do the math correctly each time...
    // Need 5-3 & 3-5 = 2......
    // Math.abs() to the rescue!

    // compareFriends();

  });
};


// FUNCTIONS ========================================
// 

// function compareFriends() {

//   for (var i = 0; i < friends.length; i++) {
    
//     console.log(friends[i]);
//     // ^^See if this gets in there...
//   }

// }
// API Routes for FriendFinder App

// REQUIREMENTS ========================================
// 

let friendsData = require('../data/friends.js');
const path = require('path');


// ROUTING ========================================
//

module.exports = function(app) {
	
  // API GET Request
  app.get('/api/friends', function(req, res) {
    // Need to get the form data to SAVE here

    // app.get(path.join(__dir) )

  	res.json(friendsData);
  });


  // API POST Requests
  app.post('/api/friends', function(req, res) {
  	
    friendsData.push(req.body);
    // Not sure if "friendsData" is right here....

    // save the req.body to new var




  	// Will friend matching happen here?????? ~YES
    // Needs to compare newly entered scores with exisiting friends scores

    // Math.abs() to the rescue!

    console.log('compareFriends called from apiRoutes');  //This gets triggered
    
    compareFriends();
    

  });
};


// FUNCTIONS ========================================
// 

function compareFriends() {

  for (var i = 0; i < friendsData.length; i++) {
    
    console.log("------------------------------------");
    console.log('friendsData in compareFriends()');
    console.log(friendsData[i]);
    // ^^See if this gets in there...
  }

}
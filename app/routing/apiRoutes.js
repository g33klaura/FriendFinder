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


  // API POST Request
  app.post('/api/friends', function(req, res) {
  	
    friendsData.push(req.body);

    console.log('compareFriends called from apiRoutes');  //This gets triggered

    compareFriends();

    // Will friend matching happen here?????? ~YES
    // Needs to compare newly entered scores with exisiting friends scores

    // Math.abs() to the rescue!

  });
};


// FUNCTIONS ========================================
// 

function compareFriends() {

  // Loop through friends.js except for the one that's just been added
  for (var i = 0; i < (friendsData.length -1); i++) {
    
    console.log("------------------------------------");
    // console.log('friendsData in compareFriends()');
    // console.log(friendsData[i]);
    // ^^See if this gets in there... ~YES
    console.log(friendsData[i].name);
    console.log(friendsData[i].scores);
  }

  // console.log(surveyInputs);
  // undefined :(

}
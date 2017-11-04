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
    
    // console.log("------------------------------------");
    // console.log('friendsData in compareFriends()');
    // console.log(friendsData[i]);
    // ^^See if this gets in there... ~YES
    // console.log(friendsData[i].name);
    // console.log(friendsData[i].scores);
  }

  // Survey inputs should always be at index [5]...
  // Try comparing just index [0] to [5]
  var friendZero = friendsData[0].scores;
    console.log(friendZero);

  var newFriend = friendsData[5].scores;
    // console.log(newFriend);

  // OMG THEY'RE INTEGERS!!!!!!! *confetti*
  var newFriendInt = newFriend.map(Number);
    console.log(newFriendInt);

  console.log("------------------------------------");
  // Thing I found online...
  // I have NOOOOO idea what numbers it's logging tho.... :(
  // Tried !== 0, < 0, > 0, no argument
  // var diff = friendZero.filter(x => newFriendInt.indexOf(x) < 0);
    // console.log(diff);

  // var matchFriendZero = Math.abs(friendZero - newFriendInt);
    // console.log(matchFriendZero);  //NaN

    friendZero.forEach(function(element) {
      console.log(element);
    })

}
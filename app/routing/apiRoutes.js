// API Routes for FriendFinder App

// REQUIREMENTS & VARIABLES =======================
// 

let friendsData = require('../data/friends.js');
const path = require('path');

let totalDifference;


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
  	
    // friendsData.push(req.body);
    var userData = req.body;
    var userScores = userData.scores;
    var userScoresInt = userScores.map(Number)

    console.log('compareFriends called from apiRoutes');  //This gets triggered

    // compareFriends();

    // Loop through friends.js except for the one that's just been added
    for (var i = 0; i < (friendsData.length); i++) {
    
    var currentFriend = friendsData[i];
    totalDifference = 0;

    console.log(currentFriend.name);    

    

    // console.log("------------------------------------");
    // console.log('friendsData in compareFriends()');
    // console.log(friendsData[i]);
    // ^^See if this gets in there... ~YES
    // console.log(friendsData[i].name);
    // console.log(friendsData[i].scores);
  
      for (var j = 0; j < currentFriend.scores.length; j++) {
        
        var currentFriendScore = currentFriend.scores[j];

        var currentUserScores = userScoresInt[j];
          // console.log('Current User Scores: ' + currentUserScores);
 
        totalDifference += Math.abs(currentUserScores - currentFriendScore);

        // console.log(totalDifference);

      }

      // totalDifference += Math.abs(currentUserScores - currentFriendScore);

      console.log(totalDifference);

  }
  // ^^Closes overall for loop

  });
};


// FUNCTIONS ========================================
// 






  // Survey inputs should always be at index [5]...
  // Try comparing just index [0] to [5]
  // var friendZero = friendsData[0].scores;
    // console.log(friendZero);

  // =======================
  // USER SURVEY DATA
  // var newFriend = friendsData[5].scores;
    // console.log(newFriend);

  // OMG THEY'RE INTEGERS!!!!!!! *confetti*
  // var newFriendInt = newFriend.map(Number);
    // console.log(newFriendInt);

  // console.log("------------------------------------");
  // Thing I found online...
  // I have NOOOOO idea what numbers it's logging tho.... :(
  // Tried !== 0, < 0, > 0, no argument
  // var diff = friendZero.filter(x => newFriendInt.indexOf(x) < 0);
    // console.log(diff);

  // var matchFriendZero = Math.abs(friendZero - newFriendInt);
    // console.log(matchFriendZero);  //NaN

    //Loop over one and compare to the other
        // for (var i = 0, i < friendZero.length;i++) {
        // Check if we have nested arrays
          // for (var j = 0, i < newFriend.length; i++) {
            // if (friendZero[i] == newFriend[i] ) {
            // recurse into the nested arrays
            // var temp = [];
                  // temp.push(newFriend[i]);
                  //total matches
              // var score = temp.length;
              //find friend with the most total matches


            // }           
            // else if (this[i] != array[i]) { 
                // Warning - two different object instances will never be equal: {x:20} != {x:20}
                // return false;   
    //         }
    //     }         
    // }


    // friendZero.forEach(function(benderElement) {
    //   console.log(benderElement);
    // })

    // newFriendInt.forEach(function(userElement) {
    //   console.log(userElement);
    // })

    // var differences = benderElement - userElement;
    // console.log(differences);

// }
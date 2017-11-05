// API Routes for FriendFinder App

// REQUIREMENTS & VARIABLES =======================
// 

let friendsData = require('../data/friends.js');
const path = require('path');

// Will later hold difference between friendsArray friends and user's survey responses
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

    // Save user's survey inputs to new vars
    var userData = req.body;
    var userScores = userData.scores;
    var userScoresInt = userScores.map(Number)  //Converts scores strings to integers

    // console.log('compareFriends called from apiRoutes');

    // Loop through friends.js 
    for (var i = 0; i < (friendsData.length); i++) {
    
      // Saves each friend's data to new var so can grab just name and scores
      var currentFriend = friendsData[i];
      
      // Sets totalDiff to 0 when looping through each friend
      totalDifference = 0;

      console.log(currentFriend.name);

      // Will need photo link
      // console.log(currentFriend.photo);

      // SECOND loop through just the scores of one friend at a time
      for (var j = 0; j < currentFriend.scores.length; j++) {
        
        var currentFriendScore = currentFriend.scores[j];

        var currentUserScores = userScoresInt[j];
          // console.log('Current User Scores: ' + currentUserScores);
 
        // FINALLY, the total difference btwn each friend and the user's scores
        totalDifference += Math.abs(currentUserScores - currentFriendScore);

        // console.log(totalDifference);  ~don't put in this loop

      }

      // Lowest number of total differnce should be match
      console.log(totalDifference);
      console.log("------------------------------------");


      // Finding a match ============================  ~Nope...
      // let Friends = [];

      // let friend = currentFriend.name;

      // Friends.push({friend: totalDifference});
      //   console.log(Friends);

    }  // Closes overall for loop

  });  // Closes post request
};


// FUNCTIONS ========================================
// 


// Everything I worked on before getting help with the loop-in-loop....

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
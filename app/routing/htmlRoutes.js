// HTML Routes for FriendFinder App

// DEPENDENCIES ========================================
// 

const path = require('path');  //Built-in method, not npm package


// ROUTING ========================================
//

module.exports = function(app) {
	
	// HTML GET Requests
  // Handles when users "visit" a page
  app.get('/survey', function(req, res) {
  	res.sendFile(path.join(__dirname, '../public/survey.html'));
  });

  // Defaults to home if not matching route is found
  app.get('*', function(req, res) {
  	res.sendFile(path.join(__dirname, '../public/home.html'));
  });
};

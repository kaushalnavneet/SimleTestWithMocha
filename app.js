/*eslint-env node*/

//-----------------------------------------------------------------------------3asd21-
// hello world app is based on node.js starter application for Bluemixasd
//------------------------------------------------------------------------aasdasd------

// This application uses express as its web server
// for more info, see: http://expressjs.com123123
var express = require('express');

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenvasd
var cfenv = require('cfenv');

// create a new express server
var app = express();

var a, b, c, d,e ,f;
// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));

// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function() {

	// print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
});

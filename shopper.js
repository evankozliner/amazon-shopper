var system = require('system');
var args = system.args;

var purchaser = require(phantom.libraryPath + '/purchaser.js')
var strings = require(phantom.libraryPath + '/strings.js')
var login = require(phantom.libraryPath + '/login.js')
var page = require('webpage').create();
var loadInProgress = false;
var testindex = 0;

purchaser.print('hello world');

EMAIL = args[1];
PASS = args[2];
JQUERY_URL = "http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js";

page.onConsoleMessage = function(msg) {
  console.log(msg);
};

page.onLoadStarted = function() {
  console.log("load started");
};

page.onLoadFinished = function() {
  console.log("load finished");
  console.log("Logging in with email: " + EMAIL + " and password: " + PASS);
};

var steps = [
  login.login // sign into the page
]
page.open(strings.getAmazonUrl(), function() {
  steps.forEach(function(f, i) {
    f(page);
  });
  phantom.exit();  
});

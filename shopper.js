var system = require('system');
var args = system.args;

var purchaser = require(phantom.libraryPath + '/purchaser.js')
var strings = require(phantom.libraryPath + '/strings.js')
var login = require(phantom.libraryPath + '/login.js')
var page = require('webpage').create();
var loadInProgress = false;
var stepIndex = 0;

page.settings.userAgent = strings.getUserAgent();

purchaser.print('hello world');

var steps = [
  login.login, // sign into the page
  purchaser.purchase
]

page.onConsoleMessage = function(msg) {
  console.log(msg);
};

page.onLoadStarted = function() {
  console.log("load started");
};

page.onLoadFinished = function() {
  console.log("load finished");
};

page.onUrlChanged = function(targetUrl) {
  console.log('New URL: ' + targetUrl);
};
page.open(strings.getAmazonUrl(), function() {
  steps.forEach(function(f, i) {
    setTimeout(function() {
      page.render(i + ".png");
      console.log("step " + i);
      f(page, args);
    }, i * 10000);
  });
});

let dependencyTwo = require('dependency-two');

module.exports = function() {
  console.log('dependency three start');
  dependencyTwo();
  console.log('dependency three end, awesome!');
};
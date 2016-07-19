
var bids = require('./../controllers/bids.js');
var users = require('./../controllers/users.js');

module.exports = function(app){
  app.post('/register', users.register);
  app.post('/add', bids.add);
  app.get('/findBids1', bids.find1);
  app.get('/findBids2', bids.find2);
  app.get('/findBids3', bids.find3);
  app.get('/findHigh1', bids.high1);
  app.get('/findHigh2', bids.high2);
  app.get('/findHigh3', bids.high3);
  app.get('/clear', bids.clearAll); 
  app.get('/session', users.getSession);
}

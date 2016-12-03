/*

  User Story: I can pass a string as a parameter, and it will
  check to see whether that string contains either a unix
  timestamp or a natural language date (example: January 1, 2016).

  User Story: If it does, it returns both the Unix timestamp and
  the natural language form of that date.

  User Story: If it does not contain a date or Unix timestamp, 
  it returns null for those properties.

  https://timestamp-ms.herokuapp.com/
  https://timestamp-ms.herokuapp.com/December%2015,%202015
  https://timestamp-ms.herokuapp.com/1450137600

*/

var path = require('path');
var moment = require('moment');

var dateFormats = ["YYYY-MM-DD",
                   "D-M-YYYY","DD-MM-YYYY", "D-MM-YYYY", "DD-M-YYYY",
                   "M-D-YYYY", "MM-DD-YYYY", "M-DD-YYYY", "M-DD-YYYY",
                   "DD MMMM YYYY", "DD MMMM, YYYY",
                   "Do MMMM YYYY", "Do MMMM, YYYY",
                   "DD MMM YYYY", "DD MMM, YYYY",
                   "Do MMM YYYY", "Do MMM, YYYY",
                   "MMMM DD YYYY", "MMMM DD, YYYY",
                   "MMMM Do YYYY", "MMMM Do, YYYY",
                   "MMM DD YYYY", "MMM DD, YYYY",
                   "MMM Do YYYY", "MMM Do, YYYY",
                   "X"
                  ];

module.exports = function(app) {

    var months = [ "January", "February", "March",
                   "April", "May", "June", "July",
                   "August", "September", "October",
                   "November", "December"
                 ];

    app.get('/node-examples/timestamp/:date', function(req, res) {
        var date = moment.utc(req.params.date,
                              dateFormats,
                              true);
        var unix = null,
            natural = null;

        var query = req.params.date.toString();

        if (date.isValid()) {
            unix = date.format("X").toString();
            natural = date.format("Do MMMM, YYYY").toString();
        }

        res.json({query, unix, natural});
        
    });
    app.get('/node-examples/timestamp', function(req, res) {
        res.sendFile(path.join(__dirname + '/timestamp.html'));
    });
    
};
                
        
